// NUMBERS

const score = 400
// console.log(score);

// explicitely defining number
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   //use in e-commerce website making

const otherNumber = 123.45689

// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++ MATHS ++++++++++

console.log(Math); //Math -> Object
// console.log(Math.abs(-4)); //-ve to +ve
// console.log(Math.round(5.53));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(5.2));
// console.log(Math.min(4, 5, 3 , 2));
// console.log(Math.max(6, 4, 2, 1));

// console.log(Math.random()); //gives value b/w 0 and 1
// console.log((Math.random() * 10) + 1); //guranteed value will be greater than 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//(max - min) -> to get it between a particular range ,
// (+ 1) -> to avoid getting zero
//(+ min) -> to get a minimum value






