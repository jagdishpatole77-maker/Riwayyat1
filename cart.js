// Cart Functionality
const CART_KEY = 'riwayyat_cart';

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(item) {
    const cart = getCart();
    // Check if item already exists
    if (!cart.some(cartItem => cartItem.id === item.id)) {
        cart.push(item);
        saveCart(cart);
        alert('Item added to cart!');
    } else {
        alert('This item is already in your cart.');
    }
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    renderCart(); // Re-render if on cart page
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const cart = getCart();
    const countSpans = document.querySelectorAll('#cart-count');
    countSpans.forEach(span => {
        if (span) {
            span.innerText = cart.length > 0 ? `(${cart.length})` : '';
        }
    });
}

// Ensure this runs on all pages when cart.js is loaded
document.addEventListener('DOMContentLoaded', updateCartCount);


// Book Now / Add to Cart Logic
window.bookNow = function (btnOrId) {
    let card;

    // Handle both button element or ID
    if (typeof btnOrId === 'string') {
        return;
    } else {
        card = btnOrId.closest('.product-card');
    }

    if (card) {
        const id = card.getAttribute('data-id') || Math.random().toString(36).substr(2, 9);
        const img = card.querySelector('img').src;
        const name = card.querySelector('h3').innerText;
        const price = card.querySelector('.price').innerText;

        const item = {
            id,
            name,
            price,
            img
        };

        addToCart(item);
    }
};

// Checkout / Rent Logic
function rentItems() {
    alert('Thank you for your request! We will contact you shortly to confirm your rental.');
    clearCart();
}

// Render Cart (for cart.html)
function renderCart() {
    const container = document.getElementById('cart-container');
    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Browse our collections to find your perfect look.</p>
                <a href="index.html" class="btn-primary" style="margin-top: 1rem; display: inline-block;">Start Browsing</a>
            </div>
        `;
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;
    });

    html += `
        <div class="cart-summary">
            <h3>Total Items: ${cart.length}</h3>
            <button class="btn-primary" onclick="rentItems()" style="margin-top: 1rem; width: 100%; max-width: 300px;">Rent Now</button>
        </div>
    `;

    container.innerHTML = html;
}
