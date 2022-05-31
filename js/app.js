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


const obj = {
    firstName: "Denis",
    age: 30,
    getFirstName() {
        console.log(this);
    },
    // getAge: () => console.log(this),
    getAgeArrow: null,
    getAge() {
        // this.getAgeArrow = () => console.log(this);
        setTimeout(() => console.log(this))
    }
};

// obj.getFirstName();
obj.getAge();         // 1) присвоение
// obj.getAgeArrow();      // 2) выполнение
