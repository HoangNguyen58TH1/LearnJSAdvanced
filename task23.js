//Destructuring.
//Array - 4
// const arr = [1, 2, 3, 4, 5];
// 1.
const [a, b, c, d, e] = arr;
// 2.
const [f, , , g] = arr;
// 3.
const [h, ...i] = arr;
const [j, k = 100] = arr; ---- not work.
console.log(a, b, c, d, e);
console.log(f, g);
console.log(h, i);
console.log(j, k);

const arr2 = [10];
const [aa, bb] = arr2;
const [cc, ...dd] = arr2;
// 4. rest
const [ee, ff = 100] = arr2;
console.log(aa, bb);
console.log(cc, dd);
console.log(ee, ff);

//Object - 3
const obj = {
    a: 1,
    b: 2,
    c: 3
}
// [search key -> key same --> set value.] ---------------------
// 1.
const { a: x, b: y, c:z } = obj;
// 2.
const {
    a,
    b,
    c
} = obj;
// 3. rest
const { b, ...g } = obj;
console.log(x, y, z);
console.log(a, b, c);
console.log(b, g);