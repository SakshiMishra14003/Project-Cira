const cartLength = document.getElementsByClassName('cart-length')[0];
const userID = localStorage.userID;

const updateCartLength = ()=>{
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart !== null) cartLength.innerText = cart.length;
}
updateCartLength();