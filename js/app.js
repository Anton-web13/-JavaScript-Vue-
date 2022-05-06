// let a = 0 || 'string';
// let a = 1 && 'string';
// let a = null || 25;
// let a = null && 25;
// let a = null || 0 || 35;
// let a = null && 0 && 35;

// let a = 12 + 14 + '12';
// let a = 3 + 2 - '1';
// let a = '3' + 2 - 1;
// let a = true + 2;
// let a = +'10' + 1;
// let a = undefined + 2;
// let a = null + 5;
// let a = true + undefined;

// let aaaa = 2;

// if (aaaa == 'hidden') {
//     aaaa = 'visible';
// } else {
//     aaaa = 'hidden';
// }

// if (aaaa == 1) {
//     aaaa = 0;
// } else if (aaaa < 0) {
//     aaaa = 'less then zero';
// } else if (aaaa > 0) {
//     aaaa*= 10;
// }

// let car = {
//     name: 'Lexus', 
//     age: 10, 
//     create: 2008, 
//     needRepair: false
// }

// if (car.age > 5) {
//     console.log('Need Repair');
//     car.needRepair = true;
// } else
//     car.needRepair = false;

// let item = { 
//     name: 'Intel core i7', 
//     price: '100$', 
//     discount: '15%' 
// }

// if (item.discount && item.discount !== NaN && item.price !== NaN) {
//     item.priceWithDiscount = parseInt('100$') - ((parseInt('100$') * parseInt('15%')) / 100);
//     console.log(item.priceWithDiscount);
// }

let product = {
    name: 'Яблоко',
    price: '100$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}


console.log(product);