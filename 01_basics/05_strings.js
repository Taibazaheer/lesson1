const name = "taiba"
const repoCount = 82

// console.log(name + repoCount + " Value"); not used nowadays

// better syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('taibazaheer')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));


// go through more methods of strings or write a article about them

const newString = gameName.substring(0,5);

console.log(newString)


const anotherString = gameName.slice(-11, 5)
console.log(anotherString)


const newStringone = "    zaheer   "
console.log(newStringone)
console.log(newStringone.trim()) //learn more about trim


const url = "https://taiba.cm/taiba%20zaheer"

console.log(url.replace('%20','_'))
console.log(url.includes('zaheer'))