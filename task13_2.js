class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log('Eating...');
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying..');
    }
}

class Parrot extends Bird {
    speak() {
        console.log('Speaking...');
    }
}

class Dog extends Animal {
    sure() {
        console.log('Gau gau ...');
    }
}


const something = new Parrot('Flappy');
console.log(something);
something.eat();
something.fly();
something.speak();
// something.sure();