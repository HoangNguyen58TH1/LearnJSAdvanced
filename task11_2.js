// 1. Property shorthand
// Có thể  thêm 1 variable đã được gán value thành 1 phần tử của object
let name = 'Hoang';
let age = 22;
let obj = {
    name,
    age
}
console.log(obj);

// 2.Computed Property Name
// Có thể thay đổi key (thuộc tính) của object.
let name = 'Name';
let obj = {
    ['full' + name]: 'NguyenVanHoang' + name,
}
console.log(obj);
// console.log(obj.full);
console.log(obj.fullName);
console.log(typeof obj.fullName);

// 3. Method Properties
// khai báo function trong object k cần dùng đến keyword function nữa
// Mà có thể khai báo thẳng luôn, khai báo như bình thường.
let obj = {
    // f1: function(){
    //     console.log('function f1');
    // },
    // f2: function(name){
    //     console.log(`${name}`);
    // }
    f1(){
        console.log('function f1');
    },
    f2(name){
        console.log(`${name}`);
    }
}
console.log(obj.f1());
console.log(obj.f2('Hoang'));