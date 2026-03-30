import { searchOMDBApi } from './api.js';

let searchMovieButton = document.getElementById('searchMovieButton');
let movieNameInput = document.getElementById('movieNameInput');
let movieContainer = document.getElementById('movieContainer');
let movieYearInput = document.getElementById('movieYearInput');
let movieCategorySelect = document.getElementById('movieCategorySelect');

movieContainer.addEventListener('click', async (e) => {
	let card = e.target.closest('.divMovie');
	if (!card) return;

	let imdbID = card.dataset.id;
	window.location.href = `./permaLink/film.html?id=${imdbID}`;
});

// pretraga i prikaz
async function doSearch(name, year, category) {
	movieContainer.innerHTML = '';

	let params = ['s=' + name, 'type=' + category];
	if (year !== '') {
		params.push('y=' + year);
	}

	let response = await searchOMDBApi(params.join('&'));

	if (response.Response === 'False') {
		movieContainer.textContent = response.Error;
		return;
	}

	buildMovieElements(response.Search);
}

searchMovieButton.addEventListener('click', async function () {
	let movieName = movieNameInput.value.trim();
	let movieYear = movieYearInput.value.trim();
	let movieCategory = movieCategorySelect.value;

	if (!movieName) {
		movieContainer.textContent = 'Unesite ime filma!';
		return;
	}

	//cuvanje pretrage u localStorage
	localStorage.setItem(
		'movieSearch',
		JSON.stringify({
			name: movieName,
			year: movieYear,
			type: movieCategory,
		}),
	);

	await doSearch(movieName, movieYear, movieCategory);
});

// kad se stranica ucita ponovo prikaze filmove prema parametrima iz LocalStorage
window.addEventListener('DOMContentLoaded', () => {
	let savedSearch = localStorage.getItem('movieSearch');
	if (savedSearch) {
		let { name, year, type } = JSON.parse(savedSearch);

		movieNameInput.value = name || '';
		movieYearInput.value = year || '';
		movieCategorySelect.value = type || 'movie';

		if (name) {
			doSearch(name, year, type);
		}
	}
});

function buildMovieElements(movies) {
	for (let movie of movies) {
		let divMovie = document.createElement('div');
		divMovie.classList.add('divMovie');
		divMovie.dataset.id = movie.imdbID;

		let title = document.createElement('h2');
		title.textContent = movie.Title;
		title.classList.add('title');

		let year = document.createElement('span');
		year.textContent = `(${movie.Year})`;
		year.classList.add('year');

		let divImage = document.createElement('div');
		divImage.classList.add('divImage');

		let movieImage = document.createElement('img');
		movieImage.alt = `Poster filma: ${movie.Title}`;
		movieImage.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
		movieImage.onerror = () => {
			movieImage.onerror = null;
			movieImage.src = 'placeholder.jpg';
		};

		divImage.append(movieImage);
		divMovie.append(title, year, divImage);
		movieContainer.append(divMovie);
	}
}
