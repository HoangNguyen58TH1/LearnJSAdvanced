class Animal {
    constructor() {
        this.name = name;
    }

    eat() {
        console.log('Eating...');
    }
}

class Angel {
    color(){
        console.log('This is Angel...');
    }
}

// class Bird extends Animal {
//     fly() {
//         console.log('Flying..');
//     }
// }

class Dog extends Classes([Animal, Angel]) {
    // sure(){
    //     console.log('Gau gau ...');
    // }
}

// class Parrot extends Bird {
//     speak(){
//         console.log('Speaking...');
//     }
// }

// const something = new Dog('Flappy');
const something = new Dog();
console.log(something);
something.eat();
// something.fly();
// something.speak();
// something.sure();