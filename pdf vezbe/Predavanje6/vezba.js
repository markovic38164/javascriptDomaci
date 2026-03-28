// 1
let temperatura = 28;
if (temperatura > 25) console.log('Vruće');
else if (temperatura >= 15) console.log('Umereno');
else console.log('Hladno');

// 2
let poeni = [45, 78, 90, 62];
for (let i = 0; i < poeni.length; i++) {
	console.log(poeni[i] >= 60 ? 'Položio' : 'Nedovoljno');
}

// 3
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < brojevi.length; i++) {
	if (brojevi[i] % 3 === 0) console.log(brojevi[i]);
}

// 4
let imena = ['Ana', 'Marko', 'Jovan', 'Ivana'];
for (let i = 0; i < imena.length; i++) {
	if (imena[i].length >= 4) console.log(imena[i]);
}

// 5
let godina = 2026;
if ((godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0)
	console.log('Prestupna');
else console.log('Nije prestupna');

// 6
let ocene = [5, 4, 3, 2, 1];
let count = 0;
for (let i = 0; i < ocene.length; i++) {
	if (ocene[i] === 2) count++;
}
console.log(count);

// 7
let dan = 'subota';
switch (dan) {
	case 'subota':
	case 'nedelja':
		console.log('Vikend');
		break;
	default:
		console.log('Radni dan');
}

// 8
let statusi = ['online', 'offline', 'offline', 'online'];
for (let i = 0; i < statusi.length; i++) {
	switch (statusi[i]) {
		case 'online':
			console.log('Aktivan');
			break;
		default:
			console.log('Nije aktivan');
	}
}

// 9
let br = [5, 8, 12, 3];
let min = br[0];
for (let i = 1; i < br.length; i++) {
	if (br[i] < min) min = br[i];
}
console.log(min);

// 10
let oc = [5, 3, 4, 2, 5];
let sum = 0;
for (let i = 0; i < oc.length; i++) {
	sum += oc[i];
}
console.log(sum);

// 11
let vreme = 'jutro';
switch (vreme) {
	case 'jutro':
		console.log('Dobro jutro');
		break;
	case 'dan':
		console.log('Dobar dan');
		break;
	case 'noc':
		console.log('Laku noć');
		break;
}

// 12
let jezici = ['JS', 'HTML', 'CSS', 'Python'];
for (let i = 0; i < jezici.length; i++) {
	switch (jezici[i]) {
		case 'JS':
			console.log('JavaScript');
			break;
		case 'HTML':
			console.log('HyperText Markup Language');
			break;
		case 'CSS':
			console.log('Cascading Style Sheets');
			break;
		case 'Python':
			console.log('Python');
			break;
	}
}

// 13
let b = [2, 4, 6, 8, 10];
for (let i = 0; i < b.length; i++) {
	console.log(b[i] / 2);
}

// 14
let poruke = ['Zdravo', 'Ćao', 'Hello', 'Hi'];
for (let i = 0; i < poruke.length; i++) {
	if (poruke[i].length > 2) console.log(poruke[i]);
}

// 15
let ulogovan = [true, false, true, false];
for (let i = 0; i < ulogovan.length; i++) {
	console.log(ulogovan[i] ? 'Ulogovan' : 'Nije ulogovan');
}

// 16
let broj = 15;
console.log(broj % 3 === 0 ? 'Deljiv sa 3' : 'Nije deljiv');

// 17
let ocene2 = [1, 2, 3, 4, 5];
for (let i = 0; i < ocene2.length; i++) {
	if (ocene2[i] === 5) console.log('Odličan');
	else if (ocene2[i] >= 3) console.log('Dobar');
	else console.log('Nedovoljan');
}

// 18
let gradovi = ['Beograd', 'Novi Sad', 'Niš', 'Subotica'];
for (let i = 0; i < gradovi.length; i++) {
	if (gradovi[i].startsWith('N')) console.log(gradovi[i]);
}

// 19
let nums = [1, 2, 3, 4, 5];
let zbir = 0;
for (let i = 0; i < nums.length; i++) {
	if (nums[i] % 2 === 0) zbir += nums[i];
}
console.log(zbir);

// 20
let p2 = 72;
if (p2 >= 85) console.log('Odličan');
else if (p2 >= 60) console.log('Dobar');
else console.log('Nedovoljan');

// 21
let uloge = ['admin', 'user', 'guest'];
for (let i = 0; i < uloge.length; i++) {
	switch (uloge[i]) {
		case 'admin':
			console.log('Admin pristup');
			break;
		case 'user':
			console.log('Korisnik');
			break;
		case 'guest':
			console.log('Gost');
			break;
	}
}

// 22
let arr = [3, 7, 2, 8, 5];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i] > max) max = arr[i];
}
console.log(max);

// 23
let temp = [12, 25, 30, 18];
for (let i = 0; i < temp.length; i++) {
	if (temp[i] > 25) console.log('Vruće');
	else if (temp[i] >= 15) console.log('Umereno');
	else console.log('Hladno');
}

// 24
let msgs = ['Hello', 'World', 'JS', 'Bye'];
let spoj = '';
for (let i = 0; i < msgs.length; i++) {
	spoj += msgs[i];
}
console.log(spoj);

// 25
let tip = 'desktop';
switch (tip) {
	case 'desktop':
		console.log('Desktop uređaj');
		break;
	case 'mobile':
		console.log('Mobilni uređaj');
		break;
}

// 26
let n26 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < n26.length; i++) {
	console.log(n26[i] * n26[i]);
}

// 27
let o27 = [5, 3, 4, 2, 5, 3, 1];
let cnt = 0;
for (let i = 0; i < o27.length; i++) {
	if (o27[i] >= 4) cnt++;
}
console.log(cnt);

// 28
let g28 = ['Beograd', 'Novi Sad', 'Niš'];
let found = false;
for (let i = 0; i < g28.length; i++) {
	if (g28[i] === 'Niš') found = true;
}
console.log(found ? 'Pronađen Niš' : 'Niš nije pronađen');

// 29
let b29 = [10, 20, 30];
let novi = [];
for (let i = 0; i < b29.length; i++) {
	novi.push(b29[i] + 5);
}
console.log(novi);

// 30
let o30 = [5, 3, 4, 2, 5];
for (let i = 0; i < o30.length; i++) {
	if (o30[i] === 5) console.log('Odličan');
	else if (o30[i] >= 3) console.log('Dobar');
	else console.log('Nedovoljan');
}
