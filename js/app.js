const users = [
    {
      _id: "5cdce6ce338171bb473d2855",
      index: 0,
      isActive: false,
      balance: 2397.64,
      age: 39,
      name: "Lucile Finley",
      gender: "female",
      company: "ZOXY",
      email: "lucilefinley@zoxy.com",
      phone: "+1 (842) 566-3328",
      registered: "2015-07-12T09:39:03 -03:00"
    },
    {
      _id: "5cdce6ce0aa8d071fa4f4cc5",
      index: 1,
      isActive: true,
      balance: 2608.48,
      age: 33,
      name: "Woodward Grimes",
      gender: "male",
      company: "FORTEAN",
      email: "woodwardgrimes@fortean.com",
      phone: "+1 (960) 436-3138",
      registered: "2014-09-08T03:24:39 -03:00"
    },
    {
      _id: "5cdce6ce103de120d32d6fe4",
      index: 2,
      isActive: true,
      balance: 1699.99,
      age: 25,
      name: "Robinson Coleman",
      gender: "male",
      company: "GENMOM",
      email: "robinsoncoleman@genmom.com",
      phone: "+1 (852) 543-3171",
      registered: "2019-04-23T08:24:58 -03:00"
    },
    {
      _id: "5cdce6cebada7a418d8ccb3d",
      index: 3,
      isActive: true,
      balance: 2621.84,
      age: 25,
      name: "Austin Benton",
      gender: "male",
      company: "ZILIDIUM",
      email: "austinbenton@zilidium.com",
      phone: "+1 (977) 573-2627",
      registered: "2016-08-02T10:08:24 -03:00"
    },
    {
      _id: "5cdce6ced81fe99596d9cef5",
      index: 4,
      isActive: true,
      balance: 1297.31,
      age: 37,
      name: "Casandra Stout",
      gender: "female",
      company: "ANACHO",
      email: "casandrastout@anacho.com",
      phone: "+1 (929) 465-3804",
      registered: "2018-04-14T11:27:26 -03:00"
    },
    {
      _id: "5cdce6ce6c3ae6c4d6f39e88",
      index: 5,
      isActive: false,
      balance: 2165.49,
      age: 20,
      name: "Valencia Carrillo",
      gender: "male",
      company: "XEREX",
      email: "valenciacarrillo@xerex.com",
      phone: "+1 (977) 522-3378",
      registered: "2014-02-14T11:45:27 -02:00"
    }
];

// forEach
// filter       фильтрует и возвращает новый массив
// map          возвращает новый массив из колбэка
// reduce       
// some/every   проверка на соответствие
// sort         сортировка
// find         поиск



///////////////////////////////////////////////////////// forEach

// users.forEach((user) => {
//     console.log(user)
// })

users.forEach((user, i, arr) => {
    console.log(user, i, arr)
})






///////////////////////////////////////////////////////// filter
console.clear();

// const userLess30 = users.filter((user, i, arr) => {})

// const userLess30 = users.filter((user) => {
//     return user.age < 30;
// });

// const userLess30 = users.filter((user) => user.age < 30);
// const userLess30 = users.filter((user) => user.isActive);
const userLess30 = users.filter((user) => !user.isActive);
console.log(userLess30);





///////////////////////////////////////////////////////// map
console.clear();

// const usersName  = users.map((user, i, arr) => console.log(user, i, arr));
// const usersName  = users.map(user => user.name);
const usersName  = users.map(user => ({name: user.name, age: user.age}));

console.log(usersName);





///////////////////////////////////////////////////////// reduce
console.clear();

// const totalBalance = users.reduce((acc, user, i, arr) => {
//     console.log(acc, user, i, arr);
// }, 0);  

// const totalBalance = users.reduce((acc, user) => {
//     console.log(acc);
//     return acc += user.balance;
// }, 0); 
// acc - результат предыдущей итерации

const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0); 
// console.log(totalBalance);
const usersObj = users.reduce((acc, user) => {     // из массива создаем объект
    acc[user._id] = user;
    return acc;
}, {});
console.log(usersObj);






///////////////////////////////////////////////////////// some/every
console.clear();

// const isMale = users.some((user, i, arr) => {});

const isMale = users.some(user => user.gender === 'male');  //  хоть один - тогда true or false
const isAllMale  = users.every(user => user.gender === 'male');  // для каждого элемента
const isAll18 = users.every(user => user.age > 18);   // true
console.log(isAll18);







