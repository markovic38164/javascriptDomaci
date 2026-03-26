let gradovi = [
	'Svi',
	'Beograd',
	'Subotica',
	'Novi Sad',
	'Sarajevo',
	'Podgorica',
	'Zagreb',
	'Niš',
	'Kragujevac',
	'Split',
	'Rijeka',
	'Osijek',
	'Zadar',
	'Ljubljana',
	'Maribor',
	'Banja Luka',
	'Tuzla',
	'Mostar',
	'Zenica',
	'Arilje',
	'Valjevo',
	'Skoplje',
	'Bitola',
	'Ohrid',
	'Kotor',
	'Nikšić',
	'Šibenik',
	'Dubrovnik',
	'Varaždin',
	'Pozega',
];
let kategorije = [
	'Svi',
	'Stanovi',
	'Kuće',
	'Poslovni prostori',
	'Placevi',
	'Garaže/parking',
];

let brojSoba = [
	'Svi',
	'Garsonjera',
	'Jednosoban stan',
	'Jednoiposoban stan',
	'Dvosoban stan',
	'Dvoiposoban stan',
	'Trosoban stan',
	'Troiposoban stan',
	'Četvorosoban',
	'4.5 i više soba',
];

let nekretnine = [
	{
		grad: 'Beograd',
		opcija: 'Garsonjera',
		tip: 'Stanovi',
		cena: 48200,
		kvadratura: 25,
	},
	{
		grad: 'Novi Sad',
		opcija: null,
		tip: 'Kuće',
		cena: 12200,
		kvadratura: 85,
	},
	{
		grad: 'Sarajevo',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 75500,
		kvadratura: 60,
	},
	{
		grad: 'Podgorica',
		opcija: 'Trosoban stan',
		tip: 'Stanovi',
		cena: 130000,
		kvadratura: 90,
	},
	{
		grad: 'Zagreb',
		opcija: 'Jednosoban stan',
		tip: 'Stanovi',
		cena: 68000,
		kvadratura: 45,
	},
	{
		grad: 'Split',
		opcija: 'Kuće',
		tip: 'Kuće',
		cena: 210000,
		kvadratura: 150,
	},
	{
		grad: 'Rijeka',
		opcija: 'Dvoiposoban stan',
		tip: 'Stanovi',
		cena: 95000,
		kvadratura: 70,
	},
	{
		grad: 'Dubrovnik',
		opcija: 'Četvorosoban',
		tip: 'Stanovi',
		cena: 280000,
		kvadratura: 120,
	},
	{
		grad: 'Osijek',
		opcija: 'Jednoiposoban stan',
		tip: 'Stanovi',
		cena: 55000,
		kvadratura: 50,
	},
	{
		grad: 'Zadar',
		opcija: 'Garaže/parking',
		tip: 'Garaže/parking',
		cena: 10000,
		kvadratura: 20,
	},
	{
		grad: 'Pula',
		opcija: 'Stanovi',
		tip: 'Stanovi',
		cena: 85000,
		kvadratura: 65,
	},
	{
		grad: 'Šibenik',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 72000,
		kvadratura: 55,
	},

	{
		grad: 'Beograd',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 95000,
		kvadratura: 60,
	},
	{
		grad: 'Subotica',
		opcija: 'Jednosoban stan',
		tip: 'Stanovi',
		cena: 45000,
		kvadratura: 42,
	},
	{
		grad: 'Novi Sad',
		opcija: 'Trosoban stan',
		tip: 'Stanovi',
		cena: 120000,
		kvadratura: 85,
	},
	{
		grad: 'Sarajevo',
		opcija: 'Dvoiposoban stan',
		tip: 'Stanovi',
		cena: 80000,
		kvadratura: 70,
	},
	{
		grad: 'Podgorica',
		opcija: 'Garsonjera',
		tip: 'Stanovi',
		cena: 50000,
		kvadratura: 30,
	},
	{
		grad: 'Zagreb',
		opcija: 'Četvorosoban',
		tip: 'Stanovi',
		cena: 210000,
		kvadratura: 120,
	},
	{
		grad: 'Niš',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 60000,
		kvadratura: 55,
	},
	{
		grad: 'Kragujevac',
		opcija: 'Kuće',
		tip: 'Kuće',
		cena: 90000,
		kvadratura: 140,
	},
	{
		grad: 'Split',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 180000,
		kvadratura: 75,
	},
	{
		grad: 'Rijeka',
		opcija: 'Jednoiposoban stan',
		tip: 'Stanovi',
		cena: 95000,
		kvadratura: 58,
	},
	{
		grad: 'Osijek',
		opcija: 'Garsonjera',
		tip: 'Stanovi',
		cena: 40000,
		kvadratura: 28,
	},
	{
		grad: 'Zadar',
		opcija: 'Trosoban stan',
		tip: 'Stanovi',
		cena: 160000,
		kvadratura: 95,
	},
	{
		grad: 'Ljubljana',
		opcija: 'Dvoiposoban stan',
		tip: 'Stanovi',
		cena: 220000,
		kvadratura: 85,
	},
	{
		grad: 'Maribor',
		opcija: 'Jednosoban stan',
		tip: 'Stanovi',
		cena: 100000,
		kvadratura: 50,
	},
	{
		grad: 'Banja Luka',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 70000,
		kvadratura: 60,
	},
	{
		grad: 'Tuzla',
		opcija: 'Jednoiposoban stan',
		tip: 'Stanovi',
		cena: 55000,
		kvadratura: 50,
	},
	{
		grad: 'Mostar',
		opcija: 'Trosoban stan',
		tip: 'Stanovi',
		cena: 85000,
		kvadratura: 80,
	},
	{
		grad: 'Zenica',
		opcija: 'Garsonjera',
		tip: 'Stanovi',
		cena: 35000,
		kvadratura: 27,
	},
	{
		grad: 'Skoplje',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 75000,
		kvadratura: 65,
	},
	{
		grad: 'Bitola',
		opcija: 'Jednosoban stan',
		tip: 'Stanovi',
		cena: 42000,
		kvadratura: 40,
	},
	{
		grad: 'Ohrid',
		opcija: 'Trosoban stan',
		tip: 'Stanovi',
		cena: 95000,
		kvadratura: 85,
	},
	{
		grad: 'Kotor',
		opcija: 'Dvoiposoban stan',
		tip: 'Stanovi',
		cena: 180000,
		kvadratura: 70,
	},
	{
		grad: 'Nikšić',
		opcija: 'Kuće',
		tip: 'Kuće',
		cena: 65000,
		kvadratura: 130,
	},
	{
		grad: 'Šibenik',
		opcija: 'Jednoiposoban stan',
		tip: 'Stanovi',
		cena: 110000,
		kvadratura: 55,
	},
	{
		grad: 'Dubrovnik',
		opcija: 'Četvorosoban',
		tip: 'Stanovi',
		cena: 320000,
		kvadratura: 125,
	},
	{
		grad: 'Varaždin',
		opcija: 'Dvosoban stan',
		tip: 'Stanovi',
		cena: 85000,
		kvadratura: 65,
	},
	{
		grad: 'Beograd',
		opcija: 'Garsonjera',
		tip: 'Stanovi',
		cena: 60000,
		kvadratura: 32,
	},
	{
		grad: 'Novi Sad',
		opcija: 'Jednosoban stan',
		tip: 'Stanovi',
		cena: 70000,
		kvadratura: 45,
	},
	{
		grad: 'Zagreb',
		opcija: 'Trosoban stan',
		tip: 'Stanovi',
		cena: 190000,
		kvadratura: 100,
	},
	{
		grad: 'Split',
		opcija: 'Kuće',
		tip: 'Kuće',
		cena: 280000,
		kvadratura: 160,
	},
];

