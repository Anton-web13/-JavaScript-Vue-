let value;
value = 0.6+0.7;
// value = parseFloat(value.toFixed(1));
value = (0.6*10 + 0.7*10)/10;


// Math

value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.4);
value = Math.floor(2.4);
value = Math.min(2, 15, 1, 45);

value = Math.floor(Math.random() * 10 + 1);

const arr = ["black", 'red', 'yellow', 'pink', 'white', 'blue', 'orange'];
value = Math.floor(Math.random() * arr.length);


console.log(value, arr[value]);  