import { searchOMDBApi } from '../api.js';

let params = new URLSearchParams(window.location.search);
let imdbID = params.get('id');

getTrailer(imdbID);

if (imdbID) {
	let response = await searchOMDBApi('i=' + imdbID + '&plot=full');
	console.log(response);
	buildMovieElement(response);
}

async function buildMovieElement(movie) {
	const movieContainer = document.getElementById('movieContainer');
	movieContainer.innerHTML = '';

	const container = document.createElement('div');
	container.classList.add('movieDetail');

	const title = document.createElement('h2');
	title.textContent = movie.Title;
	title.classList.add('title');

	const year = document.createElement('span');
	year.textContent = ` (${movie.Year})`;
	year.classList.add('year');

	const header = document.createElement('div');
	header.classList.add('movieHeader');
	header.append(title, year);

	const divImage = document.createElement('div');
	divImage.classList.add('divImage');

	const movieImage = document.createElement('img');
	movieImage.alt = `Poster filma: ${movie.Title}`;
	movieImage.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
	movieImage.onerror = () => {
		movieImage.onerror = null;
		movieImage.src = 'placeholder.jpg';
	};
	divImage.append(movieImage);

	const details = document.createElement('div');
	details.classList.add('movieDetails');

	const rating = document.createElement('p');
	rating.innerHTML = `<strong>IMDb Ocena:</strong> ${movie.imdbRating} / 10`;

	const director = document.createElement('p');
	director.innerHTML = `<strong>Režiser:</strong> ${movie.Director}`;

	const genre = document.createElement('p');
	const genreTranslated = translateGenre(movie.Genre);
	genre.innerHTML = `<strong>Žanr:</strong> ${genreTranslated}`;

	const runtime = document.createElement('p');
	runtime.innerHTML = `<strong>Trajanje:</strong> ${movie.Runtime}`;

	const actors = document.createElement('p');
	actors.innerHTML = `<strong>Glumci:</strong> ${movie.Actors}`;

	const plotContainer = document.createElement('div');
	plotContainer.style.display = 'flex';
	plotContainer.style.flexDirection = 'column';
	plotContainer.style.gap = '10px';

	const plot = document.createElement('p');
	plot.innerHTML = `<strong>Opis:</strong> ${movie.Plot}`;

	const translateBtn = document.createElement('button');
	translateBtn.textContent = 'Prevedi opis';
	translateBtn.classList.add('translate-btn');

	translateBtn.onclick = async () => {
		translateBtn.disabled = true;
		translateBtn.textContent = 'Prevođenje...';

		const translated = await translateLongText(movie.Plot);

		if (translated) {
			plot.innerHTML = `<strong>Opis:</strong> ${translated}`;
			translateBtn.remove();
		} else {
			translateBtn.disabled = false;
			translateBtn.textContent = 'Pokušaj ponovo';
		}
	};

	plotContainer.append(plot, translateBtn);

	details.append(rating, director, genre, runtime, actors, plotContainer);
	container.append(divImage, details);

	movieContainer.append(header, container);
}

async function translateLongText(text) {
	try {
		const url = `https://lingva.ml/api/v1/en/sr/${encodeURIComponent(text)}`;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Lingva API greška');
		}

		const data = await response.json();

		return data.translation;
	} catch (err) {
		console.warn('Prevod nije uspeo, koristim originalni tekst:', err);
		return text;
	}
}

function translateGenre(genreString) {
	const genres = {
		Action: 'Akcija',
		Adventure: 'Avantura',
		Animation: 'Animacija',
		Biography: 'Biografija',
		Comedy: 'Komedija',
		Crime: 'Krimi',
		Documentary: 'Dokumentarni',
		Drama: 'Drama',
		Family: 'Porodični',
		Fantasy: 'Fantazija',
		History: 'Istorijski',
		Horror: 'Horor',
		Music: 'Muzika',
		Musical: 'Mjuzikl',
		Mystery: 'Misterija',
		Romance: 'Romansa',
		SciFi: 'Naučna fantastika',
		'Sci-Fi': 'Naučna fantastika',
		Sport: 'Sport',
		Thriller: 'Triler',
		War: 'Ratni',
		Western: 'Vestern',
	};

	return genreString
		.split(', ')
		.map((g) => genres[g] || g)
		.join(', ');
}

function getTrailer(id) {
	const API_KEY = '9320321fb62b1d1ec6241772fc458e5b';
	const imdbID = id;

	fetch(
		`https://api.themoviedb.org/3/find/${imdbID}?api_key=${API_KEY}&external_source=imdb_id`,
	)
		.then((res) => res.json())
		.then((data) => {
			const movieID = data.movie_results[0].id;
			return fetch(
				`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`,
			);
		})
		.then((res) => res.json())
		.then((videoData) => {
			const trailer = videoData.results.find(
				(v) => v.type === 'Trailer' && v.site === 'YouTube',
			);
			console.log(
				`YouTube link: https://www.youtube.com/watch?v=${trailer.key}`,
			);
			playTrailer(trailer.key);
		});
}

function playTrailer(videoKey) {
	const kontejner = document.getElementById('trailerContainer');
	kontejner.innerHTML = `
        <iframe 
            width="80%" 
            height="300" 
            src="https://www.youtube.com/embed/${videoKey}?autoplay=1" 
            frameborder="0" 
            allowfullscreen>
        </iframe>`;
}
