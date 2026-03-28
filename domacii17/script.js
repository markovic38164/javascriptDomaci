let nameInput = document.querySelector('#name');
let lastNameInput = document.querySelector('#lastName');
let ageSelect = document.querySelector('#selectAge');
let registerButton = document.querySelector('#registerButton');
let currentUserId = null;
let deleteBtn = document.querySelector('#deleteButton');

registerButton.addEventListener('click', function () {
	if (nameInput.value.trim() === '' || lastNameInput.value.trim() === '') {
		alert('Morate uneti sve podatke!');
		return;
	} else {
		register(nameInput.value, lastNameInput.value, ageSelect.value);
		//u network vidimo dva poziva..prvi je preflight proverava da li je server siguran
	}
});

deleteBtn.addEventListener('click', function () {
	if (!currentUserId) return;

	fetch('https://dummyjson.com/users/' + currentUserId, {
		method: 'DELETE',
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			deleteBtn.style.display = 'none';
			currentUserId = null;
		});
});

function register(name, lastName, age) {
	fetch('https://dummyjson.com/users/add', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			firstName: name,
			lastName: lastName,
			age: age,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			alert('USpesno ste se registrovali sa imenom ' + name + ' ' + lastName);
			currentUserId = data.id;
			deleteBtn.style.display = 'block';
		});
}
for (let i = 18; i <= 100; i++) {
	let option = document.createElement('option');
	option.textContent = i;
	option.value = i;
	ageSelect.append(option);
}
