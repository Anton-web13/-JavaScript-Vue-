const car = {
    brand: 'Audi',
    year: 2019,
    get age(){
        return `Машина выпущена в ${this.year}`;
    },
    set age(value) {
        this.year = value;
    }
};

// Object.defineProperty(car, 'age', {
//     // configurable: false,       //  если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
//     // enumerable: false,         //  если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//     // writable: false,           //  если true, свойство можно изменить, иначе оно только для чтения.
//     get: function() {
//         return `Мышина выпущена в ${this.year}`;
//     }
// });


// console.log(Object.keys(car));


Object.defineProperty(window, 'globaVar', {
    set: function(val) {
        console.log(val);
        debugger;
    }
})


function foo() {
   globaVar = 10;
}

foo();
