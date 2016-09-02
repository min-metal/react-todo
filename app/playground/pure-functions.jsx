var redux = require('redux');

console.log('Starting redux example');

// Pure function
function add(a, b) {
    return a + b;
}

var a = 3;
function add2(b) {
    return a + b;
}


var result;
function add3(a, b) {
    result = a + b;
    return result;
}

function add4(a, b) {
    return a + b + new Date().getSeconds();
}

function changeProp(obj) {
    return {
        ...obj,
        name: 'jen'
    };

    // still works but you are mutating data
    // obj.name = 'Jen';
    // return obj;
}

var mObj = {
    name: 'andrew',
    age: 21
};
var res = changeProp(mObj);
console.log(res, mObj);