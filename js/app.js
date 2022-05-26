// let numbers = [1,2,3,4,5,6];
// function isEven(x){ 
//   return x % 2 === 0; 
// }
// let evenNumbers = numbers.filter(isEven);
// //2 4 6

// console.log(evenNumbers);
// console.log(numbers);



// let numbers = [1,2,3,4,5,6];
// function double(x){
//   return x*2;
// }
// let doubleNumbers = numbers.map(double);
// //2 4 6 8 10 12
// console.log(doubleNumbers);



// let numbers = [1,2,3,4,5,6];
// function sum(total, value){
//   return total + value;
// }
// let total = numbers.reduce(sum, 0); 
// //21
// console.log(total);



// function doWithLoading(fn){
//     console.log("начало загрузки");
//     let returnValue = fn();
//     console.log("конец загрузки");
//     return returnValue;
//   }
//   function process() {
//    console.log("загружаем...");
//   }
//   doWithLoading(process);
//   // начало загрузки
//   // загружаем...
//   // конец загрузки



// function createGenerator(prefix){
//     let index = 0;
//     return function generateNewID(){
//       index++;
//       return prefix + index.toString();
//     }
//   }
//   let generateNewID = createGenerator("вызов номер: ");
//   console.log(generateNewID()); //вызов номер: 1
//   console.log(generateNewID()); //вызов номер: 2
//   console.log(generateNewID()); //вызов номер: 3
//   console.log(generateNewID()); //вызов номер: 4




// function once(fn){
//     let returnValue;
//     let canRun = true;
//     return function runOnce(){
//         if(canRun) {
//             returnValue = fn.apply(this, arguments);
//             canRun = false;
//         }
//         return returnValue;
//     }
// }
// function process() {};
// var processonce = once(process);
// processonce(); //process
// processonce(); //




// let log = function logMessage(message) { console.log(message); }
// console.log(log.name);   //logMessage
// console.log(log.length); //1
// console.log(log.toString());




// let user = {
//     firstName: "Вася"
//   };
  
//   function func() {
//     console.log(this.firstName);
//   }
  
//   let funcUser = func.bind(user);
//   funcUser(); // Вася



// let user = {
//     firstName: "Вася"
// };

// function func(phrase) {
//     console.log(phrase + ', ' + this.firstName);
// }

// // привязка this к user
// let funcUser = func.bind(user);
// funcUser("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)




function log(level, message){}
var logInfo = log.bind(null, "Info");
logInfo("message");





// const persons = [
//     { name: 'Peter', age: 16 },
//     { name: 'Mark', age: 18 },
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 14 },
//     { name: 'Tony', age: 24},
//   ];


// // const fullAge = [];

// // for (i = 0; i < persons.length; i++) {
// //     if (persons[i].age >= 18 ) {
// //         fullAge.push(persons[i]);
// //     }
// // }

// // const fullAge = persons.filter(i => i.age >= 18);
// const fullAge = persons.filter(i => i.name === "Mark");

// console.log(fullAge);





// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// const newArray  = [];

// for(let i = 0; i < strArray.length; i++) {
//     console.log(strArray[i].length);
//     newArray.push(strArray[i].length);
// }


// function mapForEach(arr, fn) {
//     const newArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArray.push(fn(arr[i]));
//     }
//     return newArray;
// }

// const lenArray = mapForEach(strArray, function(item){
//     return item.length;
// });

// console.log(lenArray);








// const strArray = ['my', 'name', 'is', 'Trinity'];

// function adding(arr, fn) {
//     const upperCase = [];

//     for(i = 0; i < arr.length; i++) {
//         upperCase.push(fn(arr[i]));
//     }
//     let arrayWithoutSpace = upperCase.join("");
//     return `New value: ${arrayWithoutSpace}`;
// }

// // const addingArray = adding(strArray, function(item) {
// //     let big = item.split("");
// //     let first = big[0].toUpperCase();
// //     let rest = [...big];
// //     rest.splice(0, 1);
// //     let result = [first, ...rest].join("");
// //     console.log(result);
// //     return result;
// // })

// const addingArray = adding(strArray, function(item) {
//     let result = item.charAt(0).toUpperCase() + item.slice(1);
//     return result;
// })

// console.log(addingArray);





// const strArray2 = [10, 20, 30];

// function adding(arr, fn) {
//     const upperCase = [];

//     for(i = 0; i < arr.length; i++) {
//         upperCase.push(" " + fn(arr[i]));
//     }
//     return `New value: ${upperCase}`;
// }

// const addingArray2 = adding(strArray2, function(item) {
//     let result = item * 10;
//     return result;
// })

// console.log(addingArray2);




// const strArray3 = [{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}];

// function adding(arr, fn) {
//     const upperCase = [];
//     let alter = "";

//     for(i = 0; i < arr.length; i++) {
//         alter += fn(arr[i]);
//     }
//     return `New value: ${alter}`;
// }

// const addingArray3 = adding(strArray3, function(item) {
//     let result =  ' ' + item.name + ' is ' + item.age + ',';
//     // console.log(result);
//     return result;
// })

// console.log(addingArray3);





// const strArray4 = ["abc", "123"];

// function adding(arr, fn) {
//     let alter = "";

//     for(i = 0; i < arr.length; i++) {
//         alter += fn(arr[i]);
//     }
//     return `New value: ${alter}`;
// }

// const addingArray4 = adding(strArray4, function(item) {
//     let newItem = '';
//     for(let i = item.length - 1; i >= 0; i--) {
//         newItem += item[i];
//     }
//     return newItem + ', ';
// })

// console.log(addingArray4);





// const strArray5 = [12, 4, 8, 130, 44];

// function every(arr, fn) {

//     if(!Array.isArray(arr)) {
//         return console.log('Error!');
//     }


//     for (let i = 0; i < arr.length; i++) {
//         if(!fn(arr[i], i, arr)) {
//             console.log('Not all items are valid');
//             return false;
//         } else {
//             return
//         }
//     }
 
// }

// function invertString(item, index, arr) {

//     if (item < 5) {
//         return true;
//     } else {
//         console.log(`Item ${item} with index ${index} in array ${arr} more than 5`);
//         return false;
//     }

// }

// every(strArray5, invertString);
// // console.log(every);





const strArray5 = [12, 4, 8, 1, 4];

function every(arr, fn) {

    let num = [];

    for (let i = 0; i < arr.length; i++) {
        num.push(fn(arr[i]));
        // console.log(num);
    }
    // console.log(num);
    return num;
}

function invertString(item) {
    // console.log(item);

    if (item < 5) {
        return true;
    } else {
        return false;
    }
}

let result = every(strArray5, invertString);
console.log(result);

for (i = 0; i < result.length; i++) {
    if (result[i] === false) {
        console.log('Alles ist FALSE');
        break;
    } else {
        console.log('Alles ist TRUE');
        break;
    }
}




