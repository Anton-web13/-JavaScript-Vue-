// function sayHello(firstName, lastName) {
//     if (!firstName) return console.log('Error!');
//     console.log(firstName, lastName);
//     console.log("Hello world");
//     return `Hello ${firstName} ${lastName}`;
// }

// let res = sayHello("Denis", "Mescheryakov");
// let res2 = sayHello("Dima", "Mescheryakov") + '!';
// let res3 = sayHello();

// // console.log(res);
// // console.log(res2);
// console.log(res3);




function sayHello(firstName = "Default", lastName = "Default") {
    if (!firstName) return console.log('Error!');
    console.log(firstName, lastName);
    console.log("Hello world");
    return `Hello ${firstName} ${lastName}`;
}

// let res = sayHello("Denis", "Mescheryakov");
// let res2 = sayHello("Dima", "Mescheryakov") + '!';
// let res3 = sayHello();
// let res3 = sayHello('null');

// console.log(res);
// console.log(res2);
// console.log(res3);




// let x = 10;

// function foo(x) {
//     x = 20;
//     console.log(x);
//     return x;
// }

// foo();
  
// console.log(x);




// const user = {
//     name: "Denis",
//     age: 30
// };


// function getObj(obj) {
//     // console.log(obj);
//     obj.name = "Den";
// }

// getObj(user);
// console.log(user);




const square = function(x) {
    return x * x;
};

console.log(square(8));







(function(msg) {

    function sayHello(firstName = "Default", lastName = "Default") {
        if (!firstName) return console.log('Error!');
        console.log(firstName, lastName);
        console.log("Hello world");
        return `Hello ${firstName} ${lastName}`;
    }

    // let res = sayHello("Denis", "Mescheryakov");
    // let res2 = sayHello("Dima", "Mescheryakov") + '!';
    // let res3 = sayHello();
    // let res3 = sayHello('null');

    // console.log(res);
    // console.log(res2);
    // console.log(res3);

    const square = function(x) {
        return x * x;
    };

    console.log(square(8));

})("Hello worldw");