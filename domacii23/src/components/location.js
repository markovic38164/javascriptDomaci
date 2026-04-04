export function getUserLocation() {
	let city = prompt('Odakle ste?')?.trim();

	while (!city) {
		city = prompt('Odakle ste?')?.trim();
	}

	return city;
}
