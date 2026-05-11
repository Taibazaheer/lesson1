// FUNCTIONS -> package of the witten code, it can cpoied anywhere

function sayMyName(){

}

// sayMyName //function reference

// sayMyName() //function execution

// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, 4) 
// 3 and 4 are arguments and without arguments it will give ouput NaN


// const result = addTwoNumbers(3, 4) //output reult -> undefined
// because we didn't return a value and console, print the value

function addTwoNumbers(number1, number2){ 
    let result = number1 + number2
    return result 

    // return number1 + number2

    // console.log("taiba"); 
    /*above line will not execute because after RETURN statement,
    function will not execute further code*/
    
}
const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){   //(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("taiba"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 5000));

// ... -> rest operator, it collects the value and put in an arrray

// Hoe to pass an OBJECT in a function

const user = {
    username: "taiba",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and
        price is ${anyobject.price} `);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 144
})


// How to pass Array in a function

const mynewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 600, 800]));



























