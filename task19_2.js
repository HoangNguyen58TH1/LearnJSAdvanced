// let a = 1;
// let b = 1;
// console.log(a === b);

// let c = b;
// c = 2;
// console.log(a,b,c);

// let obj1 = {a:'a'};
// let obj2 = {a:'a'};

// console.log(obj1 === obj2);

// let obj3 = obj2;
// obj3.b = 'b';
// obj3 = {a:'a', b:'b'}
// console.log(obj1, obj2, obj3);

let obj1 = {a:'1'};
let a = 1;

console.log(obj1);
console.log(a);

function run(obj1, a){
  obj1.b = '2';
  a = 2;
  console.log(obj1);
  console.log(a);
}
run(obj1, a);

console.log(obj1);
console.log(a);