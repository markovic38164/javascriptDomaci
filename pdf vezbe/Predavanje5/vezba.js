/*


1.  Napravi varijablu broj = 7. Koristi if da proveriš da li je broj veći od 5 i ispiši "Broj 
je veći od 5".  
2.  Napravi varijablu godine = 16. Koristi if da ispišeš "Maloletan" ili "Punoletan".  
3.  Napravi niz ocene = [5,3,4,2,5]. Koristi for loop i if da ispišeš samo ocene veće 
ili jednake 4.  
4.  Napravi niz brojevi = [1,2,3,4,5,6]. Koristi for loop i if da ispišeš samo parne 
brojeve.  
5.  Napravi niz imena = ["Ana","Marko","Jovan"]. Koristi for loop i if da ispišeš 
samo imena koja počinju slovom "A".  
6.  Napravi niz gradovi = ["Beograd","Novi Sad","Niš"]. Koristi for loop i if da 
ispišeš gradove sa više od 5 karaktera.  
7.  Napravi varijablu dan = 3. Koristi switch da ispišeš ime dana (1 = Ponedeljak, 2 = 
Utorak, 3 = Sreda...).  
8.  Napravi varijablu boja = "zelena". Koristi switch da ispišeš "Kreni" ako je 
zelena, "Stop" ako je crvena, "Pažnja" ako je žuta.  
9.  Napravi niz statusi = ["online","offline","online"]. Koristi for + switch 
da ispišeš "Korisnik aktivan" ili "Korisnik nije aktivan".  
10. Napravi varijablu broj = 10. Koristi if da proveriš da li je paran ili neparan i ispiši 
"Paran" ili "Neparan". 

*/

let broj = 7;
if (broj > 5) console.log('Broj je veci od 5');
let godine = 16;
if (godine >= 18) console.log('Punoletan');
else console.log('Maloletan');

let ocene = [5, 3, 4, 2, 5];
for (let i = 0; i < ocene.length; i++) {
	if (ocene[i] >= 4) console.log(ocene[i]);
}
console.log('----------------');
let brojevi = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < brojevi.length; i++) {
	if (brojevi[i] % 2 === 0) console.log(brojevi[i]);
}
console.log('----------------');
imena = ['Ana', 'Marko', 'Jovan'];

for (let i = 0; i < imena.length; i++) {
	if (imena[i][0].toLowerCase() === 'a') console.log(imena[i]);
}
console.log('----------------');

let gradovi = ['Beograd', 'Novi Sad', 'Niš'];
for (let i = 0; i < gradovi.length; i++) {
	if (gradovi[i].length > 5) console.log(gradovi[i]);
}
console.log('----------------');

let dan = 3;

switch (dan) {
	case 1:
		console.log('Ponedeljak');
		break;
	case 2:
		console.log('Utorak');
		break;
	case 3:
		console.log('Sreda');
		break;
	case 4:
		console.log('Četvrtak');
		break;
	case 5:
		console.log('Petak');
		break;
	case 6:
		console.log('Subota');
		break;
	case 7:
		console.log('Nedelja');
		break;
	default:
		console.log('Nema');
}
console.log('----------------');

boja = 'zelena';

switch (boja) {
	case 'zelena':
		console.log('Kreni');
		break;
	case 'žuta':
		console.log('Pažnja');
		break;
	case 'crvena':
		console.log('Stop');
		break;
}
console.log('----------------');
let statusi = ['online', 'offline', 'online'];

for (let i = 0; i < statusi.length; i++) {
	switch (statusi[i]) {
		case 'online':
			console.log('Korisnik je aktivan');
			break;
		case 'offline':
			console.log('Korisnik nije aktivan');
			break;
	}
}
let broj2 = 10;
if (broj2 % 2 === 0) console.log('Paran');
else console.log('Neparan');
console.log('-------------------------------------');

/*
11. Napravi niz rezultati = [45,70,90]. Koristi for + if da ispišeš "Položio" za 
sve vrednosti veće ili jednake 60, "Nedovoljno" za ostale.  
12. Napravi niz brojevi = [3,5,8,2]. Koristi for loop da sabereš sve brojeve i ispišeš 
zbir.  
13. Napravi niz brojevi = [1,2,3,4,5]. Koristi for loop da pronađeš najveći broj.  
14. Napravi niz poruke = ["Hello","World","JS"]. Koristi for loop da ispišeš 
poruke koje sadrže slovo "o".  
15. Napravi varijablu poeni = 85. Koristi if da ispišeš "Odličan" za poene >= 80, 
"Dobar" za 60–79, "Nedovoljan" za manje od 60.  
16. Napravi niz uloge = ["admin","user","guest"]. Koristi for + switch da 
ispišeš "Admin pristup" za "admin", "Korisnik" za "user", "Gost" za 
"guest".  
17. Napravi niz brojevi = [2,4,6,8]. Koristi while loop da ispišeš sve brojeve.  
18. Napravi varijablu x = 5. Koristi while loop da smanjuješ x dok je veće od 0 i ispiši 
svaku vrednost.  
19. Napravi niz ocene = [5,4,3,2,1]. Koristi for loop da izračunaš prosečnu ocenu i 
ispiši rezultat.  
20. Napravi niz jezici = ["JS","HTML","CSS"]. Koristi for + switch da ispišeš 
"JavaScript", "HTML jezik", "CSS jezik" za svaki element.  
*/

let rezultati = [45, 70, 90];

