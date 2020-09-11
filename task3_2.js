// function f1(){
//     return this;
// }
// // f1();
// console.log(f1());
// // console.log(this);
// // console.log(typeof this);
// // console.log(f1 === {});


// function f1(){
//     return this;
//   }

//   f1() === window; // global object ---> true


function f2() {
    "use strict"; // see strict mode
    return this;
}

console.log(f2() === undefined);