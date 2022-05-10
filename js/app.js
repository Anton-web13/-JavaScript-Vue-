// let qwe = 'i am in the easycode';
// let res = '';
// var w = '';

// let words = qwe.split(" ");

// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     console.log(words[i]);
// }

// res = words.join(' ');

// console.log(res);







// firstLetterCaps

// let str = 'you know nothing jon snow'; 
//    // Просто пробел ↓ хотя можно было явно записать \s ('s', от слова 'space')
// str = str.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase();});
// console.log( str );





// let qaz = 'tseb eht ma i';
// let newString = "";
// // let ert = '';

// ert = qaz.split(" ");
// console.log(ert);

// for (let i = ert.length -1; i >= 0; i--) {
//     // for (let a = ert[i].length -1; i >=0; i--) {
//     //     console.log(ert[a]);
//     // }
//     // newString += ert[i];

//     console.log(ert[i]);

//     for (let y = ert[i] -1; i >= 0; i--) {
//         console.log(y);
//     }
// }

// console.log(newString);

// let eres = newString.join();

// let rty = newString.split(" ");
// console.log(rty);


// console.log(eres);






// for (let i = qaz.length -1; i >= 0; i--) {
//     console.log(qaz[i]);
//     newString += qaz[i];
// }

// let newStringw = newString.split(" ");

// let newStringwe = newStringw.join(" ");

// console.log(newStringwe);

// for (let i = qaz.length - 1; i >= 0; i--) {
//     newString += qaz[i];
// }
// console.log(newString);





// let wer = qaz.split("").reverse().join("");







// let qwe = 'JavaScript is a pretty good language';

// let words = qwe.split(" ");

// let res = '';

// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// res = words.join('');
// console.log(res);






// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(array);

// for (let value of array) {
//     if (value % 2 != 0) {
//         console.log(value);
//     }
// }


let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

console.log(list);

for (let key in list) {
  if (typeof list[key] == 'string') {
    let ert = list[key].toUpperCase();
    console.log(ert);
  }
}