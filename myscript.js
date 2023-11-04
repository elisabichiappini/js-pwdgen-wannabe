// FILE JAVASCRIPT

// controll Javascritp text
'use strict'
// controll Javascritp text

// dichiarazione
const elementName = document.getElementById ('name');
const elementSurname = document.getElementById ('surname');
const elementColor = document.getElementById ('color');
const elementNumber = document.getElementById ('number');

// assegnazione numero
elementNumber.innerHTML = 21;

// richiesta input al cliente
elementName.innerHTML = prompt ('Inserisci il tuo nome');
elementSurname.innerHTML = prompt ('Inserisci il tuo cognome');
elementColor.innerHTML = prompt ('Inserisci il tuo colore');

// operazione di concatenazione in console
let elementDates = document.getElementById ('results');
elementDates = ` ${elementName.innerHTML}, ${elementSurname.innerHTML}, ${elementColor.innerHTML} `;
console.log(elementDates);