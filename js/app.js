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






console.clear();

const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';    // <h1><span>text</span></h1>
// title.textContent = '<span>new text</span>';  //<h1>&lt;span&gt;new text&lt;/span&gt;</h1>

// title.appendChild('<span>appen</span>');      // kommt ein Fehler

// title.insertAdjacentHTML('beforebegin', '<h2>title h2 </h2>');
// title.insertAdjacentElement('afterbegin')



// ------------------------------------------------------------------------------------

// innerHTML удалеят ссылки на обект и с ним нет никакой уже связи на странице. Объект уже не изменить.
// Это и есть главная опасность innerHTML.
// Поэтому лучше использовать appendChild, insertAdjacentHTML и insertAdjacentElement

// ------------------------------------------------------------------------------------


// title.innerHTML = '<span>new text123</span>';
// title.innerHTML += '<span>new text123</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text456</span>';
// span.textContent = 'aesfawerfas';



// *Создание элемента

const span = document.createElement('span');
span.textContent = 'span created by createElement';
span.classList.add('myClass', 'id');
console.log(span);
// title.appendChild(span);
// title.insertAdjacentHTML('beforebegin', 'span created by createElement');
// title.insertAdjacentHTML('afterbegin', 'Span created by createElement');




// ------------------------------------------------------------------------------------
// DOM узлы (span) могуть быть только в одном месте и в одном экземпляре

title.appendChild(span);
// div.appendChild(span);

// ------------------------------------------------------------------------------------





const fragment = document.createDocumentFragment();
const colors = ['black', 'yellow', 'orange'];

colors.forEach(color => {
    const item = document.createElement('div');
    item.style.background = color;
    item.classList.add(`bg-${color}`);
    item.textContent = color;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);



// *Удаление элементов

// title.remove();
// title.parentElement.removeChild(title);








