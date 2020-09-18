//ES6
class Animals {
    static constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    static eat(){
        console.log('Eating');
    }

    sleep(){
        console.log('Sleeping');
    }

    
}


//Truoc ES6
// function Animals(){
// }

// Animals.prototype.sleep = function(){
//     console.log('Sleeping');
// }

// Animals.eat = function(){
//     console.log('Eating');
// }
//



// Animals.eat();
// Animals.sleep();

const bird = new Animals();
console.log(bird);
// bird.eat();
bird.sleep();