let selektorGradova = document.querySelector('#gradoviSelector');
let selektorKategorija = document.querySelector('#kategorijeSelector');
let selektorSoba = document.querySelector('#roomSelector');

for (let soba of brojSoba) {
	let opcijaElement = document.createElement('option');
	opcijaElement.innerHTML = soba;
	selektorSoba.appendChild(opcijaElement);
}

for (let kategorija of kategorije) {
	let opcijaKategorije = document.createElement('option');
	opcijaKategorije.innerHTML = kategorija;
	selektorKategorija.appendChild(opcijaKategorije);
}

for (let grad of gradovi) {
	let opcijaGrada = document.createElement('option');
	opcijaGrada.value = grad;

	let count = 0;
    let pronadjenGrad = false;

	for (let nekretnina of nekretnine) {
		if (nekretnina.grad === grad) {
			pronadjenGrad = true;
			count++;
		}
	}

	if (grad == 'Svi') {
		opcijaGrada.innerHTML = grad + ` (${nekretnine.length})`;
	} else {
		opcijaGrada.innerHTML = grad + ` (${count})`;
	}
	selektorGradova.appendChild(opcijaGrada);
	if (!pronadjenGrad && grad !== 'Svi') {
		opcijaGrada.setAttribute('disabled', 'true');
	}
}

let izabraniGrad = null;
let izabranaSoba = null;
let izabranaKategorija = null;

selektorSoba.addEventListener('change', function (event) {
	izabranaSoba = event.currentTarget.value;
});

selektorKategorija.addEventListener('change', function (event) {
	izabranaKategorija = event.currentTarget.value;
});

selektorGradova.addEventListener('change', function (event) {
	izabraniGrad = event.currentTarget.value;

	let sveNekretnine = document.getElementsByClassName('realEstate');

	for (let nekretnina of sveNekretnine) {
		let gradNekretnine = nekretnina.querySelector('.city').textContent;

		nekretnina.classList.remove('hidden');

		if (gradNekretnine !== izabraniGrad && izabraniGrad !== 'Svi') {
			nekretnina.classList.add('hidden');
		}
	}
});

for (let nekretnina of nekretnine) {
	let kontejner = document.createElement('div');
	kontejner.classList.add('realEstate');

	let naslov = document.createElement('p');
	naslov.innerText = nekretnina.grad;
	naslov.classList.add('city');

	let opcija = document.createElement('p');
	if (nekretnina.opcija == null) {
		opcija.innerText = '--';
	} else {
		opcija.innerText = nekretnina.opcija;
	}

	let cena = document.createElement('p');
	cena.innerText = nekretnina.cena + ' €';

	let kvadratura = document.createElement('p');
	kvadratura.innerText = nekretnina.kvadratura + ' m²';

	kontejner.append(naslov, opcija, cena, kvadratura);

	document.querySelector('#estates').appendChild(kontejner);
}
