import 'reflect-metadata';

//====== attaching metadata to Var ======
const plane = {
  color: 'red',
};

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

//====== attaching metadata to PROPERTY ======
Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);

//====== attaching metadata to CLASS ======
@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi There')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);

function printMetadata(target: typeof Plane) {
  for (const key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
