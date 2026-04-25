/* On the basis of memory storage and how to access the data, 
dataypes are categorized into two types 
PRIMITIVE AND NON PRIMITIVE
*/

// PRIMITIVE(7 TYPES)- Call by value 
// Strings, Number, Boolean, null, undefined,  Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = nulllet 
let userEmail;

const id = Symbol('123')
const anotherId = Symbnol('123')

console.log(id === anotherId) //false

const bigNumber = 32569874156869854n


// NON PRIMITIVE - Reference

// Arrays, Objects, Functions
