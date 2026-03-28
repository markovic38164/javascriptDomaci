/*
JavaScript vežbe – IF (osnovni nivo) 
Brojevi i if 
1.  Napravi varijablu broj = 10.  Ako je broj veći od 5, ispiši "Broj je veći od 5".  
2.  Napravi varijablu godine = 18.  Ako su godine jednake 18, ispiši "Punoletan".  
3.  Napravi varijablu x = 3 i y = 5.  Ako je x manje od y, ispiši "x je manje od y".  
4.  Napravi varijablu poeni = 70.  Ako je poeni veće ili jednako 60, ispiši "Položio".  
5.  Napravi varijablu temperatura = 30.  Ako je temperatura veća od 25, ispiši "Vruće je"
*/

let broj = 10;
if (broj > 5) console.log('Broj je veći od 5');
let godine = 18;
if (godine === 18) console.log('Punoletan');
let x = 3;
let y = 5;
if (x < y) console.log('x je manje od y');
let poeni = 70;
if (poeni >= 60) console.log('Položio');
let temperatura = 30;
if (temperatura > 25) console.log('Vruće je');

console.log('============================================================');

/*
Boolean i if 
6.  Napravi varijablu jeOnline = true.  Ako je jeOnline true, ispiši "Korisnik je online".  
7.  Napravi varijablu imaNalog = false.  Ako je imaNalog false, ispiši "Nema nalog".  
8.  Napravi varijablu ulogovan = true.  Ako je ulogovan true, ispiši "Uspešno ste ulogovani".  
9.  Napravi varijablu punoletan = true.  Ako je punoletan true, ispiši "Dozvoljen pristup".  
10. Napravi varijablu jeAdmin = false.  Ako je jeAdmin false, ispiši "Nemate admin prava".  

*/

let jeOnline = true;
if (jeOnline) console.log('Korisnik je online');
let imaNalog = false;
if (!imaNalog) console.log('Nema nalog');
let ulogovan = true;
if (ulogovan) console.log('Uspešno ste ulogovani');
let punoletan = true;
if (punoletan) console.log('Dozvoljen pristup');
let jeAdmin = false;
if (!jeAdmin) console.log('Nemate admin prava');

console.log('============================================================');

/*
String i if 
11. Napravi varijablu ime = "Ana".  Ako je ime jednako "Ana", ispiši "Zdravo Ana".  
12. Napravi varijablu grad = "Beograd".  Ako je grad "Beograd", ispiši "Glavni grad".  
13. Napravi varijablu jezik = "JavaScript".  Ako je jezik "JavaScript", ispiši "Učiš JS".  
14. Napravi varijablu status = "online".  Ako je status "online", ispiši "Korisnik je aktivan".  
15. Napravi varijablu dan = "ponedeljak".  Ako je dan "ponedeljak", ispiši "Početak nedelje" 

*/

let ime = 'Ana';
if (ime === 'Ana') console.log('Zdravo Ana');
let grad = 'Beograd';
if (grad === 'Beograd') console.log('Glavni grad');
let jezik = 'JavaScript';
if (jezik === 'JavaScript') console.log('Učiš JS');
let status = 'online';
if (status === 'online') console.log('Korisnik je aktivan');
let dan = 'ponedeljak';
if (dan === 'ponedeljak') console.log('Početak nedelje');

console.log('============================================================');

/*
Array i if 
16. Napravi niz brojevi = [1, 2, 3].  Ako je prvi element veći od 0, ispiši "Pozitivan broj".  
17. Napravi niz imena = ["Ana", "Marko"].  Ako je prvi element "Ana", ispiši "Pronađena Ana".  
18. Napravi niz ocene = [5, 4, 3].  Ako je prva ocena jednaka 5, ispiši "Odličan".  
19. Napravi niz statusi = [true, false].  Ako je drugi element false, ispiši "Offline".  
20. Napravi niz jezici = ["HTML", "CSS", "JavaScript"].  Ako je treći element "JavaScript", ispiši "JS pronađen".  
 
*/

let brojevi = [1, 2, 3];
if (brojevi[0] > 0) console.log('Pozitivan broj');
let imena = ['Ana', 'Marko'];
if (imena[0] === 'Ana') console.log('Pronadjena Ana');
let ocene = [5, 4, 3];
if (ocene[0] === 5) console.log('Odličan');
let statusi = [true, false];
if (!statusi[1]) console.log('Offline');
let jezici = ['HTML', 'CSS', 'JavaScript'];
if (jezici[2] === 'JavaScript') console.log('JS pronadjen');

console.log('============================================================');
/*
Kombinovane vežbe 
21. Napravi varijablu broj = 8.  Ako je broj paran, ispiši "Paran broj".  
22. Napravi varijablu rezultat = 45.  Ako je rezultat manji od 50, ispiši "Nedovoljan".  
23. Napravi varijablu lozinka = "1234".  Ako je lozinka jednaka "1234", ispiši "Slaba lozinka".  
24. Napravi varijablu poruka = "Učim JavaScript".  Ako poruka sadrži "JavaScript", ispiši "JS poruka".  
25. Napravi varijablu korisnici = ["admin", "user"].  Ako je prvi korisnik "admin", ispiši "Admin pristup"

*/

let broj2 = 8;
if (broj2 % 2 === 0) console.log('Paran broj');
let rezultat = 45;
if (rezultat < 50) console.log('Nedovoljan');
let lozinka = '1234';
if (lozinka === '1234') console.log('Slaba lozinka');
let poruka = 'Učim JavaScript';
if (poruka.includes('JavaScript')) console.log('JS poruka');
let korisnici = ['admin', 'user'];
if (korisnici[0] === 'admin') console.log('Admin pristup');
