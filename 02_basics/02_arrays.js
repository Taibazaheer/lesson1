const marvel_heros = ["spiderman", "thor", "ironman"]
const dc_heros = ["batman", "flash", "superman"]

marvel_heros.push(dc_heros) //it takes the whole dc array as an element

const mallHeros = marvel_heros.concat(dc_heros) 
/* Merge array properly
store in a new array */

const all_new_heros = [...marvel_heros,...dc_heros] //Spread
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

  console.log(Array.isArray("Taiba"));
  console.log(Array.from("taiba")); //converting into array

  console.log(Array.from({name : "taiba"})); //interesting , returns empty array
  
  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1, score2, score3));

  //Learn more about isArray, of, from
  
  


