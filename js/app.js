let obj1 = {
    name: 'Denis',
    info: {
        skills:['html', 'css']
    }
}

let obj2 = {
    name: 'Ivan',
    age: 20,
    sity: 'Minsk'
}
// let newObj = obj1;
// let newObj = Object.assign({}, obj1);
// let newObj = Object.assign({}, obj1, obj2);
let newObj = Object.assign({}, obj2, obj1);
newObj = Object.assign({}, obj1);

console.log(newObj.info === obj1.info);
// console.log(obj1);

// console.log(newObj === obj1);
// console.log(newObj);
// console.log(newObj === obj1);

console.log(obj1.info.skills)
console.log(JSON.stringify(obj1));
// let objJson = JSON.stringify(obj1);
// console.log(objJson);

// newObj = JSON.parse(objJson);

let objJson = JSON.parse(JSON.stringify(obj1));
console.log(objJson);
console.log(objJson.info === obj1.info);

console.clear();

let keys = Object.keys(obj1);       //  только ключи
console.log(keys);

let values = Object.values(obj1);   // только значение
console.log(values);

let entries = Object.entries(obj1);   // пара ключ-значение
console.log(entries);

// let fromEntries = Object.fromEntries([['a', 'value']]);                  //  {a: 'value'}
let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']]);   //  {a: 'value', b: 'b_value'}
console.log(fromEntries);                                  

