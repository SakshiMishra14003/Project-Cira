const productContainer = document.getElementById('product-container');
const cartLength = document.getElementsByClassName('cart-length')[0];
const userID = localStorage.userID;

const updateCartLength = ()=>{
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart !== null) cartLength.innerText = cart.length;
}
updateCartLength();

const populateProducts = ()=>{
    productContainer.innerHTML = "";
    
    const products = JSON.parse(localStorage.getItem('products'));

    products.map((product) => {
        console.log(product.category);
        if(product.category === 'sunglasses') {
            const newProduct = document.createElement('div');
            newProduct.classList.add('product-card');
            newProduct.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <div class="card-bottom">
                <span class="product-price">&#8377; ${product.price}</span>
                <button type="button" class="add-to-cart-btn" id="${product.id}">Add to Cart</button>
            </div>
            `
            productContainer.appendChild(newProduct);
        }
    });
        
    Array.from(document.getElementsByClassName('add-to-cart-btn')).forEach((e) => {
        e.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('cart'));
            let productIndex = cart.findIndex(item => item.id === e.id);

            if (productIndex !== -1) {
                cart[productIndex].quantity++;
            } else {
                cart.push({ id: e.id, quantity: 1});
            }

            
            localStorage.setItem('cart', JSON.stringify(cart));
            const users = JSON.parse(localStorage.getItem('users'));
            users[userID]['cart'] = cart;
            localStorage.setItem('users', JSON.stringify(users));

            console.log(JSON.parse(localStorage.getItem('cart')));
            console.log(JSON.parse(localStorage.getItem('users'))[userID]);
            updateCartLength();
        });
    });
}
populateProducts();