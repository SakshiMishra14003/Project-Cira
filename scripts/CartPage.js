const cartContainer = document.getElementById('cart-container');
const totalPrice = document.getElementsByClassName('total-price')[0];
const buyNowButton = document.getElementsByClassName('buy-now-btn')[0];
const cartLength = document.getElementsByClassName('cart-length')[0];
const userID = localStorage.userID;

const updateCartLength = ()=>{
    const length = JSON.parse(localStorage.getItem('cart')).length;
    cartLength.innerText = length;

    const buyNowButton = document.getElementsByClassName('buy-now-btn')[0];
    if(length < 1) buyNowButton.style.display = "none";
    else buyNowButton.style.display = "";
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

const updateSubtotalAndQuantity = (e) => {
    const productID = e.parentElement.id;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const products = JSON.parse(localStorage.getItem('products'));

    let cartItem = cart.find(cartItem => cartItem.id === productID);
    if(cartItem){
        e.getElementsByClassName('quantity')[0].innerText = cartItem.quantity;
    }

    let product = products.find(product => product.id === productID);
    if (product) {
        e.getElementsByClassName('subtotal')[0].innerText = product.price * cartItem.quantity;
    }
}

const populateCart = () => {
    cartContainer.innerHTML = "";
        const products = JSON.parse(localStorage.getItem('products'));
        const cart = JSON.parse(localStorage.getItem('cart'));

        cart.map((cartItem) => {
            let product = products.find(product => product.id === cartItem.id);

            const newProduct = document.createElement('div');
            newProduct.classList.add('product-card');
            newProduct.id = cartItem.id;
            newProduct.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <div class="middle-part">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="right-part">
                <div class="pairs">
                    <div class="key"> Price Per Piece </div>
                    <div class="value">&#8377; ${product.price}</div>
                </div>
                <div class="pairs">
                    <div class="key"> Subtotal </div>
                    <div class="value">&#8377; <span class="subtotal">${cartItem.quantity * product.price}</span></div>
                </div>
                <div class="buttons">
                    <button type="button" class="neg-btn">-</button>
                    <div class="quantity">${cartItem.quantity}</div>
                    <button type="button" class="pos-btn">+</button><br>
                </div>
                <button type="button" class="del-from-cart-btn">Remove</button>
            </div>
            `
            cartContainer.appendChild(newProduct);
        })

        Array.from(document.getElementsByClassName('del-from-cart-btn')).forEach(e=>{
            e.addEventListener('click', function() {
                let cart = JSON.parse(localStorage.getItem('cart'));
                const productID = e.parentElement.parentElement.id;
                cart = cart.filter(cartItem => cartItem.id !== productID);
                localStorage.setItem('cart', JSON.stringify(cart));
                const users = JSON.parse(localStorage.getItem('users'));
                users[userID]['cart'] = cart;
                localStorage.setItem('users', JSON.stringify(users));
                e.parentElement.parentElement.remove();
                updateCartLength();
                updateTotalPrice();
            });
        })

        Array.from(document.getElementsByClassName('pos-btn')).forEach(e=>{
            e.addEventListener('click', function() {
                const productID = e.parentElement.parentElement.parentElement.id;
                const cart = JSON.parse(localStorage.getItem('cart'));
                let productIndex = cart.findIndex(item => item.id === productID);

                if (productIndex !== -1) {
                    cart[productIndex].quantity++;
                } else {
                    cart.push({ id: productID, quantity: 1});
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                const users = JSON.parse(localStorage.getItem('users'));
                users[userID]['cart'] = cart;
                localStorage.setItem('users', JSON.stringify(users));
                console.log(localStorage.getItem('cart'));

                updateCartLength();
                updateTotalPrice();
                updateSubtotalAndQuantity(e.parentElement.parentElement);
            });
        })

        Array.from(document.getElementsByClassName('neg-btn')).forEach(e=>{
            e.addEventListener('click', function() {
                const productID = e.parentElement.parentElement.parentElement.id;
                const cart = JSON.parse(localStorage.getItem('cart'));
                let productIndex = cart.findIndex(item => item.id === productID);

                if (productIndex !== -1) {
                    cart[productIndex].quantity = Math.max(cart[productIndex].quantity-1, 0);
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                const users = JSON.parse(localStorage.getItem('users'));
                users[userID]['cart'] = cart;
                localStorage.setItem('users', JSON.stringify(users));
                console.log(localStorage.getItem('cart'));

                updateCartLength();
                updateTotalPrice();
                updateSubtotalAndQuantity(e.parentElement.parentElement);
            });
        })
}
populateCart();

buyNowButton.addEventListener('click', ()=>{
    window.location.href = "PlaceOrder.html";
})