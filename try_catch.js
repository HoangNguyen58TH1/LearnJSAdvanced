// run code stay "try", if error then return "catch" right away.
try {
    f1();
}
//run when "try" error.
catch(error){
    console.log('error');
    console.log(error);
}
//always run code "finally".
finally{
    console.log('Always execute');
}

function f1(){
    console.log('F1 running ...');
    console.log(name);
}

