function run(...name) {
    console.log(arguments);
    console.log(name);
    console.log(typeof name);
    console.log('---');
    return function (age) {
        console.log(name);
        console.log(typeof name);
        console.log(`[${name}] && [${age}]`);
        // console.log(arguments);
    }
}

const f1 = run('hoang', 'nguyen', 'van');
console.log(f1);
f1(22);

// - closure là gì ?
// - là 1 function(function inner) nằm trong 1 function khác( fucntion outer) và nó truy các biến cục bộ của chính nó, biến cục bộ function outer và biến toàn cục. Ngoài ra nó còn truy cập các param của function outer. Nhưng k truy cập được biến default arguments.