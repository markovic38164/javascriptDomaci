searchMovieButton.addEventListener('click', async function () {
	let movieName = movieNameInput.value.trim();
	movieContainer.innerHTML = '';

	if (!movieName) {
		movieContainer.textContent = 'Unesite ime filma!';
		return;
	}

	let response = await searchOMDBApi(`s=${movieName}`);

	if (response.Response === 'False') {
		movieContainer.textContent = response.Error;
		return;
	}

	buildMovieElements(response.Search);
});

async function searchOMDBApi(params) {
	const apiKey = 'afaf2726';
	const url = 'https://www.omdbapi.com/';

	let response = await fetch(url + '?apikey=' + apiKey + '&' + params);

	

	let data = await response.json();
	return data;
}

function buildMovieElements(movies) {
	for (let movie of movies) {
		let divMovie = document.createElement('div');
		divMovie.classList.add('divMovie');

		let title = document.createElement('h2');
		title.textContent = movie.Title;
		title.classList.add('title');

		let year = document.createElement('span');
		year.textContent = `(${movie.Year})`;
		year.classList.add('year');

		let divImage = document.createElement('div');
		divImage.classList.add('divImage');

		let movieImage = document.createElement('img');
		movieImage.alt = 'Poster filma: ' + movie.Title;
		movieImage.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
		divImage.append(movieImage);

		divMovie.append(title, year, divImage);
		movieContainer.append(divMovie);
	}
}
