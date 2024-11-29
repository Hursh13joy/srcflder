// Sample products data
const products = [
    { id: 1, name: "Pet Collar", category: "accessories", price: 15, image: "collar.jpg" },
    { id: 2, name: "Pet Leash", category: "accessories", price: 12, image: "leash.jpg" },
    { id: 3, name: "Chew Toy", category: "toys", price: 10, image: "chew-toy.jpg" },
    { id: 4, name: "Interactive Ball", category: "toys", price: 8, image: "interactive-ball.jpg" },
    { id: 5, name: "Fish Oil Supplements", category: "food-supplements", price: 20, image: "fish-oil.jpg" },
    { id: 6, name: "Multivitamins", category: "food-supplements", price: 18, image: "multivitamins.jpg" }
];

// Cart array
let cart = [];

// Function to display products
function displayProducts(category = 'all') {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    // Filter products by category
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });
}

// Function to filter products by category
function filterCategory(category) {
    displayProducts(category);
}

// Function to add items to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItemElement);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total}`;
}

// Function to handle checkout
function checkout() {
    if (cart.length > 0) {
        alert('Proceeding to checkout...');
    } else {
        alert('Your cart is empty!');
    }
}

// Initial display of all products
displayProducts();
