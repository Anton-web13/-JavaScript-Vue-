const numArr = [2, 32, 1234, 54, 323];

console.log(numArr);

let value;

value = numArr.length;

// numArr.length = 0;
// numArr.length = 100;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);

value = numArr.push(100);  // hinzufügen am Ende
value = numArr.pop();  // löschen am Ende
value = numArr.unshift(111);  // hinzufügen am Anfang
value = numArr.shift();  // löschen am Anfang
value = numArr.slice(0, 2);  // ausschneiden aus dem Array
value = numArr.slice(); // die Kopie vom Array
value = numArr.splice(1, 2, "one", "two");
// value = numArr.splice(1, 0, "one", "two");
// value = numArr.splice(1, 2);
// value = numArr.reverse();
// value = numArr.concat(numArr);
value = numArr.concat(1, 2); // hinzufügen am Ende
// value = [].concat(1, 2, 3);
value = numArr.join(" ");
value = "hello world".split(" ");

console.log(value, numArr);