//ARRAYS

const myArr = [1, 2, 3, 5, "hitesh", true]

const myArr2 = new Array(1, 2, 3, 4, 5)


//Array Methods

myArr.push(6); //add value in the end of the array
myArr.pop() //last value will be removed
// console.log(myArr);

myArr.unshift(0) //add value in the start of the array
myArr.shift() //remove the value from start of the arrray

// console.log(myArr.includes(8)); //asking element is there or not
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //all values convert into string


//Slice, Splice

// console.log("A ", myArr); //original array

const mnn1 = myArr.slice(1, 3) 
/*3 in not included
Array will be same*/
// console.log(mnn1); 
// console.log("B ", myArr); //after using slice

const myn2 = myArr.splice(1, 3)
/*  3 is included 
Original array will be manipulated
 */
// console.log("C ", myArr); //after using splice
// console.log(myn2 );
 




 



