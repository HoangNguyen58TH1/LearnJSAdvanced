// class Animals {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log('Eating');
//     }
// }

// class Bird extends Animals {
//     fly(){
//         console.log('Flying');
//     }
// }

// class Parrot extends Bird {
//     speak(){
//         console.log('Speaking');
//     }
// }

function Animals(name){
    this.name = name;
}
Animals.prototype.eat = function(){
    console.log('Eating...');
}

function Bird(){
    Animals.apply(this, arguments);
}
Bird.prototype = new Animals;
Bird.prototype.fly = function(){
    console.log('Flying');
}


const somethings = new Bird('Heo');
console.log(somethings);
somethings.eat();
somethings.fly();
console.log(somethings.__proto__);

// xem lại bài prototype ở JSBasic
// xem trên gg OOP dùng prototype của JS - trước khi có ES6.
// xem lại task13.