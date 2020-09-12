let obj = {
    name: 'Hoang',
    run1: function(){
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

console.log(obj.run1());

// áp dung 3 cách
// .bind(object) sau function
// var that = this --> using that
// using arrow function expression
