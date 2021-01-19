function run(){
    console.log('Runing...');
}
run();
console.log(run);
console.log(typeof run);

run.language = 'Vietnamese';
console.log(run);
console.log(typeof run);

run.f1 = function(){
    console.log('f1...');
}
console.log(run);
console.log(typeof run);
run();
run.f1();
// run().f1();