let selectTags = document.querySelector('#selectTags');
let divHolder = document.querySelector('#container');
console.log();

let paramObj = new URLSearchParams(window.location.search);
let category = paramObj.get('tag');
console.log(category);
if (category) {
	fetchByTag(category);
} else {
	sviRecepti();
}

fetch('https://dummyjson.com/recipes/tags')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let dataNiz = ['Sve', ...data];
		for (let tag of dataNiz) {
			let option = document.createElement('option');
			option.textContent = tag;
			option.value = tag;
			selectTags.append(option);
		}
		if (category) {
			selectTags.value = category;
		}
	});

selectTags.addEventListener('change', function () {
	if (this.value == 'Sve') {
		divHolder.innerHTML = '';
		sviRecepti();
	} else {
		fetchByTag(this.value);
	}
});

function fetchByTag(param) {
	fetch('https://dummyjson.com/recipes/tag/' + param)
		.then((response) => response.json())
		.then((data) => {
			divHolder.innerHTML = '';
			for (let recipe of data.recipes) {
				appendDiv(recipe);
			}
		});
}

function sviRecepti() {
	divHolder.innerHTML = 'Loading...';
	fetch('https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			divHolder.innerHTML = '';
			for (let recipe of data.recipes) {
				appendDiv(recipe);
			}
		});
}

function appendDiv(product) {
	let div = document.createElement('div');
	let name = document.createElement('h2');
	let cusine = document.createElement('p');
	let calory = document.createElement('p');
	let lista = buildInstructions(product.instructions);
	name.textContent = product.name;
	cusine.textContent = product.cuisine;
	calory.textContent = product.caloriesPerServing + ' kcal';

	let permalink = document.createElement('a');
	permalink.textContent = 'Show recipe';
	let id = product.id;
	permalink.href = `./permalink.html?id=${id}`;

	div.append(name, cusine, calory, permalink, lista);
	divHolder.append(div);
}

function buildInstructions(instructions) {
	let lista = document.createElement('ol');
	for (let instrukcija of instructions) {
		let stavkaListe = document.createElement('li');
		stavkaListe.textContent = instrukcija;
		lista.append(stavkaListe);
	}

	return lista;
}
