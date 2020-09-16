// let obj = {
//     name: 'Hoang',
//     run:  function(){
//         console.log(this.name);
//     }
// }
// obj.run();

function run(name){
    console.log(`hello ${name} ${this.age}`);
}

let obj = {
    age: 22
}
run.apply(obj,['Hoang'])
// run.bind(obj);