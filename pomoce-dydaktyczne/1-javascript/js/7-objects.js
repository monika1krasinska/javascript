'use strict'
//var kaja = {
//    imie: "Kaja",
//    wzrost: 152,
//    przedstawOsobe: function() {console.log(this.imie +" "+ this.wzrost)}
//}
////this -z tego obiektu
//
//var krystian = {
//    imie: "Krystian",
//    wzrost:180,
//    przedstawOsobe: function() {
//        console.log(this.imie)
//    }
//}
//
//kaja.przedstawOsobe ();
//krystian.przedstawOsobe ();
//
//krystian.waga = 80;
//krystian.wyswietlDetale = function() {
//    console.log(this.imie + "," + this.wzrost + ","+ this.waga)
//}
//krystian.wyswietlDetale ();
//
//console.log(kaja.wzrost);
//console.log(kaja);

class Osoba {
    constructor(imie,nazwisko, plec,) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.plec = plec;
    }
wyswietlDetale() {
    console.log("Imie: "+ this.imie + ", Nazwisko:" + this.nazwisko + ", Płeć:" + this.plec);
}
}
var ewa = new Osoba("Ewa", "Rogulska", "Kobieta");


ewa.wyswietlDetale();

console.log(ewa);
var damian = new Osoba( "Damian", "Pawelec", "Mężczyzna");
damian.wyswietlDetale();