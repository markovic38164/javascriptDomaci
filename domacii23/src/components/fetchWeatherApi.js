import axios from 'axios';

export async function fetchWeatherApi(city) {
	try {
		const response = await axios.get(`${process.env.API_URL}/v1/current.json`, {
			params: {
				key: process.env.API_KEY,
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

export async function fetchUpcomingDays(city, numOfDays) {
	try {
		const response = await axios.get(
			`${process.env.API_URL}/v1/forecast.json`,
			{
				params: {
					key: process.env.API_KEY,
					q: city,
					aqi: 'no',
					days: numOfDays,
					lang: 'sr',
				},
			},
		);
		return response.data;
	} catch (err) {
		console.error('Greška pri dohvatanju prognoze:', err);
		throw new Error('Nije moguće dohvatiti prognozu.');
	}
}

export async function getWeatherInFuture(location, date) {
	try {
		const response = await axios.get(process.env.API_URL + '/v1/future.json', {
			params: {
				key: process.env.API_KEY,
				dt: date,
				q: location,
				lang: 'sr',
			},
		});

		return response.data;
	} catch (err) {
		alert('izabrani datum mora biti izmedju 14 i 300 dana od današnjeg!');
		throw new Error('Nije moguće dohvatiti prognozu za zadati datum.');
	}
}
