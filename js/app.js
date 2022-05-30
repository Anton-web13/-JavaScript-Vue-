function getThis() {
    console.log(this);
}

// getThis();
// window.getThis();

// console.log(window.getThis);


function getPrice() {
    console.log(this.price);
    // console.log(currency + this.price);
    return this;
}

function getPrice(currency = '$') {
    console.log(currency + this.price);
    // console.log(currency + this.price);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}


const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    // getPrice: getPrice,
    // getPrice: function () {
    //     // console.log(this);
    //     console.log(this.price);
    // },
    getName,
    // getName() {
    //     console.log(this.name);
    // },
    info: {
        information: ['2.3ghz'],
        getInfo: function() {
            console.log(this);
        }
    },
};

// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();


const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
};

prod2.getName = prod1.getName;
// prod2.getPrice();
prod2.getName();


let str = 'Hello world';
// const reversStr = str.split('').reverse().join('');
const reversStr = str
    .split('') // ['H', 'e'...]
    .reverse() // ['d', 'l'...]
      .join(''); // 'dlrow olleH'
    // .join('') // 'dlrow olleH'
    // .push('asd'); // hier kommt ein Fehler
console.log(reversStr);

// const prod3 = {
//     name: 'ARM',
//     price: 200,
//     getPrice,
//     getName
// };

console.clear();

// const prod3 = {
//     name: 'ARM',
//     price: 200,
//     // getPrice,
//     // getName
// };

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    // getName
};

getPrice.call(prod3); // prod3 ist THIS
getPrice.call(prod3, '*'); // currency = '*'
getPrice.apply(prod3, ['@']); // currency = '*'

 

// prod3
// // .getName() //undefined
// // .getPrice(); //undefined.getPrice()
// .getName() //prod3
// .getPrice(); //prod3.getPrice()

const getPriceBind = prod3.getPrice.bind(prod3, '%');
console.log(getPriceBind);
// setTimeout(getPriceBind, 1000);
setTimeout(prod3.getPrice.bind(prod3, '%'), 1000);
