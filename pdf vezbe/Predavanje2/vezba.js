/*
JavaScript vežbe – ARRAY (osnovni nivo) 
1.  Napravi niz brojevi sa vrednostima [1, 2, 3, 4, 5].  
2.  Ispiši ceo niz brojevi u konzoli.  
3.  Ispiši prvi element niza brojevi.  
4.  Ispiši poslednji element niza brojevi.  
5.  Napravi niz imena sa vrednostima ["Ana", "Marko", "Jovan"].  
6.  Ispiši drugi element niza imena.  
7.  Promeni vrednost "Marko" u "Nikola" u nizu imena.  
8.  Ispiši ceo niz imena posle izmene.  
9.  Napravi niz ocene sa vrednostima [5, 4, 3].  
10. Ispiši zbir prve dve ocene.  
11. Napravi niz gradovi = ["Beograd", "Novi Sad"].  
12. Dodaj "Niš" na kraj niza gradovi.  
13. Ispiši niz gradovi.  
14. Ukloni poslednji element iz niza gradovi.  
15. Ispiši niz gradovi nakon uklanjanja.

*/

let brojevi = [1, 2, 3, 4, 5];
console.log(brojevi);
console.log(brojevi[0]);
console.log(brojevi.at(-1));
let imena = ['Ana', 'Marko', 'Jovan'];
console.log(imena);
console.log(imena[1]);
imena[1] = 'Nikola';
console.log(imena);
let ocene = [5, 4, 3];
console.log(ocene[0] + ocene[1]);
let gradovi = ['Beograd', 'Novi Sad'];
console.log(gradovi);
gradovi.push('Niš');
console.log(gradovi);
gradovi.pop();
console.log(gradovi);

console.log('============================================================');

/*
Kombinovane array vežbe 
16. Napravi niz brojevi2 = [10, 20, 30].  
17. Ispiši zbir svih elemenata niza brojevi2 (koristi indekse).  
18. Napravi niz cene = [100, 200, 300].  
19. Uvećaj prvu cenu za 50 i ispiši novi niz.  
20. Napravi niz jezici = ["HTML", "CSS", "Java"].  
21. U nizu jezici zameni "Java" sa "JavaScript".  
22. Ispiši niz jezici.  
23. Napravi niz statusi = [true, false, true].  
24. Ispiši vrednost drugog elementa niza statusi.  
25. Napravi niz poruke = ["Zdravo", "Ćao"] i ispiši obe poruke jednu ispod druge. 
*/

let brojevi2 = [10, 20, 30];
console.log(brojevi2[0] + brojevi2[1] + brojevi2[2]);

let cene = [100, 200, 300];
console.log(cene);
cene[0] += 50;
console.log(cene);
let jezici = ['HTML', 'CSS', 'Java'];
console.log(jezici);
jezici[2] = 'Javascript';
console.log(jezici);
let statusi = [true, false, true];
console.log(statusi[1]);
poruke = ['Zdravo', 'Ćao'];
console.log(poruke[0]);
console.log(poruke[1]);
