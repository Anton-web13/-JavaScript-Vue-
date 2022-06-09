const car = {
    brand: 'Audi',
    year: 2019,
    get age(){
        return `Машина выпущена в ${this.year}`;
    },
    set age(value) {
        this.year = value;
    }
};

// console.log(car)

// Object.defineProperty(car, 'age', {
//     // configurable: false,       //  если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
//     // enumerable: false,         //  если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//     // writable: false,           //  если true, свойство можно изменить, иначе оно только для чтения.
//     get: function() {
//         return `Мышина выпущена в ${this.year}`;
//     }
// });


// console.log(car);


// Object.defineProperty(window, 'globaVarewer', {
//     set: function(val) {
//         console.log(val);
//         debugger;
//     }
// })


// Object.defineProperty(window, 'globaVar', { 
//     set: function (value){ 
//         debugger; 
//     } 
// });

// function foo() {
//    globaVar = 10;
// }

// foo();


















// var user = {};

// Object.defineProperty(user, 'name', {
//     value: 'Anton',
//     configurable: false,
//     writable: false
// })
// // user.name = 'Bob';

// console.log(user)

// // globaVarewer = 10;


// function fwwwwwoo() {
//     globaVarewer = 10;
// }

// fwwwwwoo();
 



// var user = {
//     name: "Вася",
//     toString: function() { 
//         return this.name; 
//     }
// };


// for(let key in user) console.log(`Name: ${key}`);  // name, toString


// Object.defineProperty(user, 'toString', {
//     enumerable: false
// })

// for(let key in user) console.log(`Name: ${key}`);  // name








// var user = {
//     // firstName: "Вася",
//     // surname: "Петров"
// }

// Object.defineProperty(user, 'fullName', {
//     // get: function() {
//     //     return this.firstName + ' ' + this.surname;
//     // },
//     // value: "Петя Иванов",
//     get: function() {
//         // this.firstName = 'Anton';
//         // this.surname = 'Padluzhny';
//         return this.firstName + ' ' + this.surname;
//     },
//     set: function(value) {
//         console.log(value);
        // var split = value.split(' ');
        // this.firstName = split[0];
        // this.surname = split[1];
//     }
// });

// // console.log(user.fullName);

// user.fullName = "Петя Иванов";
// console.log(user.firstName);
// console.log(user.surname);







var user = {
    firstName: "Вася",
    surname: "Петров",

    get fullName() {
        return this.firstName + ' ' + this.surname;
    },

    set fullName(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
}

console.log(user.fullName);

user.fullName = "Петя Иванов";

console.log(user.firstName);
console.log(user.surname);








// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     return `${this.name}, ${this.age}`
// }

// console.log(User("Петя", 25));







// function User(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   var pete = new User("Петя", 25);      // nur durch new neue Funktion erzustellen
  
//   console.log(pete.age); // 25







// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, 'age', {
//         get: function() {
//             var today = new Date();
//             var yearDelta = today.getFullYear() - this.birthday.getFullYear();


//             if (today.getMonth() > this.birthday.getMonth() ||
//                 (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate())) {
//                 return yearDelta;
//             }

//         return yearDelta - 1;

//         }
//     });
// }


// var pete = new User("Петя", new Date(1987, 6, 1));

// console.log( pete.birthday ); // и дата рождения доступна
// console.log( pete.age );      // и возраст
// console.log( pete );      // и возраст




// var today = new Date();
// var birthday = new Date(1987, 6, 1);
// var yearDeltaw = today.getFullYear() - birthday.getFullYear();
// console.log( today.getFullYear()  ); 
// console.log( birthday.getFullYear()  ); 

// console.log( yearDeltaw );  







// var user = {}

// Object.defineProperties(user, {
//   firstName: {
//     value: "Петя"
//   },

//   surname: {
//     value: "Иванов"
//   },

//   fullName: {
//     get: function() {
//       return this.firstName + ' ' + this.surname;
//     }
//   }
// });

// console.log( user.fullName ); // Петя Иванов






// var obj = {
//     a: 1,
//     b: 2,
//     internal: 3
//   };
  
//   Object.defineProperty(obj, "internal", {
//     enumerable: false
//   });
  
//   console.log( Object.keys(obj) ); // a,b
//   console.log( Object.getOwnPropertyNames(obj) ); // a, b, internal







///////////////////////////////////////////////////  1)
console.clear();


// // function User(fullName) {
// //     console.log(this.fullName = fullName);
// // }

// // var vasya = new User("Василий Попкин");



function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },

            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },

        lastName: {
            get: function() {
                return this.fullName.split(' ')[1];
            },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }
    })
}


var vasya = new User("Василий Попкин");

// vasya.lastName = 'Сидоров';

console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин