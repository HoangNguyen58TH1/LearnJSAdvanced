const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(target);
console.log(source);

const returnedTarget = Object.assign(target, source);

console.log(source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// const newObject = Object.assign({}, target);
// console.log(target);
// console.log(newObject);

// newObject.c = '3';
// console.log(target);
// console.log(newObject);