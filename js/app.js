const user = {
    firstName: 'Denis',
    lastName: 'Mescheryakov',
    age: 25,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css']
    }
};

// let firstName = user.firstName;
// let lastName = user.lastName;

// console.log(firstName, lastName);

// let {firstName: name, lastName, age: years = 30} = user;

// console.log(firstName, lastName);
// console.log(age);
// console.log(name, firstName);
// console.log(years);



// const {info: 
//     {work, skills = ['htmls', 'csss']}
// } = user;
// console.log(skills);



// const {info: 
//     {work, skills}
// } = user;
// console.log(skills);
 
const colors = ['white', 'black', 'red', '#89432d'];
const [w, b, red, green = 'green'] = colors;
console.log(w, b, red, green);

const names = ['Denis', 'Ivan', 'Maksim'];

// const [, name2, name3] = names;
const [, , name3] = names;
console.log(name3);


// console.clear();

const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
console.log(key, value);

const [name1, ...otherNames] = names;
console.log(otherNames);

// const [...newNames] = names;
const newNames = [...names];

// console.log(newNames);                         // ['Denis', 'Ivan', 'Maksim']
console.log(...newNames);                   // Denis Ivan Maksim

const colorNames = [...colors, ...names];   // ['white', 'black', 'red', '#89432d', 'Denis', 'Ivan', 'Maksim']
// const colorNames = ['some value', ...colors, ...names];
console.log(colorNames);                    


// const newUser = { ...user };            // не полное копированиеб а копирование по ссылке вложенных объектов
const newUser = { ...user, age: 30, firstName: 'Anton' };

console.log(newUser);

// const {
//     info: {
//         skills
//     },
// } = newUser;

const {
    info: {
        skills: [html, css]
    },
} = newUser;


console.log(html, css);





// function  myPerson(obj) {
//     console.log(obj.firstName);
// }


function  myPerson({
    lastName = '&', 
    firstName = '&', 
    info: {skills} = {}
} = {}) {
    console.log(firstName, lastName, skills[0]);
}

myPerson(newUser);

// console.clear();


function foo(x, y, ...others) {
    console.log(arguments);
    console.log([].slice.call(arguments));   // [].slice - это вызов метода slice  // [1, 2]
    console.log(Array.prototype.slice.call(arguments));  // [1, 2]
    const [...arg] = arguments;
    console.log(arg);
    console.log(others);
}

foo(1, 2, 5, 6);


const numbers = [2, 3];
function foo2(x, y) {
    console.log(x, y);
}
// foo2(numbers);                         // [2, 3] undefined
// foo2(numbers[0], numbers[1]);       // 2 3
foo2(...numbers);                   // 2 3







/////////////////////////////////////////////// 1)
console.clear();


const valuesB = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];

function rest(arr) {

    const [a, ...otherArray] = arr;

    return {
        first: a,
        last: otherArray
    }
}
const res2t = rest(valuesB);

console.log(res2t);




/////////////////////////////////////////////// 2)
console.clear();


const organisation = {  
    name: 'Google', 
    info: { 
        employees: ['Vlad', 'Olga'], 
        partners: ['Microsoft', 'Facebook', 'Xing']   
    } 
};


// function getInfo(arr) {

//     const {
//         name = 'Unknown',
//         info: {
//             employees, partners: [Microsoft, Facebook, ...Xing]
//         }
//     } = arr
    
//     return `Name: ${name} \nPartners: ${Microsoft}, ${Facebook}`
// }

// console.log(getInfo(organisation));





function getInfo({name = 'Unknown', info: {partners: [partner1, partner2, ...partner3]}}) {

    console.log(partner1, partner2, partner3);
    
    return `Name: ${name} \nPartners: ${partner1}, ${partner2}`
}

console.log(getInfo(organisation));





// const user = {
//     firstName: 'Denis',
//     lastName: 'Mescheryakov',
//     age: 25,
//     info: {
//         work: 'EasyCode',
//         skills: ['html', 'css']
//     }
// };



// function  myPerson({
//     lastName = '&', 
//     firstName = '&', 
//     info: {skills} = {}
// } = {}) {
//     console.log(firstName, lastName, skills[0]);
// }

// myPerson(newUser);