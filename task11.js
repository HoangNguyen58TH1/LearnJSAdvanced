// //constructor function
// function Mouse(name){
//     this.name = name;
// }
// // Mouse.prototype.run = function(){
// Mouse.prototype.run = function(){
//     console.log(`${this.name} is running`);
// }

// const mickey = new Mouse('Mickey');
// mickey.run();


//Object literals
const name = 'Hoang';
const obj = {
    name: name,
    run: function(){
        console.log(this.name);
    }
}
console.log(obj.run());

//Enhanced object literals
// tức là có cặp key-value giống nhau thì mình chỉ cần viết value thôi.
const name = 'Hoang';
const obj = {
    name,
    run(){
        console.log(this.name);
    }
}
console.log(obj.run());