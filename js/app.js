const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.dir(h1);
console.log(titles);

// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));    // sehr alt
// console.log([...titles]);


console.log(div);
console.log(div.nextSibling);          // следующий узел после div (здесь это текст)
console.log(div.nextElementSibling);   // следующий элемень(тэг) после div
console.log(div.firstChild);           // первый текстовый узел в div
console.log(div.firstElementChild);    // первый дочерний элемент в div (это ссылка)

// const element = document.body.firstChild;   // #text
// const element = document.body.firstChild.nextSibling;   // <!-- my comment -->
// const element = document.body;   // целый документ в body
// const element = document.links;   // все ссылки на странице
const element = document.forms;   // все формы на странице

console.clear();

console.log(element);
console.log(window);
console.log(navigator);
console.log(location);

