const orderContainer = document.getElementById('orders-container');
const userID = localStorage.userID;

const updateCartLength = ()=>{
    const cartLength = document.getElementsByClassName('cart-length')[0];
    cartLength.innerText = JSON.parse(localStorage.getItem('cart')).length;
}
updateCartLength();

const populateOrders = () => {
    orderContainer.innerHTML = "";

    let orders = JSON.parse(localStorage.getItem('orders'));
    let products = JSON.parse(localStorage.getItem('products'));
        orders.forEach(async (order, i)=>{
            const newOrder = document.createElement('div');
            orderContainer.appendChild(newOrder);

            newOrder.classList.add('order-card');
            
            const header = document.createElement('div');
            header.classList.add('header');
            header.innerHTML = `
            <div>
                <span class="tp-heading">ORDER </span>
                <span class="total-price-container">${i+1}</span>
            </div>
            <div>
                <span class="tp-heading">Status : </span>
                <span class="status">${order.status}</span>
            </div>
            <div>
                <span class="tp-heading">Total Price </span>
                <span class="total-price-container">&#8377; <span class="total-price">${order.totalPrice}</span></span> 
            </div>
            `
            const orderStatus = header.getElementsByClassName('status')[0];
            if(orderStatus.innerText === "Pending"){
                orderStatus.style.color = "orange";        
            }
            else if(orderStatus.innerText === "Cancelled"){
                orderStatus.style.color = "red";    
            }
            newOrder.appendChild(header);

            const orderDetails = document.createElement('div');
            orderDetails.classList.add('order-details');
            orderDetails.innerHTML = `
            <div class="pair">
                <div class="od-heading">Phone </div>
                <div class="tp-val">${order.phone}</div>
            </div>
            <div class="pair">
                <div class="od-heading">Address </div>
                <div class="tp-val">${order.address}</div>
            </div>
            `
            newOrder.appendChild(orderDetails);

            const cart_products = order.products;
            cart_products.map(async (e) => {
                let product = products.find(p => p.id === e.id);
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
                    newOrder.appendChild(newProduct);
                    newOrder.appendChild(document.createElement('hr'));
            })
        })
}
populateOrders();
