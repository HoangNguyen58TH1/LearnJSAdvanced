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

// mouse = {
//     name: 'Mickey',
//     run: function(){
//         console.log(`${this.name}`);
//     }
// }