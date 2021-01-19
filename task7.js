// //array-like object: obj
// let obj = {
//     0: 'Hoang',
//     1: 'Nguyen',
//     2: 'Van',
//     lenght: 3
// }

// // console.log(obj.lenght);
// // console.log(obj[lenght]);
// // console.log(obj);
// // console.log(obj[3]);

// for (let i = 0; i < obj.lenght; i++) {
//     console.log(obj[i]);
// }

function sum() {
    console.log(arguments);
    // console.log(arguments.length);
    // console.log(typeof arguments);

    // let result = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     // const element = arguments[i];
    //     result += arguments[i];
    // }
    // console.log(result);


    const arr = Array.from(arguments);
    console.log(arr);
    // let result = arr.reduce(function(sum, number){
    //     return sum + number;
    // }, 0)

    let sum = 0;
    arr.map(function (number) {
        return sum += number;
    })
    console.log(sum);


}
// console.log(sum(1,4,30));
sum(1, 4, 30, 20, 50);