let value;

// Number to string

value = 10;
console.log(value);
console.log(typeof value);

value = String(40+10);
value = (40).toString();
console.log(value);
console.log(typeof value);

console.clear();

// value - String(10);

// value = String(10);
// value = String(10+40);
// value = (40).toString();

// Boolean to string

value = String(null);

// Array to string

value = String([1, 2, 3]);
value = String({name: "Denis"});

value = 30 + '' + 30;
value = 30 - 'dfg';
value = 30 - '5';
value = true + 10;

// String to number

value = Number('23');
value = Number(true);
value = Number(false);
value = Number(null);
value = Number('false');
value = Number([1, 2, 3]);

value = parseInt('200zsfrzsrf');
value = parseInt('200');
value = parseFloat('200.12chgjchg');

// Boolean

value = Boolean('sdfsdf');
value = Boolean('');
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);


console.log(value);
console.log(typeof value);