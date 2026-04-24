// NUMBER CONVERSION 
let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number (score) // guranteed it is a number
// console.log(typeof score);
// console.log(valueInNumber); 

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

//BOOLEAN CONVERSION 
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);


//1 => true; 0 => false
//"" => false
//"sjk" => true

// STRING CONVERSION 
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber); //string