const totalPrice = document.getElementsByClassName('total-price')[0];
const placeOrderButton = document.getElementsByClassName('place-order-btn')[0];
const orderForm = document.getElementById('orderForm');
const cartContainer = document.getElementsByClassName('cart-container')[0];
const userID = localStorage.userID;

const updateCartLength = ()=>{
    const cartLength = document.getElementsByClassName('cart-length')[0];
    const length = JSON.parse(localStorage.getItem('cart')).length;
    cartLength.innerText = length;

    if(length < 1) placeOrderButton.style.display = "none";
    else placeOrderButton.style.display = "";
}
updateCartLength();

const updateTotalPrice = ()=>{
    const cart = JSON.parse(localStorage.getItem('cart'));
    const products = JSON.parse(localStorage.getItem('products'));

    let price = 0;
    cart.forEach(cartItem => {
        let product = products.find(product => product.id === cartItem.id);
        
        if (product) {
            price += product.price * cartItem.quantity;
        }
    });
    totalPrice.innerText = price;
}
updateTotalPrice();

const populateCart = async ()=>{
    cartContainer.innerHTML = "";
    const products = JSON.parse(localStorage.getItem('products'));
    const cart = JSON.parse(localStorage.getItem('cart'));

        cart.map(async (e) => {
            let product = products.find(product => product.id === e.id);

                const newProduct = document.createElement('div');
                newProduct.classList.add('product-card');
                newProduct.innerHTML = `
                <img src="${product.imageURL}" alt="${product.name}">
                <h2 class="product-name">${product.name}</h2>
                <div class="pairs">
                    <div class="key"> Price </div>
                    <div class="value">&#8377; ${product.price}</div>
                </div>
                <div class="pairs">
                    <div class="key"> Quantity </div>
                    <div class="value">${e.quantity}</div>
                </div>
                <div class="pairs">
                    <div class="key"> Subtotal </div>
                    <div class="value">&#8377; ${product.price * e.quantity}</div>
                </div>
                `
                cartContainer.appendChild(newProduct);
        });
}
populateCart();

const fillDetails = ()=>{
    const users = JSON.parse(localStorage.getItem('users'));
    document.getElementById('address').value = users[userID].address;
    document.getElementById('phone').value = users[userID].phone;
}
fillDetails();

orderForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const userID = localStorage.getItem('userID');

    const products = JSON.parse(localStorage.getItem('products'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    let orders = JSON.parse(localStorage.getItem('orders', []));

    let price = 0;
    cart.forEach(cartItem => {
        let product = products.find(product => product.id === cartItem.id);
        
        if (product) {
            price += product.price * cartItem.quantity;
        }
    });

    orders.push({ products: cart, status: 'Order Placed', phone, address, totalPrice:price});

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('cart', JSON.stringify([]));
    let users = JSON.parse(localStorage.getItem('users'));
    users[userID]['cart'] = [];
    users[userID]['orders'] = orders;
    localStorage.setItem('users', JSON.stringify(users));
    console.log(localStorage.getItem('orders'));

    window.location.href = '/OrderPage.html';
});