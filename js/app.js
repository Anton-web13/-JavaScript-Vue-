// function foo(x) {
//     console.log(x);
//     console.log(arguments);

//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// foo(11, "some string", [1, 2, 3]);





// Функции. Возвращаемое значение. Return.

function foo() {
    let a = 5; 
    return a * 2;
}

let result = foo();

console.log(result);