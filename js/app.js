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
    // console.log(currency + this.price);
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




////////////////////////////////////////////////// 1)
console.clear()

const rectangle = {
    width: 10,
    height: 240,
    getSquare: function () {
        return(this.width * this.height);
    }
};

console.log(rectangle.getSquare());


////////////////////////////////////////////////// 2)
console.clear();


function getPrices() {
    console.log(this.price);
    return this;
}

function getPriceWithDiscount() {
    console.log(this.price - ((this.price * parseInt(this.discount)) / 100));
    return this;
}

const price = {
    price: 10,
    discount: '15%',
    getPrices,
    getPriceWithDiscount
};

console.log(parseInt(price.discount));

price.getPrices();
price.getPriceWithDiscount();



////////////////////////////////////////////////// 3)
console.clear();

function moreHeight() {
    console.log(this.height + 1);
    return this;
}

const hoch = {
    height: 10,
    moreHeight
};

hoch.moreHeight();


////////////////////////////////////////////////// 4)
console.clear();

const numerator  = {
    value: 5,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne:  function () {
        this.value--;
        return this;
    }
};

// numerator.double();
// numerator.plusOne();
// numerator.minusOne();

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// const newValue = numerator.double().plusOne().minusOne();
// console.log(newValue);


////////////////////////////////////////////////// 5)
console.clear();



// const product = {
//     price: 10,
//     wert: 15,
//     resultPrice: function()  {
//         return this.price * this.wert;
//         // return this;
//     }
// };

// // console.log(product.resultPrice.call(product));
// console.log(product.resultPrice());


////////////////////////////////////////////////// 6)
console.clear();


const product = {
    price: 10,
    wert: 15,
    resultPrice: function()  {
        return this.price * this.wert;
    }
};

const productOnePart = {
    price: 100,
    wert: 112,
};

console.log(product.resultPrice.call(productOnePart));


////////////////////////////////////////////////// 7)
console.clear();

let sizes = {
    width: 5, 
    height: 10
}

getSquare = function (current) {
    return current + this.width * this.height
};

// function getSquare (current) {
//     return this;
// };

console.log(getSquare.call(sizes, '$'));


////////////////////////////////////////////////// 8)
console.clear();

let element = {
    height: 25,
    getHeight: function () {
        return console.log(this.height);
    }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();
