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
// console.log(booleanIsLoggedIn);


//1 => true; 0 => false
//"" => false
//"sjk" => true

// STRING CONVERSION 
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber); //string


//***********Operation *************//
let value = 3
let negvalue = -value
// console.log(negvalue)

// console.log("1" + 2) //Output = 12
// console.log(1 + "2") //Output = 12
// console.log("1" + 2 + 2) //Output = 122
// console.log(1 + 2 + "2") //Output = 32 
//Not a good (above) way to write a code

// Do not do that
// console.log(+true) // "+" do the conversion
// console.log(+"")

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// POST-INCREMENT(x++) : use x then add 1
// PRE-INCREMENT(++x) : add 1 then use x



