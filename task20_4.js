let obj1 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

//Shallow cloning
// 1. Assign - 2 row
let obj2 = {}
obj2 = Object.assign(obj2, obj1);
console.log(obj1);
console.log(obj2);

obj2.d = 'd';
console.log(obj1);
console.log(obj2);

// 2. for...in{} - 4 row
let obj3 = {}
for (let key in obj1) {
    obj3[key] = obj1[key];
}
console.log(obj1);
console.log(obj3);

obj3.d = 'd';
console.log(obj1);
console.log(obj3);

// 3. Spread - 1 row
let obj4 = {...obj1}
console.log(obj1);
console.log(obj4);

obj4.d = 'd';
console.log(obj1);
console.log(obj4);
