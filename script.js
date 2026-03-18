// Load items from JSON
async function loadItems() {
    const res = await fetch("./items.json");
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
                <a class="btn" href="./product.html?id=${item.id}">View</a>
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
                <a class="btn" href="./product.html?id=${item.id}">View</a>
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

        const gallery = item.images.join('');

        detail.innerHTML = `
            <div class="gallery">${gallery}</div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>Condition:</strong> ${item.condition}</p>
            <p><strong>Stock:</strong> ${item.stock}</p>
            <h3>R${item.price}</h3>
            <a class="btn" href="https://wa.me/27814866251?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}">Buy via WhatsApp</a>
        `;
    }
});
