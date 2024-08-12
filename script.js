// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const numTimes2 = nums.map((num) => {
  return num * 2;
})

console.log(numTimes2)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping)
console.log(secondTopping)
// console.log(pizzaToppings[0])
// console.log(pizzaToppings[1])

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
// const {make, model} = car
// console.log(make)
// console.log(model)
console.log(car.make)
console.log(car.model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const clonedCar = { ...car }

clonedCar.model = 'q7'
console.log('Original: ', car)
console.log('Clone: ',clonedCar)

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName1 = 'username'
const propertyName2 = 'age'
const propertyName3 = 'email'

const userProfile = {
  [propertyName1]: 'john_doe',
  [propertyName2]: 18,
  [propertyName3]: 'john@email.com',
}

console.log(userProfile)

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function phrase(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}`)
}
phrase();
phrase('dog','black');

function phrase2(n,adj) {
  console.log(`The ${n} is ${adj}`)
}

phrase2('lion','orange')

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
pizza === 'tasty' ? console.log('yum') : console.log('yuck')

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = 'fr';  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig && 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = 'dark' || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};
// Your code here
let cat = adventurer.cat?.name

console.log(cat);
