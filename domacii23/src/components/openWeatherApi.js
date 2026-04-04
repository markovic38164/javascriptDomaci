import axios from 'axios';

export async function getGeolocationForCoords(lat, lon) {
	try {
		const response = await axios.get(
			`${process.env.OPENWEATHER_API_URL}/1.0/reverse`,
			{
				params: {
					lat: lat,
					lon: lon,
					limit: 1,
					appid: process.env.OPENWEATHER_API_KEY,
				},
			},
		);

		console.log('Geolocation response:', response.data);

		return response.data;
	} catch (error) {
		console.error('Error fetching geolocation:', error.message);
		return null;
	}
}
