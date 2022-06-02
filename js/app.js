function getFullName(firstName, lastName) {
    // console.log(firstName, lastName);
    return function() {
        return `${firstName} ${lastName}`;
    }
}


const getname = getFullName('Denis', 'Mescheryakov');

// console.log(getname);            // ƒ () {
                                    //     return `${firstName} ${lastName}`;
                                    // }

// console.log(getname());             // Denis Mescheryakov

// getFullName();


function updateValue(val = 0) {
    let x = val;
    return function(num = 0) {
        return (x += num);
    };
}

const updtVal = updateValue(2);
const updtVal2 = updateValue(4);

// console.log(updtVal(1));
// console.log(updtVal(0));
// console.log(updtVal2(2));
// console.log(updtVal2(0));






function checkCred() {
    const login = 'test';
    const password = 'somePassword';

    return {
        checkLogin(value) {
            return login === value
        },
        checkPassword(value) {
            return password === value
        }
    }
}

const chek = checkCred();
// console.log(chek);              // {checkLogin: ƒ, checkPassword: ƒ}

// console.log(chek.checkLogin); 
// -------------------------------
// ƒ checkLogin(value) {
//     return login === value
// }
// -------------------------------

console.log(chek); 
console.log(chek.checkLogin('dghdfthdrth'));   // false
console.log(chek.checkLogin('test'));          // true


console.clear();






// function closureExample() {
//     const arrOfFunc = [];
//     let value = '';

//     for (let i = 0; i < 10; i++) {
//         value += i;
//         // console.log(value);
//         arrOfFunc.push(function() {
//             console.log(value, i);
//         });
//     };
//     console.log(arrOfFunc);
// }

// closureExample();


// function closureExample() {
//     const arrOfFunc = [];
//     let value = '';

//     for (let i = 0; i < 10; i++) {
//         value += i;
//         // console.log(value);
//         arrOfFunc.push(function() {
//             console.log(value, i);
//         });
//     };
//     return arrOfFunc;
// }

// const res = closureExample();
// res[0]();                               // 0123456789 0
// res[5]();                               // 0123456789 5



function closureExample() {
    console.log(i);         // здесь сохраняется значение i после выполенения циклаб если стоит VAR
    const arrOfFunc = [];
    let value = '';

    for (var i = 0; i < 10; i++) {
        value += i;
        // console.log(value);
        arrOfFunc.push(function() {
            console.log(value, i);
        });
    };
    return arrOfFunc;
}

const res = closureExample();
res[0]();                                 // 0123456789 10
res[5]();                                 // 0123456789 10

// console.log(res);





