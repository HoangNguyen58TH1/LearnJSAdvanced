let mouse1 = {
    name: 'Mickey',
    eat: function(){
        console.log(this.name + ' eating...');
    }
}

console.log(mouse1.eat()); // lúc này context mouse1

let eating = mouse1.eat; // lúc này context là global context --> undefined.
let eating = mouse1.eat.bind(mouse1); // lúc này mình bind cái function vào context là mouse1

console.log(eating);
console.log(eating());
console.log(typeof eating);