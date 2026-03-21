let cars = [
	'Toyota',
	'Volkswagen',
	'Ford',
	'BMW',
	'Mercedes-Benz',
	'Audi',
	'Honda',
	'Hyundai',
	'Kia',
	'Nissan',
	'Chevrolet',
	'Peugeot',
	'Renault',
	'Fiat',
	'Volvo',
	'Subaru',
	'Mazda',
	'Mitsubishi',
	'Suzuki',
	'Tesla',
	'Lexus',
	'Infiniti',
	'Acura',
	'Dacia',
	'Skoda',
	'Seat',
	'Porsche',
	'Jaguar',
	'Land Rover',
	'Mini',
	'Alfa Romeo',
	'Ferrari',
	'Lamborghini',
	'Maserati',
	'Bentley',
	'Rolls-Royce',
	'Bugatti',
	'Aston Martin',
	'McLaren',
	'Opel',
	'Chrysler',
	'Jeep',
	'Dodge',
	'RAM',
	'Cadillac',
	'Buick',
	'GMC',
	'Lincoln',
	'Genesis',
	'Polestar',
];

console.log(cars);

//Automobili koji ne počinju slovom 'A' 
for (let i = 0; i < cars.length; i++) {
	if (cars[i][0].toLowerCase() === 'a') {
		continue;
	}
	console.log(cars[i]);
}
