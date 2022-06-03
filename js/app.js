// const counter = { 
//     i: 0, 
//     inc: function () {
//         return ++i;
//     } 
// }
// console.log(counter.i); // 0
// counter.inc(); // 1
// const qwe = counter.inc(); // 1
// console.log(qwe);


// const counter = {
//     i: 0, 
//     inc: function () {
//         return ++i;
//     } 
// }

// console.log(counter.i);


// const counter = (function () {
//     let i = 0;
//     return function() { 
//         return ++i; 
//     }
// })();

// console.log(counter());
// // counter();


const price = (function () {
    let discount = 0, price = 0;
    
    function setDiscount(value) { 
        return discount = parseInt(value);
    }
    
    function getPriceWithDiscount() {
       const discountFromPrice = price*discount /100;
       return price - discountFromPrice;
    }

    function setPrice(value) {
        return price = value;
    }

    function getPrice() {
        return price / discount;
    }

    return {
            getPriceWithDiscount: getPriceWithDiscount,
            setDiscount: setDiscount,
            setPrice: setPrice,
            getPrice: getPrice
    };
}());

console.log(price);

console.log(price.setDiscount(10));
console.log(price.getPriceWithDiscount());
console.log(price.setPrice(5));
console.log(price.getPrice());

console.clear();



// const getCounter = (function () {
//     let counter = 0;
//     function qwer() {
//         return counter++;
//     };

//     return {
//         qwer: qwer
//     };
// }());

// // let count = getCounter();
// // console.log(count());
// // console.log(count());
// // console.log(count());
// console.log(getCounter.qwer());
// console.log(getCounter.qwer());
// console.log(getCounter.qwer());





// function getCounter() {
//     let counter = 0;
//     return function() {
//         return counter++;
//     };
// };

// let count = getCounter();
// console.log(count());
// console.log(count());
// console.log(count());


// let a = "Hello World!";
// function first(){
//     let b = 25;
//     console.log('Inside first function');
// }
// first();
// console.log('Inside global execution context');




function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
}
const pop = numberGenerator();
pop();
// console.log(pop);



function sayHello() {
    var say = function() { 
        console.log(hello); 
    }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say;
}
var sayHelloClosure = sayHello(); 
sayHelloClosure();
console.log(sayHelloClosure());

console.clear();





// var x = 10;
// const ert = (function() {
//     var b = 20;
//     var a = 20;


//     function bar(c) {
//         var d = 30;
//         return boop(x + a + b + c + d);
//     }

//     function boop(e) {
//         return e * -1;
//     }

//     // return bar;
//     return {
//         bar,
//         boop
//     };
// }());

// // var moar = foo(5); // Closure

// console.log(ert.bar(15));
// console.log(ert.boop(100));



// moar(15); 

// moar();
// let barw = bar(15);
// console.log(barw);

// console.log(moar(15));
// var moar2 = boop(5); // Closure  
// console.log(moar2(15));

console.clear();



// var x = 10;
function foo(a) {
    var b = 20;

    function bar(c) {
        var d = 30;
        return boop(x + a + b + c + d);
    }

    function boop(e) {
        return e * -1;
    }

    return bar;
}

var moar = foo(5); // Closure 
// moar(15);  
// console.log(moar(15));

// console.log(foo(5));

// var moar2 = foo(5); // Closure
// console.log(moar2(2));

// console.log(foo(5));

console.clear();



function foo(x = 10) {
  var y = x + 5;
  return console.log(y);
}
 
function bar() {
  var x = 2;
  return foo(x);
}
 
function main() {
  foo();                // Dynamic scope: 15
  bar();                // Dynamic scope: 7
  return 0;
}
main();



// var x = 10;

// function foo() {
//   var y = x + 5;
//   return console.log(y);
// }
 
// function bar() {
//   var x = 2;
//   return foo();
// }
 
// function main() {
//   foo();              // Static scope: 15;
//   bar();              // Static scope: 15;
//   return 0;
// }

// main();


console.clear();





var myVar = 100;
 
function foo(myVar = 1) {
  console.log(myVar);
}
 
