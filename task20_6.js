// function test() {
//   'use strict';

//   let a = { b: {c: 4} , d: { e: {f: 1} } };
//   //get address reference
//   let g = Object.assign({}, a);
//   let h = JSON.parse(JSON.stringify(a));
//   console.log(JSON.stringify(g.d)); // { e: { f: 1 } }
// //   console.log(typeof JSON.stringify(g.d));
//   g.d.e = 32;
//   console.log('g.d.e set to 32.'); // g.d.e set to 32.
//   console.log(JSON.stringify(g)); // { b: { c: 4 }, d: { e: 32 } }
//   console.log(JSON.stringify(a)); // { b: { c: 4 }, d: { e: 32 } }
//   console.log(JSON.stringify(h)); // { b: { c: 4 }, d: { e: { f: 1 } } }
//   h.d.e = 54;
//   console.log('h.d.e set to 54.'); // h.d.e set to 54.
//   console.log(JSON.stringify(g)); // { b: { c: 4 }, d: { e: 32 } }
//   console.log(JSON.stringify(a)); // { b: { c: 4 }, d: { e: 32 } }
//   console.log(JSON.stringify(h)); // { b: { c: 4 }, d: { e: 54 } }
// }

// test();

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { b: 3 };
console.log(o1);  // { a: 1, b: 2, c: 3 }, object đích tự nó bị thay đổi.
console.log(o2);
console.log(o3);

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, object đích tự nó bị thay đổi.
console.log(o2);
console.log(o3);