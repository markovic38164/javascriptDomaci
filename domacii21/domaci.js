const forma = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');
const logoutButton = document.querySelector('#logoutButton');
const loggedInData = document.querySelector('#loggedInData');
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
});

function showLoggedIn() {
	forma.classList.add('hidden');
	loggedInData.classList.remove('hidden');
}

function showLogin() {
	forma.classList.remove('hidden');
	loggedInData.classList.add('hidden');
}

if (localStorage.getItem('loggedIn') === 'true') {
	showLoggedIn();
}

loginButton.addEventListener('click', () => {
	if (
		username.value.trim().toLowerCase() === 'admin' &&
		password.value.trim() === '123456'
	) {
		localStorage.setItem('loggedIn', 'true');
		showLoggedIn();
	} else {
		alert('Niste uneli dobre podatke');
	}
});

logoutButton.addEventListener('click', () => {
	localStorage.removeItem('loggedIn');
	showLogin();
});
