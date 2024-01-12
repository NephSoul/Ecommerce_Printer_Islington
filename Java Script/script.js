// Example JavaScript code for dynamic content or form validation
document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code goes here

    // For example, changing the style of a navigation link dynamically
    var navLink = document.querySelector('nav a[href="index.html"]');
    if (navLink) {
        navLink.style.color = 'red';
        // Add more dynamic behavior as needed
    }
});
// JavaScript code for buying products
function buyProduct(productName, price) {
    alert(`You have successfully purchased ${productName} for $${price}. Thank you for shopping with us!`);
}
