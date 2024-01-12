// JavaScript code for products section
function showProductDetails(name, price) {
    document.getElementById('modal-product-name').innerHTML = name;
    document.getElementById('modal-product-description').innerHTML = "Description of " + name + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    document.getElementById('modal-product-price').innerHTML = "Price: $" + price;
    document.getElementById('product-details-modal').style.display = 'block';
}

function closeProductDetailsModal() {
    document.getElementById('product-details-modal').style.display = 'none';
}

function addToCart(name, price) {
    // Implement logic to add product to cart (can be expanded based on your needs)
    alert(name + " added to cart. Price: $" + price);
}
