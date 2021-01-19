// function sum(){
//     const arr = Array.from(arguments);
//     return arr.reduce((sum, number) => sum + number, 0);
// }
// function average(){
//     let x = sum.apply(null, arguments);
//     return x/arguments.length;
// }
// console.log(average(1,2,3,4,5));


function sum(){
    console.log(arr);
    return arr.reduce((sum, number) => sum + number, 0);
}
function average(){
    console.log(arguments);
    var arr = Array.from(arguments);
    console.log(arr);
    let x = sum.apply(null, arr);
    // return x/arguments.length;
}
console.log(average(1,2,3,4,5));