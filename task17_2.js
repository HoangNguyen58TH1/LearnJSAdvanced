// function run(...number) {
//     return number.reduce((sum, number) => sum + number);
// }
// console.log(run(1, 2, 3, 4, 5));

function concat(separator, ...arr){
    return arr.join(separator);
}

console.log(concat('.', 'a', 'b', 'c'));