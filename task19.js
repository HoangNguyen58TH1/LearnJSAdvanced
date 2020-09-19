let a = 1;
let b = 1;
// console.log(a === b);

let c = { a: 'a' };
let d = { a: 'a' };
// console.log(c === d);

let arr1 = [1,2,3];
let arr2 = [1,2,3];
// console.log(arr1 === arr2);

function f1(){
  return 'abc';
}
function f2(){
  return 'abc';
}

console.log(f1() === f2());
console.log(f1 === f2);

// value type: string, number, boolean, null, undefined.
// so sah value
// reference types: array, object, function.
// so sanh vi tri bộ nhớ.
