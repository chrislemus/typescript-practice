let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

//Classes
class Car {}
let car: Car = new Car();

// Obj literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) Functions that return `any` type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) declare a variable and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord == true;
  }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