///////////////////////////////////////////////////////// find
console.clear();

// const user = users.find((user, i, arr) => {});
const user = users.find(user => user.name === 'Valencia Carrillo');
console.log(user);








///////////////////////////////////////////////////////// Sort
console.clear();

// изменяет массив
// сортирует как строки

const strArr = ["Denis", "Bill", "Anna"];
console.log(strArr);                            // ['Denis', 'Bill', 'Anna']
strArr.sort();
console.log(strArr);                            // ['Anna', 'Bill', 'Denis']

const numArr = [10, 7, 44, 32];
numArr.sort();
// console.log(numArr);                          // [10, 32, 44, 7]

// numArr.sort((prev, next) => {
//     console.log(prev, next);                     // [10, 32, 44, 7]
// });

// console.log(numArr); 


// numArr.sort((prev, next) => prev - next);       // [7, 10, 32, 44]
// numArr.sort((prev, next) => prev + next);       //  [10, 32, 44, 7]

// console.log(numArr); 

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);   // сортировка объектов
console.log(users); 







//////////////////////////// 1)
console.clear();



const arrValue = [1,2,3,5,8,9,10];

const userId = arrValue.map(user => {

    if (user % 2 === 0) {
        return ({digit: user, odd: true});
    } else {
        return ({digit: user, odd: false});
    }
});

console.log(userId);




//////////////////////////// 2)
console.clear();

const arrValue2 = [12, 4, 50, 1, 0, 18, 40];

const userNull = arrValue2.some(user => user === 0);

console.log(userNull);




//////////////////////////// 3)
console.clear();

const arrValue3 = ['yes', 'hello', 'no', 'easycode', 'what'];

const checkOver = arrValue3.every(user => user.length > 3);

console.log(checkOver);






//////////////////////////// 4)
console.clear();

const arrayBuchstaben = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// console.log(arrayBuchstaben);

let sortArray = arrayBuchstaben.sort((previous, next) => previous.index - next.index);

console.log(sortArray);

let builStringe = sortArray.reduce((prev, next) => prev.concat(next.char), ' ');

console.log(builStringe);






//////////////////////////// 5)
console.clear();



const arrayLength = [[14, 45], [1], ['a', 'c', 'd']] 
// console.log(arrayLength);

arrayLength.sort((prev, next) => prev.length - next.length);
// arrayLength.sort();
console.log(arrayLength);





//////////////////////////// 6)
console.clear();


const arrayCpu = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

// arrayCpu.sort((prev, next) => {
//     return prev.info.cores - next.info.cores;
// });

// arrayCpu.sort((prev, next) => {
//     if(prev.info.cores < next.info.cores) {
//         return -1;
//     } else {
//         return 1;
//     }
// })

// arrayCpu.sort((prev, next) => {
//     if(prev.info.сache < next.info.сache) {
//         return -1;
//     } else {
//         return 1;
//     }
// })

// arrayCpu.sort((prev, next) => {
//     let nameA = prev.cpu, nameB = next.cpu;
    
//     if(nameA < nameB) {
//         return -1;
//     } else {
//         return 1;
//     }
// })

arrayCpu.sort((prev, next) => prev.info.cores - next.info.cores);

// arrayCpu.sort((prev, next) => {
//     if (prev.cpu < next.cpu) {
//         return -1;
//     } else {
//         return 1;
//     }
// });

console.log(arrayCpu);





//////////////////////////// 7)
console.clear();

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

// console.log(products);


// let filterCollection = products.filter((prod) => {
//     return prod;
// });

// console.log(filterCollection);
// const earilter = products.filter((prod) => {
//     if (prod.price >= 15 && prod.price <= 30) {
//         return prod;
//     }
// })

function filterCollection(product, a, b) {
    let lala = product.filter((prod) => {
        if (prod.price >= a && prod.price <= b) {
            return prod;
        }
    })
    console.log(lala);
    let blabla = lala.sort((previos, next) => {
        if (previos.price < next.price) {
            return -1;
        } else {
            return 1;
        }
    });
    return blabla;
}

const earilter = filterCollection(products, 15, 30);

console.log(earilter);




// function question(job) {
//     const jobDictionary = {
//         developer: 'was ist JavaScript?',
//         teacher: 'welches Fach unterichten Sie?'
//     };
    
//     return function (name){
//         return `${name}, ${jobDictionary[job]}`;
//     }
// }
// const developerQuestion = question('teacher');
// console.log(developerQuestion('Denis'));