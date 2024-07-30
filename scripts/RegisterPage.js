const RegisterForm = document.getElementById('RegisterForm');

if(localStorage.users === undefined) localStorage.setItem('users', JSON.stringify({}));

RegisterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userID = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users'));
    
    if(!(userID in users)) {
        users[userID] = {userID, email, password, phone, address, cart: [], orders: []};
        
        localStorage.setItem('users', JSON.stringify(users));
        console.log(JSON.parse(localStorage.getItem('users')));

        window.location.href = 'LoginPage.html';
    }
});