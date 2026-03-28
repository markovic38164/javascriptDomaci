/*
## **Osnovne JavaScript vežbe – VARIJABLE**

1. Napravi varijablu **ime = "Ana"** i ispiši je u konzoli.
2. Napravi varijablu **godine = 20** i ispiši je.
3. Napravi varijablu **jeStudent = true** i ispiši je.
4. Napravi varijablu **grad = "Beograd"** i ispiši poruku:  
   *Živim u gradu Beograd.*
5. Spoji string **"Zovem se "** i varijablu **ime** i ispiši rezultat.

*/

let ime = 'Ana';
console.log(ime);
let godine = 20;
console.log(godine);
let jeStudent = true;
console.log(jeStudent);
let grad = 'Beograd';
console.log('Živim u gradu ' + grad + '.');
let recenica = 'Zovem se ' + ime;
console.log(recenica);

console.log('============================================================');

/*
Brojevi i math operatori 
6.  Napravi varijable a = 10 i b = 5.  
7.  Ispiši zbir brojeva a + b.  
8.  Ispiši razliku brojeva a - b.  
9.  Ispiši proizvod brojeva a * b.  
10. Ispiši količnik brojeva a / b.  
11. Ispiši ostatak pri deljenju a % b.  
12. Povećaj vrednost varijable a za 1 i ispiši novu vrednost.  
13. Smanji vrednost varijable b za 1 i ispiši novu vrednost.  
14. Napravi varijablu x = 3 i y = 4, ispiši (x + y) * 2.  
 
*/

let a = 10;
let b = 5;
console.log('a=', a);
console.log('b=', b);
console.log('a+b=', a + b);
console.log('a-b=', a - b);
console.log('a*b=', a * b);
console.log('a/b=', a / b);
console.log('a%b=', a % b);
a++;
console.log('a++, a je sada:', a);
b--;
console.log('b--, b je sada:', b);
let x = 3;
let y = 4;
console.log('x=', x);
console.log('y=', y);
console.log('(x + y) * 2=', (x + y) * 2);

console.log('============================================================');

/*
String vežbe + replace() 
15. Napravi string "Učim programiranje" i ispiši ga.  
16. U stringu "Učim programiranje" zameni programiranje sa kodiranje.  
17. Napravi string "Danas je lep dan" i ispiši ga.  
18. U stringu "Danas je lep dan" zameni lep sa sunčan.  
19. Napravi string "Moje ime je Ana" i ispiši ga.  
20. U stringu "Moje ime je Ana" zameni Ana sa Marko.
*/
let text = 'Učim programiranje';
console.log(text);
text = text.replace('programiranje', 'kodiranje');
console.log(text);
let dan = 'Danas je lep dan!';
console.log(dan);
dan = dan.replace('lep', 'sunčan');
console.log(dan);
let mojeIme = 'Moje ime je Ana';
console.log(mojeIme);
mojeIme = mojeIme.replace('Ana', 'Marko');
console.log(mojeIme);

console.log('============================================================');

/*
Kombinovane vežbe 
21. Napravi varijablu poruka = "Učim osnove JavaScript" i ispiši je.  
22. U stringu "Učim osnove JavaScript" zameni osnove sa napredne.  
23. Napravi varijablu broj = 10 i ispiši  Vrednost broja je 10.  
24. Spoji string "Imam " + godine + " godina" i ispiši.  
25. Napravi varijablu jeOnline = false i ispiši je.  
26. Napravi varijable c = 7 i d = 2, ispiši njihov zbir.  
27. Napravi string "JavaScript je zabavan" i ispiši ga.  
28. U stringu "JavaScript je zabavan" zameni zabavan sa koristan.  
29. Napravi varijablu rezultat = c * d i ispiši je.  
30. Spoji string "Rezultat je " i varijablu rezultat i ispiši. 
 
*/

let poruka = 'Učim osnove JavaScript';
console.log(poruka);
poruka = poruka.replace('osnove', 'napredne');
console.log(poruka);
let broj = 10;
console.log('Vrednost broja je ', broj);

console.log('Imam ' + godine + ' godina.');
let jeOnline = false;
console.log(jeOnline);
let c = 7;
let d = 2;
console.log('c=', c);
console.log('d=', d);
console.log('c+d=', c + d);
let javascriptZabavan = 'Javascript je zabavan';
console.log(javascriptZabavan);
javascriptZabavan = javascriptZabavan.replace('zabavan', 'koristan');
console.log(javascriptZabavan);

let rezultatCD = c * d;
console.log('c*d=', rezultatCD);
let rezultatCDStr = 'Rezultat je ' + rezultatCD;
console.log(rezultatCDStr);
