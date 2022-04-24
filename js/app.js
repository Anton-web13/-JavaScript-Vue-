let string = 'some test string';

let value;
value = string[0];
value = string[string.length - 1];
value = string[0].toUpperCase();
value = string[string.length - 1].toUpperCase();
value = string.indexOf('string');
value = string.indexOf(' ', string.indexOf('test'));
value = string.slice(5, 9);
value = string.slice(5, 9);
value = string.slice(5, -5);
let a = 20;
let b = 16;
value = '20' + '16';
value = string.concat(' ', b);
a = '20';
b = '16';
value = a.concat('', b);


console.log(value);