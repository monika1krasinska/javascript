'use strict'
var imiona = ['Monika', 'Krystian', 'Łukasz'];



imiona[3]= 'Tania'
imiona[2]='Ela'
imiona.push('Geralt');
//console.log(imiona[2] + "i" + imiona[0]);

imiona.pop();
imiona.pop();

//console.log(imiona);
//console.log(imiona.unshift('Robert'))
//
//console.log(imiona.shift())
//console.log(imiona.length)
//var stringZTablicy = imiona.join("uuuu")
//console.log(stringZTablicy);
//console.log(imiona.reverse() );

//var tablicaLiczb = [3,67,1,634,99,80];
//var posortowanaTablica = tablicaLiczb.sort();
//console.log(posortowanaTablica);
//
var posortowanaTablica = imiona.sort();
console.log(posortowanaTablica);