// function foo() { // функция это объект
//     console.log("Hello World");
// }

// foo();

// foo.field = "Denis";
// console.log(foo.field);


// const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
// }
// console.log(newArr);


// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);


const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn){
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function namesLength(el) {
    console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, namesLength);
const result2 = mapArray(names, nameToUpperCase);

console.log(result2);

console.clear();







function greeting(firstName){
    return function(lastName){
        return `Hello, ${firstName} ${lastName}`;
    }
}

// const testGreeting = greeting('Denis');
// console.log(testGreeting);
// const fullName = testGreeting('Maks');
const fullName = greeting('Denis')('Maks');

// console.log(fullName);







// function question(job) {
//     if (job === 'developer') {
//         return function (name){
//             return `${name}, was ist JavaScript?`;
//         }
//     } else if (job === 'teacher') {
//         return function (name){
//             return `${name}, welches Fach unterichten Sie?`;
//         }
//     }
// }

function question(job) {
    const jobDictionary = {
        developer: 'was ist JavaScript?',
        teacher: 'welches Fach unterichten Sie?'
    };
    
    return function (name){
        return `${name}, ${jobDictionary[job]}`;
    }
}

const developerQuestion = question('teacher');
// console.log(developerQuestion);
// console.log(developerQuestion('Denis'));
// const developerQuestion = question('developer')('Denis');
console.log(developerQuestion('Denis'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis'));

