'use strict'

//Typ liczbowy

var wyplata = "5000";
var premia = "2500";
var calkowitaWyplata;

calkowitaWyplata= wyplata + premia; 
console.log(calkowitaWyplata);

//Typ lancuch znakow-string



var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr; 
console.log(calkowitaWyplataStr);

//Typ logiczny

var czyJestSmog;
czyJestSmog = true;
if (czyJestSmog) {
    console.log("Jest Smog");
} else {
    console.log("Nie ma SMOGa:)")
;}

//Typy specjalne (nulll/undefinied)

var niezdefiniowanaZmienna;
var nullowaZmienna=null;
console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);