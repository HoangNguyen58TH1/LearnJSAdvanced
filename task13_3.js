// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log('Eating...');
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log('Flying..');
//     }
// }

function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log('Eating...');
}
// Animal.prototype.sleep = function () {
//     console.log('Sleeping...');
// }
// Animal.prototype.ia = function () {
//     console.log('Ia...');
// }
Animal.prototype.height = 0;

function Bird(name) {
    Animal.apply(this, arguments);
    // console.log(this);
    // console.log(arguments);
}
Bird.prototype = new Animal();

// Bird.prototype.fly = function(){
//     console.log('Flying...');
// }

const something = new Bird('Flappy');
console.log(something);
something.eat();
// something.fly();
// something.sleep();

// let vd = new Animal('something');
// console.log(vd);
// console.log(vd.__proto__);