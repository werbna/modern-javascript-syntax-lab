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

