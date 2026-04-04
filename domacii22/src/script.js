import { getUserLocation } from './components/location.js';
import {
	fetchWeatherApi,
	fetchFutureWeatherApi,
} from './components/fetchWeatherApi.js';

let currentCity = localStorage.getItem('location') || null;

const numOfDaysSelector = document.getElementById('forecastDays');

async function setTheme(isDay) {
	if (!isDay) {
		document.body.classList.add('night');
	} else {
		document.body.classList.remove('night');
	}
}

async function renderCurrentWeather(data) {
	const current = data.current;
	const location = data.location;

	document.getElementById('cityName').textContent =
		`${location.name}, ${location.country}`;

	const isDay = current.is_day === 1;
	setTheme(isDay);

	const html = `
        <div class="weather-main">
            <img src="${current.condition.icon}" alt="${current.condition.text}">
            <div>
                <div class="temperature">${Math.round(current.temp_c)}°C</div>
                <div class="condition">${current.condition.text}</div>
            </div>
        </div>
        
        <div class="details-grid">
            <div class="detail-item">
                <span>Oseća se kao</span>
                <span>${Math.round(current.feelslike_c)}°C</span>
            </div>
            <div class="detail-item">
                <span>Vlažnost</span>
                <span>${current.humidity}%</span>
            </div>
            <div class="detail-item">
                <span>Vetar</span>
                <span>${current.wind_kph} km/h ${current.wind_dir}</span>
            </div>
            <div class="detail-item">
                <span>UV indeks</span>
                <span>${current.uv}</span>
            </div>
            <div class="detail-item">
                <span>Vidljivost</span>
                <span>${current.vis_km} km</span>
            </div>
            <div class="detail-item">
                <span>Ažurirano</span>
                <span>${current.last_updated.split(' ')[1]}</span>
            </div>
        </div>
    `;

	document.getElementById('currentWeather').innerHTML = html;
}

async function renderForecast(forecastDays) {
	const container = document.getElementById('forecast');
	container.innerHTML = '';

	forecastDays.forEach((day) => {
		const dateObj = new Date(day.date);
		const dayName = dateObj.toLocaleDateString('sr-RS', { weekday: 'long' });

		const cardHTML = `
            <div class="forecast-card glass">
                <div class="day-name">${dayName}</div>
                <div class="date">${day.date}</div>
                
                <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
                
                <div class="temps">
                    ${Math.round(day.day.maxtemp_c)}° 
                    <span>${Math.round(day.day.mintemp_c)}°</span>
                </div>
                
                <div class="condition-text">${day.day.condition.text}</div>
            </div>
        `;

		container.innerHTML += cardHTML;
	});
}

async function loadWeather(city) {
	try {
		const currentData = await fetchWeatherApi(city);
		await renderCurrentWeather(currentData);

		const forecastData = await fetchFutureWeatherApi(
			city,
			Number(numOfDaysSelector.value),
		);
		await renderForecast(forecastData.forecast.forecastday);
	} catch (err) {
		console.error(err);
		alert(
			'Greška pri učitavanju podataka. Proverite internet konekciju ili naziv grada.',
		);
	}
}

numOfDaysSelector.addEventListener('change', async () => {
	if (currentCity) {
		try {
			const forecastData = await fetchFutureWeatherApi(
				currentCity,
				Number(numOfDaysSelector.value),
			);
			await renderForecast(forecastData.forecast.forecastday);
		} catch (e) {}
	}
});

document
	.getElementById('changeLocationButton')
	.addEventListener('click', async () => {
		const newCity = getUserLocation();
		if (!newCity) return;

		currentCity = newCity;
		localStorage.setItem('location', newCity);
		await loadWeather(newCity);
	});

(async () => {
	if (!currentCity) {
		const newCity = getUserLocation();
		if (!newCity) return;
		currentCity = newCity;
		localStorage.setItem('location', newCity);
	}

	await loadWeather(currentCity);
})();
