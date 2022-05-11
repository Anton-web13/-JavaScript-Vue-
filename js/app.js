// function nnnn (n) {
//     let num = [];
//     for (let i = 0; i < n; i++) {
//         num[i] = i + 1;
//     }
//     return console.log(num);
// }
// nnnn(20);



// function nnnn (n) {

//     let num = [];
    
//     for (let i = n -0; i >= 1; i--) {
//         num.unshift(i);
//     }
//     return console.log(num);
// }

// nnnn(20);


// function nnnn (n) {

//     let num = [];
    
//     for (let i = 1; i <= n; i++) {

//         num.push(i);
//     }
//     return console.log(num);
// }

// nnnn(20);



// function nnnn (n) {
//     n = 3;
//     let num = [];
    
//     for (let i = 1; i <= n; i++) {

//         num.push(i);
//         num.concat(num);
//     }
//     return num;
// }

// let rew = nnnn();

// console.log(rew);

// let tyt = rew.concat(rew);
// console.log(tyt);

// let array = [1,2,3];
// let array2 = ['a','b','c'];

// function nnnn () {
//     // console.log(array);
//     console.log(arguments);
    
//     for (let i = 0; i < arguments.length; i++) {
//         // console.log(arguments[i]);
//         let nummer = arguments[i].splice(1, 2);
//         console.log(nummer);
//     }
// }

// nnnn(array, array2);



const users = [
    {name: 'Pavel', gender: 'male', age: 29},
    {name: 'Anna', gender: 'female', age: 18},
    {name: 'Fiona', gender: 'female', age: 19},
    {name: 'Julia', gender: 'female', age: 28},
    {name: 'Alex', gender: 'male', age: 23},
    {name: 'Sonya', gender: 'female', age: 17},
    {name: 'Frank', gender: 'male', age: 44},
    {name: 'John', gender: 'male', age: 49},
    {name: 'Greta', gender: 'female', age: 57}
];

function funcGetUsers(arrayUsers, key, keyValue){
    let result = [];
    for (let user of arrayUsers) {
        // console.log(arrayUsers);
        // console.log(user);
        // console.log(user[key]);
        if (user[key] === keyValue) {
            result.push(user);
        }
    }
    return result;
};

const newUser = funcGetUsers(users, 'gender', 'female');
console.log(newUser);


// const user = {
//   name: 'Denis',
//   age: 30
// };

// for (let kot in user) {
//     console.log(kot);
//     console.log(user[kot]);
// }