for (let i = 0; i < rezultati.length; i++) {
	if (rezultati[i] >= 60) console.log('Položio');
	else console.log('Nedovoljno');
}
let brojevi2 = [3, 5, 8, 2];
let zbir = 0;
for (let i = 0; i < brojevi2.length; i++) {
	zbir += brojevi2[i];
}
console.log(zbir);

let poruke = ['Hello', 'World', 'JS'];

for (let i = 0; i < poruke.length; i++) {
	if (poruke[i].toLowerCase().includes('o')) console.log(poruke[i]);
}

let poeni = 85;
if (poeni >= 80) console.log('Odličan');
else if (poeni >= 60 && poeni < 80) console.log('Dobar');
else console.log('Nedovoljan');

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

let brojevi3 = [2, 4, 6, 8];
let i = 0;
while (i < brojevi3.length) {
	console.log(brojevi3[i]);
	i++;
}
console.log('----------------');
let x = 5;
while (x > 0) {
	console.log(x);
	x--;
}
console.log('----------------');
let ocene2 = [5, 4, 3, 2, 1];
let sum = 0;
for (let i = 0; i < ocene2.length; i++) {
	sum += ocene2[i];
}
let avg = sum / ocene2.length;
console.log(avg);

console.log('----------------');

let jezici = ['JS', 'HTML', 'CSS'];
for (let i = 0; i < jezici.length; i++) {
	switch (jezici[i]) {
		case 'JS':
			console.log('JavaScript');
			break;
		case 'HTML':
			console.log('HTML jezik');
			break;
		case 'CSS':
			console.log('CSS jezi');
			break;
	}
}
/*
21. Napravi niz ulogovan = [true,false,true]. Koristi for + if da ispišeš 
"Ulogovan" ili "Nije ulogovan".  
22. Napravi varijablu vreme = "noc". Koristi switch da ispišeš "Laku noć" ako je 
"noc", "Dobro jutro" ako je "jutro", "Dobar dan" ako je "dan".  
23. Napravi niz cifre = [1,2,3,4,5]. Koristi for loop da sabereš sve brojeve veće od 
3.  
24. Napravi niz ocene = [5,3,4,2,5]. Koristi for loop da prebrojiš koliko je ocena 5.  
25. Napravi niz gradovi = ["Beograd","Novi Sad","Niš"]. Koristi for + if da 
proveriš da li niz sadrži "Niš" i ispiši "Pronađen Niš" ili "Niš nije pronađen".  
26. Napravi niz brojevi = [1,2,3,4,5]. Koristi for loop da svaki broj povećaš za 10 i 
ispiši novi niz.  
27. Napravi varijablu tip = "mobilni". Koristi switch da ispišeš "Mobilni uređaj" 
za "mobilni", "Desktop uređaj" za "desktop".  
28. Napravi niz poruke = ["Zdravo","Ćao","Hello"]. Koristi for loop da spojiš sve 
poruke u jedan string i ispiši rezultat.  
29. Napravi niz brojevi = [10,20,30]. Koristi for loop da svaki broj podeliš sa 2 i 
ispiši rezultat.  
30. Napravi niz ocene = [5,3,4,2,5]. Koristi for loop i if da ispišeš "Odličan" za 
ocene >=5, "Dobar" za ocene 3–4, "Nedovoljan" za ocene manje od 3. 
 */
console.log('-------------');
let ulogovan = [true, false, true];
for (let i = 0; i < ulogovan.length; i++) {
	if (ulogovan[i]) console.log('Ulogovan');
	else console.log('Nije ulogovan');
}

let vreme = 'noc';
switch (vreme) {
	case 'noc':
		console.log('Laku noc');
		break;
	case 'jutro':
		console.log('Dobro jutro');
		break;
	case 'dan':
		console.log('Dobar dan');
		break;
}
let cifre = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < cifre.length; i++) {
	if (cifre[i] > 3) sum2 += cifre[i];
}
console.log(sum2);

let ocene3 = [5, 3, 4, 2, 5];
let count = 0;
for (let i = 0; i < ocene3.length; i++) {
	if (ocene3[i] === 5) count++;
}
console.log(count);

let gradovi2 = ['Beograd', 'Novi Sad', 'Niš'];
let nisFound = false;
for (let i = 0; i < gradovi2.length; i++) {
	if (gradovi2[i] === 'Niš') nisFound = true;
}
if (nisFound) console.log('Pronadjen Niš');
else console.log('Niš nije pronadjen');

let brojevi4 = [1, 2, 3, 4, 5];
for (let i = 0; i < brojevi4.length; i++) {
	brojevi4[i] += 10;
}
console.log(brojevi4);

let tip = 'mobilni';
switch (tip) {
	case 'mobilni':
		console.log('Mobilni uredjaj');
		break;
	case 'desktop':
		console.log('Desktop uredjaj');
		break;
}

let poruke2 = ['Zdravo', 'Ćao', 'Hello'];

let recenica = '';
for (let i = 0; i < poruke2.length; i++) {
	recenica += poruke2[i];
}
console.log(recenica);

let brojevi5 = [10, 20, 30];
for (let i = 0; i < brojevi5.length; i++) {
	console.log(brojevi5[i] / 2);
}

let ocene4 = [5, 3, 4, 2, 5];
for (let i = 0; i < ocene4.length; i++) {
	if (ocene4[i] >= 5) console.log('Odličan');
	else if (ocene4[i] >= 3) console.log('Dobar');
	else console.log('Nedovoljan');
}
