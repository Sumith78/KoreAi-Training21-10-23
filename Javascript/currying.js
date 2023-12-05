//currying is the technique to transform a function of argument n, to n functions of one or few arguments.

// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// console.log(add(3)(4));


function multiply(a,b){
    return a*b;
}

function currying(fn){
    return function(a){
        return function(b){
            return fn(a,b);
        }
    }
}

var curriedMultiply=currying(multiply);
console.log(multiply(3)(4));
console.log(curriedMultiply(4)(3))