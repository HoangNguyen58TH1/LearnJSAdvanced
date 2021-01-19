class Animals {
    constructor(name) {
        this.name = name;
    }
    eat(){
        console.log('Eating...');
    }
}

class Bird extends Animals {
    eat(){
        console.log('Eating 1 ...');
        console.log('Eating 2 ...');
        console.log('Eating 3 ...');
    }
}

let cucu = new Bird('CuCu');
console.log(cucu);
console.log(cucu.eat());