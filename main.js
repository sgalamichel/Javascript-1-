'use strict';

// Javascript basics 

//Exercise 1: In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes,

var myName = "Sofia" ; 
console.log(myName);

//Exercise 2: Create a variable called age with a number that is your age. Do not use string quotes for numbers.
//Add a line to print that variable in the console. Save the file and reload the page. You should see your name, and your age.

var age = 27;
console.log(age);

//Exercise 3: Create a variable called ignasiAge with a value 32. Create another variable called ageDiff and set it to an expression
//that calculates your age minus Ignasi's age.  Print the value of ageDiff.

var ignasiAge = 32;
var ageDiff = (age - ignasiAge);
console.log(ageDiff);

//Writing code with conditionals

//Exercise 4: Write a conditional that compares the variable with your age with the number 21.
//It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.


if (age > 21){
    console.log("You are older than 21")
}
else{
    console.log( "You are not older that 21")
};

//Exercise 5: Write a conditional that compares your age with Ignasi's age. This conditional will need to test if you are older, younger,
//or the same age, and print, appropriately, either "Ignasi is older than you", Ignasi is younger than you", 
//or "You have the same age as Ignasi".  

if (age < ignasiAge){
    console.log("Ignasi is older than you")
}
else if (age == ignasiAge){
    console.log("You have the same age as Ignasi")
} 
else{
    console.log("Ignasi is younger than you")
}

//Javascript Arrays

// Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically. 
// Print the first element of the array in the console.  Print the last element of the array in the console.  
// Print all the elements of the array in the console.  Use a "for" loop.


let names = ['CamilaT', 'Mario', 'Sofia', 'Giovanni', 'Sebastian', 'Leonel', 'Camila', 'Silvina', 'Tomas', 'Daiana', 'Fernando', 'Mauro', 'Marcos', 'Rut', 'Ailen', 'Eduardo', 'SofiaG', 'Daniel', 'Allen', 'Magali', 'Adolfo', 'Florencia', 'Martin', 'Esteban', 'Nahuel', 'Luciano', 'David'];
names.sort();
console.log('The first element: ' + names[0]);
console.log( 'The last element: ' + names[names.length -1]);

for (let i of names){
    console.log(i);
}
        /// Looping over an array ///

// Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop,
// and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  
// Change the loop to use a "for" loop instead of a "while" loop.

let ages = [20, 21,25,26,28,24,19,18,19,20,29,30,35,20,18,19,21,23,24,28,26,30,36,37,20,28]
let i = 0;

while (i < ages.length){
    console.log(ages[i])
    i++
}

function showAges (array){
    let i = 0;
    while (i < array.length) {
        console.log(ages[i])
    }
    i - i++; 
}


let evenAges = ages.filter(function(numero) {
    return numero % 2 ==0
});
console.log('Even numbers:  ' + evenAges);


        /// Functions that use arrays ///

// Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.

const arr = [14, 58, 20, 77, 4, 66, 82, 42, 67, 42]
let min = Number.POSITIVE_INFINITY
for (const value of arr) {
    min = Math.min(min, value)
}
console.log( 'The lowest number is:  ' + min)

//Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.
const ars = [14, 58, 20, 77, 4, 66, 82, 42, 67, 42]
let max = Math.max(...arr);
for (const value of arr) {
    max = Math.max(max, value)
}
console.log('The biggest number is:  ' + max)

// Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element
//  at the given position (one-based) to the console.

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function print_array_element(arr, i) {
    console.log('Position: ' + arr[i]);
}

print_array_element(array, index);

// Exercise 6: Write a function which receives an array and only prints the values that repeat. 

function duplicateValues(datos){
    let duplicate = [];

    for (let i = 0; i < datos.length; ++i) {
        //console.log(datos.slice(i + 1));
        if (i + 1 < datos.length && datos.slice(i + 1).indexOf(datos[i]) != -1 && duplicate.indexOf(datos[i]) == -1) {
            duplicate.push(datos[i]); 
        }
    }
    return duplicate;
}

let numbers  = [22, 23,25,22,56,58,56,99,94,99,25];
console.log(numbers);
console.log(numbers.length);
console.log();

let resultado = duplicateValues(numbers)
console.log(resultado);

// Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string.

let myColor = ["Red", "Green", "White", "Black"];

let color = myColor.concat();

console.log(color);

        ///  JavaScript String Functions  ///
// Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.

function invertirNumero(numero){
    return Number(numero.toString().split('').reverse().join(''))
}

let value = 12345;
console.log(value);
console.log('Reverse number: ' + invertirNumero(value));


// Exercise 2: Write a JavaScript function that returns a string in alphabetical order.

function ordenarTexto(text){
    return [...text].sort((a,b) => a.localeCompare(b)).join('');
}

console.log('String in alphabetical order: '  + ordenarTexto( 'webmaster'));


// Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. 

function firstUppercase (frase) {
    if (typeof frase != 'string') {
        throw TypeError('first letter of every word to uppercase (text).');
    }
    let palabras = frase.split (' ');

    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

try {
    console.log(firstUppercase('prince of persia'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

// Exercise 4: Write a JavaScript function that finds the longest word in a phrase. 


function stringMasLarga(str){
    let cadena = str.split(' ')
    let second = ''
    
    for(i = 0; i < cadena.length; i++) {
    if(second.length < cadena[i].length){second = cadena[i]}
    }
    return second;
}
try {
    console.log(stringMasLarga('Web Development Tutorial'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}