const colors = ['blue', 'green', 'white'];

function iter(item) {
    console.log(item);
}
colors.forEach(iter);

// function iterate(item, index) {
//     console.log(`${item} has index ${index}.`);
// }

// colors.forEach(iterate);

function iterate(item, index) {
  if (index === colors.length - 1) {
      console.log(`${item} has index ${index}. The last iteration!`);
  } else {
      console.log(`${item} has index ${index}.`);
  }
}

colors.forEach(iterate);
const letters = ['a', 'b', 'c'];
function iterate(letter) {
    console.log(this === window);
}
letters.forEach(iterate, window);

const Numbers = [22, 3, 4, 10];
let allEven1 = true;
Numbers.forEach(function(number) {
    if (number % 2 !== 0) {
        allEven1 = false;
    }
});
console.log(allEven1);

const allEven2 = Numbers.every(function(number) {
  return number % 2 === 0;
});
console.log(allEven2);

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index);

const arr = [7, 33, 47, 99, 2, 103, 79];
const res = arr.find(element => element > 10);
console.log(res);

const array = [1, 2, 3, 4, 5];
const hasEven = array.some(element => element % 2 === 0);
console.log(hasEven);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);
