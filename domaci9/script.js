let gradovi = [
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
	'Skoplje',
	'Bitola',
	'Ohrid',
	'Kotor',
	'Nikšić',
	'Šibenik',
	'Dubrovnik',
	'Varaždin',
];

let kategorije = [
	'Stanovi',
	'Kuće',
	'Poslovni prostori',
	'Placevi',
	'Garaže/parking',
];

let brojSoba = [
	'Garsonjera',
	'Jednosoban stan',
	'Jednoiposoban stan',
	'Dvosoban stan',
	'Dvoiposoban stan',
	'Trosoban stan',
	'Troipoosoban stan',
	'Četvorosoban',
	'4.5 i više soba',
];

let nekretnine = [
	{
		grad: 'Beograd',
		kategorija: 'Stanovi',
		brojSoba: 'Garsonjera',
		cena: 48200,
		kvadratura: 25,
	},
	{
		grad: 'Novi Sad',
		kategorija: 'Stanovi',
		brojSoba: 'Dvosoban stan',
		cena: 85000,
		kvadratura: 54,
	},
	{
		grad: 'Zagreb',
		kategorija: 'Stanovi',
		brojSoba: 'Trosoban stan',
		cena: 145000,
		kvadratura: 72,
	},
	{
		grad: 'Sarajevo',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 120000,
		kvadratura: 150,
	},
	{
		grad: 'Podgorica',
		kategorija: 'Stanovi',
		brojSoba: 'Jednosoban stan',
		cena: 65000,
		kvadratura: 42,
	},
	{
		grad: 'Niš',
		kategorija: 'Stanovi',
		brojSoba: 'Dvoiposoban stan',
		cena: 72000,
		kvadratura: 60,
	},
	{
		grad: 'Split',
		kategorija: 'Stanovi',
		brojSoba: 'Troipoosoban stan',
		cena: 210000,
		kvadratura: 85,
	},
	{
		grad: 'Ljubljana',
		kategorija: 'Poslovni prostori',
		brojSoba: null,
		cena: 320000,
		kvadratura: 110,
	},
	{
		grad: 'Banja Luka',
		kategorija: 'Stanovi',
		brojSoba: 'Jednoiposoban stan',
		cena: 58000,
		kvadratura: 48,
	},
	{
		grad: 'Kragujevac',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 95000,
		kvadratura: 180,
	},
	{
		grad: 'Rijeka',
		kategorija: 'Stanovi',
		brojSoba: 'Četvorosoban',
		cena: 175000,
		kvadratura: 95,
	},
	{
		grad: 'Subotica',
		kategorija: 'Placevi',
		brojSoba: null,
		cena: 25000,
		kvadratura: 600,
	},
	{
		grad: 'Budva',
		kategorija: 'Stanovi',
		brojSoba: 'Garsonjera',
		cena: 90000,
		kvadratura: 30,
	},
	{
		grad: 'Osijek',
		kategorija: 'Stanovi',
		brojSoba: 'Dvosoban stan',
		cena: 68000,
		kvadratura: 52,
	},
	{
		grad: 'Tuzla',
		kategorija: 'Garaže/parking',
		brojSoba: null,
		cena: 12000,
		kvadratura: 15,
	},
	{
		grad: 'Mostar',
		kategorija: 'Stanovi',
		brojSoba: 'Trosoban stan',
		cena: 89000,
		kvadratura: 78,
	},
	{
		grad: 'Skoplje',
		kategorija: 'Stanovi',
		brojSoba: '4.5 i više soba',
		cena: 135000,
		kvadratura: 120,
	},
	{
		grad: 'Zadar',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 280000,
		kvadratura: 220,
	},
	{
		grad: 'Dubrovnik',
		kategorija: 'Stanovi',
		brojSoba: 'Jednosoban stan',
		cena: 250000,
		kvadratura: 45,
	},
	{
		grad: 'Maribor',
		kategorija: 'Stanovi',
		brojSoba: 'Dvosoban stan',
		cena: 115000,
		kvadratura: 58,
	},
	{
		grad: 'Kotor',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 450000,
		kvadratura: 200,
	},
	{
		grad: 'Varaždin',
		kategorija: 'Placevi',
		brojSoba: null,
		cena: 35000,
		kvadratura: 800,
	},
	{
		grad: 'Nikšić',
		kategorija: 'Stanovi',
		brojSoba: 'Garsonjera',
		cena: 32000,
		kvadratura: 28,
	},
	{
		grad: 'Zenica',
		kategorija: 'Stanovi',
		brojSoba: 'Trosoban stan',
		cena: 55000,
		kvadratura: 75,
	},
	{
		grad: 'Bitola',
		kategorija: 'Stanovi',
		brojSoba: 'Jednoiposoban stan',
		cena: 42000,
		kvadratura: 50,
	},
	{
		grad: 'Ohrid',
		kategorija: 'Stanovi',
		brojSoba: 'Dvoiposoban stan',
		cena: 78000,
		kvadratura: 65,
	},
	{
		grad: 'Šibenik',
		kategorija: 'Stanovi',
		brojSoba: 'Jednosoban stan',
		cena: 130000,
		kvadratura: 40,
	},
	{
		grad: 'Beograd',
		kategorija: 'Poslovni prostori',
		brojSoba: null,
		cena: 500000,
		kvadratura: 200,
	},
	{
		grad: 'Novi Sad',
		kategorija: 'Garaže/parking',
		brojSoba: null,
		cena: 18000,
		kvadratura: 18,
	},
	{
		grad: 'Zagreb',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 350000,
		kvadratura: 250,
	},
	{
		grad: 'Sarajevo',
		kategorija: 'Stanovi',
		brojSoba: 'Garsonjera',
		cena: 45000,
		kvadratura: 22,
	},
	{
		grad: 'Niš',
		kategorija: 'Placevi',
		brojSoba: null,
		cena: 15000,
		kvadratura: 500,
	},
	{
		grad: 'Split',
		kategorija: 'Stanovi',
		brojSoba: 'Dvosoban stan',
		cena: 190000,
		kvadratura: 62,
	},
	{
		grad: 'Ljubljana',
		kategorija: 'Stanovi',
		brojSoba: 'Trosoban stan',
		cena: 280000,
		kvadratura: 80,
	},
	{
		grad: 'Banja Luka',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 110000,
		kvadratura: 160,
	},
	{
		grad: 'Kragujevac',
		kategorija: 'Stanovi',
		brojSoba: 'Jednosoban stan',
		cena: 38000,
		kvadratura: 35,
	},
	{
		grad: 'Rijeka',
		kategorija: 'Garaže/parking',
		brojSoba: null,
		cena: 15000,
		kvadratura: 14,
	},
	{
		grad: 'Osijek',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 130000,
		kvadratura: 190,
	},
	{
		grad: 'Tuzla',
		kategorija: 'Stanovi',
		brojSoba: 'Dvoiposoban stan',
		cena: 62000,
		kvadratura: 64,
	},
	{
		grad: 'Mostar',
		kategorija: 'Placevi',
		brojSoba: null,
		cena: 22000,
		kvadratura: 700,
	},
	{
		grad: 'Skoplje',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 160000,
		kvadratura: 210,
	},
	{
		grad: 'Zadar',
		kategorija: 'Stanovi',
		brojSoba: 'Jednoiposoban stan',
		cena: 140000,
		kvadratura: 50,
	},
	{
		grad: 'Budva',
		kategorija: 'Poslovni prostori',
		brojSoba: null,
		cena: 220000,
		kvadratura: 60,
	},
	{
		grad: 'Varaždin',
		kategorija: 'Stanovi',
		brojSoba: 'Dvosoban stan',
		cena: 95000,
		kvadratura: 56,
	},
	{
		grad: 'Bitola',
		kategorija: 'Garaže/parking',
		brojSoba: null,
		cena: 8000,
		kvadratura: 12,
	},
	{
		grad: 'Ohrid',
		kategorija: 'Kuće',
		brojSoba: null,
		cena: 180000,
		kvadratura: 170,
	},
	{
		grad: 'Ljubljana',
		kategorija: 'Placevi',
		brojSoba: null,
		cena: 90000,
		kvadratura: 1000,
	},
	{
		grad: 'Beograd',
		kategorija: 'Stanovi',
		brojSoba: '4.5 i više soba',
		cena: 380000,
		kvadratura: 150,
	},
	{
		grad: 'Novi Sad',
		kategorija: 'Stanovi',
		brojSoba: 'Troipoosoban stan',
		cena: 125000,
		kvadratura: 88,
	},
	{
		grad: 'Sarajevo',
		kategorija: 'Poslovni prostori',
		brojSoba: null,
		cena: 140000,
		kvadratura: 75,
	},
];

