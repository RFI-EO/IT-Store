// Load items from JSON
async function loadItems() {
    const res = await fetch("./items.json");  // Correct for GitHub Pages
    return await res.json();
}

// Show featured items on homepage
loadItems().then(items => {
    const featured = document.getElementById("featured-items");
    if (featured) {
        featured.innerHTML = items.slice(0, 3).map(item => `
            <div class="card">
                ${item.images[0]}
                <h3>${item.name}</h3>
                <p>R${item.price}</p>
                ./product.html?id=${item.id}View</a>
            </div>
        `).join('');
    }
});

// Products page list
loadItems().then(items => {
    const list = document.getElementById("products-list");
    if (list) {
        list.innerHTML = items.map(item => `
            <div class="card">
                ${item.images[0]}
                <h3>${item.name}</h3>
                <p>R${item.price}</p>
                ./product.html?id=${item.id}View</a>
            </div>
        `).join('');
    }
});

// Product detail page
loadItems().then(items => {
    const detail = document.getElementById("product-details");
    if (detail) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const item = items.find(i => i.id == id);

        // Build gallery
        const gallery = item.images.map(img => `
            ${img}
        `).join('');

        detail.innerHTML = `
            <div class="gallery">${gallery}</div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>Condition:</strong> ${item.condition}</p>
            <p><strong>Stock:</strong> ${item.stock}</p>
            <h3>R${item.price}</h3>
            https://wa.me/27814866251?text=Hi,%20I
                Buy via WhatsApp
            </a>
        `;
    }
});
