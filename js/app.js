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

console.log(div.parentElement);         // ссылка на родителя для этого div

console.clear();

const link = div.querySelector('.link');

// console.log(link.parentElement);        // прямой родитель
// console.log(link.closest('.content')); // ближайший родитель с указаным селектором


div.classList.add('article', 'custom');
div.classList.remove('article');
// console.log(div.classList);
// console.log(div.classList.contains('custom'));
// console.log(div.classList.toggle("toggle"));
// console.log(div.classList);
// console.log(div.classList.toggle("toggle"));
// console.dir(link);
// console.log(link.href);                             // найти адрес ссылки


div.setAttribute('id', 'myId');                        // добавление аттрибутов
console.dir(div);
console.dir(div.id);

console.log(div.getAttribute('id'));                   // получение аттрибутов

// console.log(div.hasAttribute('id'));                   // true or false

div.removeAttribute('id');                // удаление аттрибутов
console.dir(div);

console.dir(div.dataset);
console.dir(div.dataset.myattr);          // myCustom value

div.dataset.myattr = 'my a';
console.dir(div.dataset);

console.log(div.getAttribute('data-myattr'));      // получение аттрибутов




