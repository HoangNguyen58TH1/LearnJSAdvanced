//using spread. (not assign with for...of)
// Shallow cloning.
let obj1 = {
    a: 'a',
    b: {
        c: {
            d: 'd'
        }
    }
}

// let obj2 = {
//     ...obj1
// };
// console.log(obj1);
// console.log(obj2);

// obj2.a = 'aa';
// console.log(obj1);
// console.log(obj2);

// obj2.b.c = 'changed';
// console.log(obj1);
// console.log(obj2);


// Deep cloning.
let obj3 = JSON.parse(JSON.stringify(obj1));
console.log(obj1);
console.log(obj3);

obj3.a = 'aa';
console.log(obj1);
console.log(obj3);

obj3.b.c.d = 'changed';
console.log(obj1);
console.log(obj3);