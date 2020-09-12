// let obj = {
//     name: 'Hoang',
//     run1: function () {
//         // let that = this;
//         console.log(this);
//         let run2 = () => {
//         // let run2 = function() {
//             console.log(this);
//             // console.log(this.name);            
//         };
//         run2();
//     }
// }
// console.log(obj.run1());

// C1 - function thường thì dùng bind(object)
let obj = {
    name: 'Hoang',
    run1: function () {
        let run2 = function () {
            console.log(this.name);
        }.bind(this); //C1 - cách 1 này hay hơn nè, nhìn pro hơn. :v
        // }.bind(obj); //C2 
        run2();
    }
}
console.log(obj.run1());

// C2 - khai báo 1 biến that = this.
let obj = {
    name: 'Hoang',
    run1: function () {
        let that = this;
        let run2 = function () {
            console.log(that.name);
        }
        run2();
    }
}
console.log(obj.run1());

// C3 - dùng arrow function expression để kế thừa cái biến this đó luôn
// Vì arrow function không có context.
let obj = {
    name: 'Hoang',
    run1: function () {
        let run2 = () => {
            console.log(this.name);            
        };
        run2();
    }
}
console.log(obj.run1());