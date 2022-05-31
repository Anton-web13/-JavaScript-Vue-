// const plus = (x, y) => console.log(x + y);

// function plusFoo(x, y) {
//     return x + y;
// }
// const plus = (x, y) => x + y;
const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);
console.log(plusRes);

console.clear();

const withoutArgs = () => console.log('Hello world');
const singleArg = x => x * 2;
// const singleArg = (x = 1) => x * 2;
// const plusResw = singleArg(4);
// console.log(plusResw);

const moreActions = (a, b) => {
    console.log(arguments);       // not defined
    a *= 2;
    b *= 3;
    return a + b;   // return summa
}


// const returnObj = (str = '') => {
//     return {
//         value: str,
//         length: str.length
//     };
// };

const returnObj = (str = '') => ({
    value: str,
    length: str.length
});


function plusFoo(x, y) {
    console.log(arguments);   // Object
    return x + y;
}

// plusFoo(1, 2, 3, 'hello');


// const obj = {
//     firstName: "Denis",
//     age: 30,
//     getFirstName() {
//         console.log(this);
//     },
//     // getAge: () => console.log(this),
//     getAgeArrow: null,
//     getAge() {
//         // this.getAgeArrow = () => console.log(this);
//         setTimeout(() => console.log(this))
//     }
// };

// obj.getFirstName();
// obj.getAge();         // 1) присвоение
// obj.getAgeArrow();      // 2) выполнение





//////////////////////////// 1)

// function sum() {
//     const params = Array.prototype.slice.call(arguments);
//     // return params;
  
//     // if (!params.length) {
//     //     return console.log(0);
//     // } else {
//     //     return console.log(1);
//     // }

//     if (!params.length) return console.log(0);

//     // if (params.length) return console.log(1);
    
//     return params.reduce(function (prev, next) { return prev + next; });
// }
// let result = sum(1, 2, 3, 5, 8);

// console.log(result);



// const sum = (...params) => {
//     if (!params.length) return console.log(0);
//     if (params.length) return params.reduce((prev, next) => prev + next);
//     // return params.reduce((prev, next) => prev + next);
// }
// console.log(sum(1, 2, 3, 5, 8));


const sum = (...params) => {
    console.log(params);
}
sum(1, 2, 3, 5, 8);



// // let list2 = [1, 2, 3, 5, 8];
// let one = [1, 2, 3, 5, 8].reduce((prev, next) => prev + next);
// console.log(one)





// let list2 = [1, 2, 3, 5, 8];
// let one = list2.reduce((prev, next) => {
//     if (!list2.length) return 0;
//     if (list2.length) return prev + next;
// });
// console.log(one);





// console.clear();
// let list1 = sum(1, 2, 3); // [1, 2, 3]
// console.log(list1);




// let list2 = [1, 2, 3, 5, 8];
// // let initialValue = 1;
// let qwe = list2.reduce(function(prev, next) {
//     return prev + next;
// }, 1)
// console.log(qwe);





// let qwe2 = list2.reduce(function(previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// });

// console.log(qwe2);





// [0,1,2,3,4,5,6,7].sort((prev, next) => {
//     console.log(prev + next);
//     // console.log(prev);
// });





// const test = () => { 
//     const pi = Math.PI;
//     return console.log(pi * 2); 
// }

// test();
