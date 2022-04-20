const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.toLocaleLowerCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('n', 10);
value = str.indexOf('my');
value = str.indexOf('!');
value = str.lastIndexOf('y');
value = str.includes('my');
value = str.includes('DENIS');

value = str.slice(5, 10);
value = str.slice(0, -3);
value = str.slice(5);
value = str.slice(0, -4);

value = str.replace('Denis', 'Anton');


console.log(value);