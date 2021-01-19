// // constructor function
// function Mouse(name) {
//     this.name = name;
// }

// Mouse.prototype.run = function () {
//     console.log(`${this.name}`);
// }

class Mouse {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name}`);
    }
}

const mouse = new Mouse('Mickey');
mouse.run();
//
// mouse2 = {
//     name: 'Mickey2',
//     run: function(){
//         console.log(`${this.name}`);
//     }
// }
// console.log(mouse2);
// console.log(typeof mouse2);
// console.log(mouse2.run());
//