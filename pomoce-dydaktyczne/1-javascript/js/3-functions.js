'use strict';

function obliczOdsetki(kapital, procent) {
    var kapitalZOdsetkami = kapital + kapital * procent;
    
    return kapitalZOdsetkami;
}
//console.log(obliczOdsetki(1000000, 0.015) );
var inwestycjaAnety = obliczOdsetki (1000000, 0.015);
var inwestycjaKuby = obliczOdsetki (1000, 0.05);
console.log(inwestycjaAnety);
console.log(inwestycjaKuby);