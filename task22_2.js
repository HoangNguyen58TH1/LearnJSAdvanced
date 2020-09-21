function waitAndRun(func, ms) {
    setTimeout(func, ms);
}

function run() {
    console.log('Runing...');
    return function(){
        console.log('Runing... 2');
    }
}

waitAndRun(run(), 1000);
// console.log(run);
// console.log(run());