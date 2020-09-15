let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};
// let f = person.getName;
// f();
// let f = person.getName;
// setTimeout(person.getName, 1000);
// console.log(f);
// console.log(typeof f);
// setTimeout(f, 1000);
setTimeout(function () {
    person.getName();
}, 1000);