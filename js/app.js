// let qwe = 'i am in the easycode';
// let res = '';

// let words = qwe.split(" ");

// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     var w = words[i][0].toUpperCase() + words[i].substr(1);
// }

// res = words.join(' ');

// console.log(words);
// console.log(w);

// for (let i = 0; i < words.length; i++) {
//     // console.log(words[i]);
//     res = words[i].join();
// }
// console.log(res);



// firstLetterCaps

// let str = 'you know nothing jon snow'; 
//    // Просто пробел ↓ хотя можно было явно записать \s ('s', от слова 'space')
// str = str.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase();});
// console.log( str );

let qaz = 'tseb eht ma i';
let newString = "";

for (let i = qaz.length -1; i >= 0; i--) {
    console.log(qaz[i]);
    newString += qaz[i];
}

let newStringw = newString.split(" ");

let newStringwe = newStringw.join("");

console.log(newStringwe);

// for (let i = qaz.length - 1; i >= 0; i--) {
//     newString += qaz[i];
// }
// console.log(newString);

// let wer = qaz.split("").reverse().join("");


let qwe = 'JavaScript is a pretty good language';

let words = qwe.split(" ");

let res = '';

console.log(words);

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

res = words.join('');
console.log(res);