/*
JavaScript vežbe – switch (osnovni nivo) 
Brojevi + switch 
1.  Napravi varijablu broj = 1.  Koristi switch da ispišeš "Jedan" ako je vrednost 1.  
2.  Napravi varijablu ocena = 5.  Koristi switch da ispišeš "Odličan" ako je ocena 5.  
3.  Napravi varijablu dan = 3.  Koristi switch da ispišeš "Sreda" ako je vrednost 3.  
4.  Napravi varijablu mesec = 12.  Koristi switch da ispišeš "Decembar" ako je vrednost 12.  
5.  Napravi varijablu statusKod = 2.  Koristi switch da ispišeš "Uspeh" ako je kod 2 

*/

let broj = 1;

switch (broj) {
	case 1:
		console.log('Jedan');
		break;
}

let ocena = 5;

switch (ocena) {
	case 5:
		console.log('Odličan');
		break;
}
let dan = 3;

switch (dan) {
	case 3:
		console.log('Sreda');
		break;
}
let mesec = 12;

switch (mesec) {
	case 12:
		console.log('Decembar');
		break;
}

let statusKod = 2;

switch (statusKod) {
	case 2:
		console.log('Uspeh');
		break;
}

console.log('============================================================');
/*
String + switch 
6.  Napravi varijablu boja = "crvena".  Koristi switch da ispišeš "Stop" ako je boja "crvena".  
7.  Napravi varijablu jezik = "JS".  Koristi switch da ispišeš "JavaScript" ako je "JS".  
8.  Napravi varijablu uloga = "admin".  Koristi switch da ispišeš "Admin pristup" ako je "admin".  
9.  Napravi varijablu grad = "Beograd".  Koristi switch da ispišeš "Glavni grad" ako je "Beograd".  
10. Napravi varijablu status = "online".  Koristi switch da ispišeš "Korisnik aktivan" ako je "online".  


*/

let boja = 'crvena';

switch (boja) {
	case 'crvena':
		console.log('Stop');
		break;
}
let jezik = 'JS';
switch (jezik) {
	case 'JS':
		console.log('JavaScript');
		break;
}

let uloga = 'admin';
switch (uloga) {
	case 'admin':
		console.log('Admin pristup');
		break;
}

let grad = 'Beograd';
switch (grad) {
	case 'Beograd':
		console.log('Glavni grad');
		break;
}

let status = 'online';
switch (status) {
	case 'online':
		console.log('Korisnik aktivan');
		break;
}

console.log('============================================================');
/*
Boolean + switch 
11. Napravi varijablu jeOnline = true.  Koristi switch da ispišeš "Online" ako je true.  
12. Napravi varijablu punoletan = false.  Koristi switch da ispišeš "Maloletan" ako je false.  
13. Napravi varijablu imaPristup = true.  Koristi switch da ispišeš "Pristup dozvoljen" ako je true

*/

let jeOnline = true;

switch (jeOnline) {
	case true:
		console.log('Online');
}
let punoletan = false;
switch (punoletan) {
	case false:
		console.log('Maloletan');
}

let imaPristup = true;
switch (imaPristup) {
	case true:
		console.log('Pristup dozvoljen');
}

console.log('============================================================');
/*
Array + switch 
14. Napravi niz ocene = [5, 4, 3].  Koristi switch za prvu ocenu i ispiši "Odličan" ako je 5.  
15. Napravi niz statusi = ["online", "offline"].  Koristi switch za drugi element i ispiši "Korisnik nije aktivan".  
16. Napravi niz jezici = ["HTML", "CSS", "JavaScript"].  Koristi switch za treći element i ispiši "JS jezik" ako je "JavaScript"

*/

let ocene = [5, 4, 3];
switch (ocene[0]) {
	case 5:
		console.log('Odličan');
		break;
}

let statusi = ['online', 'offline'];
switch (statusi[1]) {
	case 'offline':
		console.log('Korisnik nije aktivan');
		break;
}
let jezici = ['HTML', 'CSS', 'JavaScript'];
switch (jezici[2]) {
	case 'JavaScript':
		console.log('JS jezik');
		break;
}

console.log('============================================================');
/*
Kombinovane vežbe 
17. Napravi varijablu broj = 0.  Koristi switch da ispišeš "Nula" ako je vrednost 0.  
18. Napravi varijablu dan = "subota".  Koristi switch da ispišeš "Vikend" ako je "subota".  
19. Napravi varijablu uloga = "user".  Koristi switch da ispišeš "Običan korisnik" ako je "user".  
20. Napravi varijablu signal = "zeleno".  Koristi switch da ispišeš "Kreni" ako je "zeleno".  
21. Napravi varijablu rezultat = 3.  Koristi switch da ispišeš "Dobar" ako je rezultat 3.  
22. Napravi varijablu errorCode = 404.  Koristi switch da ispišeš "Stranica nije pronađena" ako je 404.  
23. Napravi varijablu plan = "premium".  Koristi switch da ispišeš "Premium korisnik" ako je "premium".  
24. Napravi varijablu vreme = "noc".  Koristi switch da ispišeš "Laku noć" ako je "noc".  
25. Napravi varijablu tip = "mobilni".  Koristi switch da ispišeš "Mobilni uređaj" ako je "mobilni"
*/

let broj3 = 0;

switch (broj3) {
	case 0:
		console.log('Nula');
		break;
}
let dan2 = 'subota';
switch (dan2) {
	case 'subota':
		console.log('Vikend');
		break;
}
let uloga2 = 'user';
switch (uloga2) {
	case 'user':
		console.log('Običan korisnik');
		break;
}
let signal = 'zeleno';
switch (signal) {
	case 'zeleno':
		console.log('Kreni');
		break;
}
let rezultat = 3;
switch (rezultat) {
	case 3:
		console.log('Dobar');
		break;
}
let errorCode = 404;
switch (errorCode) {
	case 404:
		console.log('Stranica nije pronađena');
		break;
}

let plan = 'premium';
switch (plan) {
	case 'premium':
		console.log('Premium korisnik');
		break;
}
let vreme = 'noc';
switch (vreme) {
	case 'noc':
		console.log('Laku noć');
		break;
}
let tip = 'mobilni';
switch (tip) {
	case 'mobilni':
		console.log('Mobilni uredjaj');
		break;
}
