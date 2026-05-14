/* this keyword -> use to access variables in current context,
                   used in objects not in functions
*/

const user = {
    username: "taiba",
    price: 555,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // give output of current context
        
    }
}

user.welcomeMessage() //output -> taiba, welcome to website
user.username = "sam"
user.welcomeMessage() //output -> sam, welcome to website

console.log(this); //output -> {} (empty object)
// because there is no context in global scope

//global object in browser -> window

// method 1
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this cannot be used in functions
    
// }
// chai() //output -> undefined

// method 2
// const chai = function(){
//     let username = "sam"
//     console.log(this.username);
    
// }
// output same as method 1

const chai = () => { // basic arrow function
    let username = "sam"
    console.log(this); //same as method 1 and 2
    
}
// chai()

/* return keyword used with {} braces, 
return keyword is not used with () braces */

// const addTwo = (num1, num2) => num1 + num2  //implicit return 

// console.log(addTwo(3, 4));


// object
// const addTwo = (num1, num2) => {username: "sam"} 
// output -> undefined

const addTwo = (num1, num2) => ({username: "sam"})
// () braces should be used for objects
console.log(addTwo(3, 4)); 














































