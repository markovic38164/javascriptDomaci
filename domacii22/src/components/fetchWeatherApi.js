import axios from 'axios';

const apiKey = '49c8286320594012863221141241511';
const baseURL = 'https://api.weatherapi.com/v1';

export async function fetchWeatherApi(city) {
	try {
		const response = await axios.get(`${baseURL}/current.json`, {
			params: {
				key: apiKey,
				q: city,
				aqi: 'no',
				lang: 'sr',
			},
		});
		return response.data;
	} catch (err) {
		console.error('Greška pri dohvatanju trenutnog vremena:', err);
		throw new Error('Nije moguće dohvatiti trenutno vreme.');
	}
}

export async function fetchFutureWeatherApi(city, numOfDays) {
	try {
		const response = await axios.get(`${baseURL}/forecast.json`, {
			params: {
				key: apiKey,
				q: city,
				aqi: 'no',
				days: numOfDays,
				lang: 'sr',
			},
		});
		return response.data;
	} catch (err) {
		console.error('Greška pri dohvatanju prognoze:', err);
		throw new Error('Nije moguće dohvatiti prognozu.');
	}
}
