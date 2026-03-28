function login(username, lozinka) {
	if (username.toLowerCase() === 'admin' && lozinka.toLowerCase() === 'admin') {
		return true;
	}
	return false;
}

console.log(login('Admin', 'admin'));


