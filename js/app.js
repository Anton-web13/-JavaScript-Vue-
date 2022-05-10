// let array = [1, 2 , 99];

// function multiply(array) {

//     console.log(array);

//     let res = 0;

//     if (array.length == 0) {
//         return 0;
//     } else if (array.length !== 0) {
//         res = 1;
//         for (let i = 0; i < array.length; i++) {
//             res *= array[i];
//         }
//         return console.log(res);
//     }
// }

// multiply(array);




// let string = 'test';
// let revers = '';

// function test(string) {

//     // let revers = '';

//     for (let i = string.length -1; i >= 0; i-- ) {
//         console.log(string[i]);
//         revers += string[i];
//     }
//     return console.log(revers);
// }

// test(string)







// let string1 = 'hello';

// let spliting = string1.split('');

// function getCodeStringFromText(spliting) {
//     console.log(spliting);

//     for (let i = 0; i < spliting.length; i++) {
//         // console.log(spliting[i]);
//         spliting[i] = spliting[i].charCodeAt(0);
//         console.log(spliting[i]);
//     }

//     let ret = spliting.join(' ');
//     return console.log(ret);
// }

// getCodeStringFromText(spliting);




let value = Math.round(Math.random()*10);

let myZahl = 5;


function zahl(value, myZahl) {
    console.log(value);
    if (value >= 0 && value <= 10) {

        if (value == myZahl) {
            return console.log('Вы выиграли!');
        } else 
        return console.log(`Вы не угадали! Ваше число ${myZahl} а выпало число ${value}`);
        
    } else {
        return console.log('Fehler');
    }
}

zahl(value, myZahl);