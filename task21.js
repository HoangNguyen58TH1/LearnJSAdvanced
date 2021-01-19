// let a = 1;

// function f1(param){
//     let b = 2;
//     return function(){
//         let d = 4;
//         console.log(param);
//         console.log(a);
//         console.log(b);
//         console.log(d);
//     }
// }


// console.log(f1(0)());

// let a = 1;
// if (a = 1) {
//     let b = 2;
//     console.log(a);

//     console.log(b);

//     function f1() {
//         console.log(a);
//         console.log(b);
//     }

//     f1();
// }
// console.log(a);
// console.log(b);

function init() {
    var name = 'Mozilla'; // name là biến cục bộ của hàm init
    function displayName() { // displayName() là hàm closure
        console.log(name); // sử dụng biến của hàm cha
    }
    displayName();
}
// init();
displayName();
