let a = 1;
let b = 0;


// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

// выражение ? если true : если false;
// выражение ? если true : выражение ? если true : если false;
// let c = a > 0 ? b = a : b += 1;
// b = a > 0 ? b = a : b += 1;

b =  a > 0 ? 2 : a < 0 ? 3 : 0;

// console.log(`b: ${b}`);

let color = 'yellow';

// switch(color) {
//     case 'yellow':
//         console.log('Color is yellow');
//         break;
//     case 'red': 
//         console.log('Color is red'); 
//         break;
//     default:
//         console.log('Default');
// }

switch(color) {
    case 'yellow':
    case 'red': 
        console.log('Color is red || yellow'); 
        break;
    default:
        console.log('Default');
}