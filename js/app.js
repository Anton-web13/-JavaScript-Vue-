let value;

value = 1 > 2;
value = 1 <= 2;
value = 1 == 1;
value = 1 == "1";
value = 1 == true;
value = 1 === '1';
value = 1 === 1;
value = 1 != '1';
value = 1 !== '1';
value = 'a' < 'A';
value = 'a' > 'ab';
value = 'a'.charCodeAt();
value = 'A'.charCodeAt();

value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }



value = null; // false

value = "";
value = 0;

value = NaN;

value = 100;

value = null

// if (!value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }


value = [1];

// if (value.length) {
//     console.log(value);
// }

// if (value.length) {
//     console.log(value);
// } else {
//     console.log('array is empty');
// }

value = null;

// if (Array.isArray(value)) {
//     console.log(value);
// } else {
//     console.log('array is empty');
// }

// console.log(value);


let user = {
    // name: 'Denis'
    name: null
};

// if (user.hasOwnProperty('name')) { // hasOwnProperty не проверяет на значение
//   console.log(user.name);
// } else {
//   console.log('else');
// }


value = 1 || 2; // der erste true

value = 0 || 0 || null;

// let age = 10;


// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }

// let serverNickname = 'Denis';
let serverNickname = '';
let nickname = serverNickname || 'default nickname';

value = 1 && 2 && 3;

productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

value = 10;

// if (value < 10) {
//     console.log('value < 10', value);
//   } else
//     console.log('value >= 10', value);
 

if (value < 10) {
  console.log('value < 10', value);
} else if (value >= 10) {
  console.log('value >= 10', value);
} else {
  console.log('else');
}