// Cart functionality
let cartItems = [];

// Create cart badge
const cartBadge = document.createElement('div');
cartBadge.className = 'fixed top-16 right-4 bg-teal-600 text-white px-6 py-4 rounded-lg shadow-lg hidden z-50 w-96';
document.body.appendChild(cartBadge);

// Update cart display
function updateCartBadge() {
    if (cartItems.length === 0) {
        cartBadge.classList.add('hidden');
        return;
    }
    
    cartBadge.classList.remove('hidden');
    
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    cartBadge.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Carrito (${cartItems.length} items)</h3>
            <button onclick="clearCart()" class="text-sm hover:text-gray-300">Vaciar</button>
        </div>
        <div class="mt-2 max-h-128 overflow-y-auto">
            ${cartItems.map(item => `
                <div class="flex justify-between items-center mb-4 p-2 rounded-lg bg-white/5">
                    <span class="text-base">${item.name}</span>
                    <span class="text-base">$${item.price}</span>
                </div>
            `).join('')}
        </div>
        <div class="mt-4 border-t pt-4">
            <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-semibold">Total:</span>
                <span class="text-lg font-semibold">$${total}</span>
            </div>
            <button onclick="checkout()" class="w-full bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-gray-100 text-lg font-semibold transition">
                Ir a la compra
            </button>
        </div>
    `;
}

// Add to cart
function addToCart(guitar) {
    if (!guitar || !guitar.name || !guitar.price) {
        console.error('Guitarra inválida:', guitar);
        return;
    }
    
    cartItems.push(guitar);
    updateCartBadge();
    
    // Show success message
    const message = document.createElement('div');
    message.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    message.textContent = `¡${guitar.name} ha sido agregado al carrito!`;
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
}

// Clear cart
function clearCart() {
    cartItems.length = 0;
    updateCartBadge();
    
    // Show message
    const message = document.createElement('div');
    message.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    message.textContent = 'Carrito vaciado';
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
}

// Checkout
function checkout() {
    if (cartItems.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Here you would typically navigate to a checkout page
    alert('¡Gracias por tu compra!');
    clearCart();
}

// Initialize cart
updateCartBadge();

// Initialize cart menu button
function initCartMenuButton() {
    const menuItems = document.querySelectorAll('#header nav ul li');
    const lastItem = menuItems[menuItems.length - 1];
    
    // Create cart menu item
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <a class="text-white transition text-lg hover:text-gray-500/75 relative" href="#" id="cart-menu-button">
            <span class="mr-2">Carrito</span>
            <span class="cart-count absolute -top-1 -right-1 bg-teal-500 text-white text-xs px-2 py-1 rounded-full hidden">0</span>
        </a>
    `;
    
    // Insert before the last item (Contacto)
    lastItem.parentNode.insertBefore(cartItem, lastItem);
    
    // Get the button element
    cartMenuButton = document.getElementById('cart-menu-button');
    
    // Add click event
    cartMenuButton.addEventListener('click', (e) => {
        e.preventDefault();
        cartBadge.classList.toggle('hidden');
    });
}

// Update cart display
function updateCartBadge() {
    if (cartItems.length === 0) {
        cartBadge.classList.add('hidden');
        return;
    }
    
    cartBadge.classList.remove('hidden');
    
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    cartBadge.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Carrito (${cartItems.length} items)</h3>
            <button onclick="clearCart()" class="text-sm hover:text-gray-300">Vaciar</button>
        </div>
        <div class="mt-2 max-h-128 overflow-y-auto">
            ${cartItems.map(item => `
                <div class="flex justify-between items-center mb-4 p-2 rounded-lg bg-white/5">
                    <span class="text-base">${item.name}</span>
                    <span class="text-base">$${item.price}</span>
                </div>
            `).join('')}
        </div>
        <div class="mt-4 border-t pt-4">
            <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-semibold">Total:</span>
                <span class="text-lg font-semibold">$${total}</span>
            </div>
            <button onclick="checkout()" class="w-full bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-gray-100 text-lg font-semibold transition">
                Ir a la compra
            </button>
        </div>
    `;
}
