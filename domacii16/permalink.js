let params = new URLSearchParams(window.location.search);

let id = params.get('id');

let divContainer = document.querySelector('#container');
let selectCategory = document.querySelector('#selectCategory');

fetch('https://dummyjson.com/recipes/tags')
	.then((response) => response.json())
	.then((data) => {
		for (let tag of data) {
			let option = document.createElement('option');
			option.value = tag;
			option.textContent = tag;
			selectCategory.append(option);
		}
	});
selectCategory.addEventListener('change', function () {
	window.location.href = './index.html?tag=' + this.value;
});

fetch('https://dummyjson.com/recipes/' + id)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);

		let div = document.createElement('div');
		div.classList.add('divDish');
		let dishName = document.createElement('h2');
		dishName.classList.add('dishName');
		let cusine = document.createElement('p');
		cusine.classList.add('cusine');
		let imageDish = document.createElement('img');
		let divList = document.createElement('div');
		divList.classList.add('divList');
		let divListHeding = document.createElement('p');
		let list = document.createElement('ol');

		dishName.textContent = data.name;
		cusine.textContent = data.cuisine + ' cuisine';
		imageDish.src = data.image;
		imageDish.alt = 'Picture of ' + data.name;
		imageDish.style.width = '300px';
		divListHeding.textContent = 'Ingredients:';
		for (let stavka of data.ingredients) {
			let li = document.createElement('li');
			li.textContent = stavka;
			list.append(li);
		}
		divList.append(divListHeding, list);
		div.append(dishName, cusine, imageDish, divList);
		divContainer.append(div);
	});
