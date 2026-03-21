alert('Dobodošli na sajt!');

let names = ['admin', 'administrator', 'toma'];

let name = prompt('Unesite Vaše ime').toLowerCase();
if (names.includes(name)) {
	console.log('Dobrodošao administratore!');
} else {
	console.log('Nemate pristup sajtu!');
}
