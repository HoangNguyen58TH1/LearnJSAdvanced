function run(...number) {
    // console.log(a);
    // console.log(b);
    // 1. arguments
    //array-like object
    console.log(arguments);
    const arr = Array.from(arguments);
    console.log(arr);

    // 2. rest
    console.log(number);

    let sum = number.reduce(function (sum, number) {
        return sum + number;
    }, 0);
    console.log(sum);
}

run(1, 2, 3, 4, 5)