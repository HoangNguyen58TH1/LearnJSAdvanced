let obj1 = {
  a: '1',
  b: '2'
}

let obj2 = {}
console.log(obj1);
console.log(obj2);

//clone obejct
for(let key in obj1){
  obj2[key] = obj1[key];
}
console.log(obj1);
console.log(obj2);

obj2.c = '3';

console.log(obj1);
console.log(obj2);