let gradoviSelect = document.querySelector('.gradovi');
let kategorijeSelect = document.querySelector('.kategorije');
let brojSobaSelect = document.querySelector('.brojSoba');
for (city of gradovi) {
	let optionEl = document.createElement('option');
	optionEl.textContent = city;
	gradoviSelect.append(optionEl);
}
for (kategorija of kategorije) {
	let optionEl = document.createElement('option');
	optionEl.textContent = kategorija;
	kategorijeSelect.append(optionEl);
}
for (broj of brojSoba) {
	let optionEl = document.createElement('option');
	optionEl.textContent = broj;
	brojSobaSelect.append(optionEl);
}

let izabraniGrad = gradovi[0];
let izabranaKategorija = kategorije[0];
let izabraniBrojSoba = brojSoba[0];
document.querySelector('#searchBtn').addEventListener('click', function () {
	console.log(izabraniGrad, izabranaKategorija, izabraniBrojSoba);
});

gradoviSelect.addEventListener('change', function (e) {
	izabraniGrad = e.target.value;
});
kategorijeSelect.addEventListener('change', function (e) {
	izabranaKategorija = e.target.value;
});
brojSobaSelect.addEventListener('change', function (e) {
	izabraniBrojSoba = e.target.value;
});

let nekretnineDiv = document.querySelector('#nekretnine');
for (nekretnina of nekretnine) {
	let divNekretnina = document.createElement('div');
	let pKategorijaGrad = document.createElement('h2');
	let pBrojSoba = document.createElement('p');
	let pCena = document.createElement('p');
	let pVelicina = document.createElement('p');
	pKategorijaGrad.textContent = nekretnina.kategorija + ' ' + nekretnina.grad;
	if (nekretnina.brojSoba === null) pBrojSoba.textContent = '---';
	else pBrojSoba.textContent = nekretnina.brojSoba;
	pCena.textContent = nekretnina.cena + ' €';
	pVelicina.textContent = nekretnina.kvadratura + ' m²';
	divNekretnina.append(pKategorijaGrad, pBrojSoba, pCena, pVelicina);
	nekretnineDiv.append(divNekretnina);
}
