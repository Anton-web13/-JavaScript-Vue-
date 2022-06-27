// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) ); // 8



// рекурсия
let t = 0;

function f1() {
    t++;
    console.log(t);
    if (t === 100) return;
    f1();
}
//   f1();








// цикл
function f2() {
    let out = '';
    for(let i = 1; i <= 30; i++) {
        out += i + ' ';
    }
    console.log(out);
}

// f2();

// рекурсия
let i = 0;
let out = '';
function f3() {
    i++;
    out += i + ' ';
    if (i >= 30) return;
    f3();
}
// f3();
// console.log(out);








// рекурсия
function randomInteger(min, max) {
    let rand = min = Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// randomInteger(2, 4);
// console.log(randomInteger(2, 4));


let s1 = 0;
function moneyRecursion() {
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    s1 += m;
    console.log('sum: ' + s1);
    if (s1 >= 300) return;
    moneyRecursion();
}
// moneyRecursion();

// цикл
function moneyCycle() {
    let s2 = 0;
    // for(let i = 0; true; i++) {
    //     let m = randomInteger(0, 100);
    //     console.log('add: ' + m);
    //     s2 += m;
    //     console.log('sum: ' + s2);
    //     if (s2 >= 300) return;
    // }

    while(true) {
        let m = randomInteger(0, 100);
        console.log('add: ' + m);
        s2 += m;
        console.log('sum: ' + s2);
        if (s2 >= 300) return;
    }
}
// moneyCycle();







const users = {
    'ivanov': {
        age: 25,
        parent: {
            'ivanov-a': {
                age: 45
            },
            'ivanov-b': {
                age: 43,
                parent: {
                    'sergeev-a': {
                        age: 88,
                        parent: {
                            'lionenko': {
                                age: 33,
                                parent: {
                                    'petrov': {}
                                }
                            }
                        }
                    },
                }
            }
        }
    },
    'kostenko': {
        age: 56,
        parent: {
            'ignatenko': {

            },
            'sniezko': {
                age: 45
            }
        }
    }
}

// console.log(users);


function userParentRecursion(obj) {
    if (obj.parent !== undefined) {
        for (let key in obj.parent) {
            console.log(key);
            userParentRecursion(obj.parent[key]);
        }
    }
}
// userParentRecursion(users.kostenko);


for(let key in users) {
    userParentRecursion(users[key]);
}










