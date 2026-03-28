let divHolder = document.querySelector('#container');
let button = document.querySelector('#searchButton');
let inputField = document.querySelector('#inputProduct');

button.addEventListener('click', function () {
	divHolder.innerHTML = '';
	let inputValue = inputField.value;

	fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			for (let product of data.products) {
				appendDiv(product);
			}
		});
});

fetch('https://dummyjson.com/products')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		for (let product of data.products) {
			appendDiv(product);
		}
	});

function appendDiv(product) {
	let div = document.createElement('div');
	let title = document.createElement('h2');
	let category = document.createElement('p');
	let price = document.createElement('p');
	title.textContent = product.title;
	category.textContent = product.category;
	price.textContent = '$' + product.price;
	div.append(title, category, price);
	divHolder.append(div);
}
