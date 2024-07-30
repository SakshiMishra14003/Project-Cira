const fillNavBar = async () => {
    const navBar = document.getElementsByClassName('navbar')[0];
    navBar.innerHTML = `
    <ul class="nav-menu">
        <a href="HomePage.html"><li>Home</li></a>
        <a href="CartPage.html"><li>Cart (<span class="cart-length">0</span>) </li></a>
        <a href="OrderPage.html"><li>My Orders</li></a>
        <a href="AboutUsPage.html"><li>About Us</li></a>
        <a href="LoginPage.html"><li>Logout</li></a>
    </ul>
    `;
}
fillNavBar();

