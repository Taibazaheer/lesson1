// console.log(2 > 1);

console.log("2" > 1); //true

// typescript dosen't allow to compare two different datatypes

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//sometimes js convert null into 0 or NaN
// NOTE: AVOID ABOVE CONVERSIONS

//Comparision operator and equality check are two different things in JS
//Strict Check -> Checking with "===" 
// "===" checks the value as well as datatype


console.log("2" === 2); //false