foo(); // Static scope: 100; Dynamic scope: 100

(function () {
    var myVar = 30;
    foo(myVar); // Static scope: 100; Dynamic scope: 50
  })(); 

(function (www) {
  var myVar = 500;
  www(myVar); // Static scope: 100; Dynamic scope: 50
})(foo);

// Higher-order function
(function (arg) {
  var myVar = 1500;
  arg(myVar);  // Static scope: 100; Dynamic scope: 1500
}(foo));


console.clear();




// var x = 10;

// function foo() {
//     var y = 20; // free variable
//     function bar() {
//         var z = 15; // free variable
//         return x + y + z;
//     }
//     return bar;
// }

// var test = foo();

// console.log(test());

// console.clear();



// var result = [];
 
// for (let i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }

// result[0]();
// result[1]();
// result[2]();




// var result = [];
 
// for (var i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }

// result[0]();
// result[1]();
// result[2]();




// var result = [];
 
// for (var i = 0; i < 5; i++) {
//     result[i] = (function (x) {
//         console.log(x);
//         // additional enclosing context
//         return function() {
//             console.log(x);
//         }
//     })(i);
// }

// console.log(result[3]);
// result[0]();
// result[1]();
// result[2]();



function iCantThinkOfAName(num, obj) {
    // This array variable, along with the 2 parameters passed in, 
    // are 'captured' by the nested function 'doSomething'
    var array = [1, 2, 3];
    function doSomething(i) {
        console.log(i);
        num += i;
        array.push(num);
        console.log('num: ' + num);
        console.log('array: ' + array);
        console.log('obj.value: ' + obj.value);
    }
    
    return doSomething;
}

var referenceObject = {
    value: 10
};

const ttttt = iCantThinkOfAName(2, referenceObject);
// ttttt(1);

var foo = iCantThinkOfAName(2, referenceObject); // closure #1
var bar = iCantThinkOfAName(2, referenceObject); // closure #2
var bar2 = iCantThinkOfAName(2, referenceObject); // closure #2

// foo(2);
// bar(2); 

referenceObject.value++;
console.log(referenceObject);

// foo(2);
bar(2); 
bar(2); 
bar2(2); 






////////////////////////////////////////////  1)

console.clear();

// function one(a, b) {
//     return function() {
//         return a - b;
//     };
// }

// const abresult = one(10, 6);
// console.log(abresult());


function one(a = 0) {
    return function(b = 0) {
        return a - b;
    };
}


console.log(one()());



////////////////////////////////////////////  2)
console.clear();


function multiplyMaker(a) {
    let c = a;
    return function(b) {
        return c *= b;
    };
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


////////////////////////////////////////////  3)
console.clear();



const modulString = (function() {

    let str;

    function setString(value = '') { 
        if (typeof value === 'string') {
            return str = value;
        } else if (typeof value !== 'string') {
            return str = value.toString();
        }
    }

    function getString() { 
        return str;
    }


    function getStringLength() { 
        return str.length;
    }

    function getStringReverce() { 
        return str.split("").reverse().join("");
    }


    return {
        setString,
        getString,
        getStringLength,
        getStringReverce
    }

})();


// console.log(modulString.setString('Anton'));
// console.log(modulString.getString());
// console.log(modulString.getStringLength());
// console.log(modulString.getStringReverce());



////////////////////////////////////////////  4)
console.clear();



const calculator = (function() {

    let str = 15.654646;

    function setValue(value) { 
        console.log(str = value);
        return this;
    }

    function plusValue() { 
        console.log(str += 5);
        return this;
    }

    function multiplyValue() { 
        console.log(str *= 2);
        return this;
    }

    function getValue() { 
        console.log(str.toFixed(2));
    }


    return {
        setValue,
        plusValue,
        multiplyValue,
        getValue
    }

})();

calculator.getValue();


calculator.setValue(10.223333).plusValue().multiplyValue();

calculator.getValue();



// const numerator  = {
//     value: 5,
//     double: function () {
//         this.value *= 2;
//         return this;
//     },
// };

// console.log(numerator.double())








