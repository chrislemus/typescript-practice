const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];
// const carsByMake = [
//   ['f150'],
//   ['corolla'],
//   ['camaro']
// ]

//help with inference when extracting values
const car = carMakers[0];
const myCars = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('dwe');
importantDates.push(12);
