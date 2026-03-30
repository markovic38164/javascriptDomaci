export async function searchOMDBApi(params) {
	const apiKey = 'afaf2726';
	const url = 'https://www.omdbapi.com/';

	let response = await fetch(url + '?apikey=' + apiKey + '&' + params);

	let data = await response.json();

	return data;
}
