// let a = 10
// const b = 20
// var c = 30

// {} are scope, when it comes with if-else or funcion
let a = 300 //console of this will print 300
if(true){
    let a = 10 
    const b = 20
    var c = 30
    // console.log("inner: " , a); //output -> 10
    
}
// anything inside the if curly braces is called BLOCK SCOPE
// nothing should leak from block scope
// outside that all called GLOBAL SCOPE

// console.log(a); //(i)output -> not available, 
// console.log(b); //(ii)output -> not available
// console.log(c); //(iii)output -> 30

/* (i) and (ii) is not available out of the scope
but (iii) is available out of the scope,
that's why we don't use 'var'*/


// browser global scope is different from the node global scope

function one(){
    const username = "taiba"

    function two(){
        const website = "youtube"
        console.log(usernamme);
        
    }
    // console.log(website); // error

    two();
    
}

// one()

if(true){
    const username = "taiba"
    if(username === "taiba"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website); //error
    
}

// console.log(username); //error


//++++++++++++++++++interesting++++++++++++++++++++++

addone(5) // no error in output
function addone(num){
    return num + 1
}

// addone(5)


// addTwo(5) // error in  output
const addTwo = function(num){
    return num + 2
}

addTwo(5)


























