
// 1)-----------------------------------------------------------------------------------
let paragraph = document.querySelector('p').textContent;
console.log(paragraph);


// 2)-----------------------------------------------------------------------------------
let paragraphKnoten = document.querySelector('p');

function domKnoten(value) {
    let domObject = {
        nodeType: value.nodeType,
        tagName: value.tagName,
        childNodes: value.childNodes,
    }
    return domObject;
}

console.log(domKnoten(paragraphKnoten));


// 3)-----------------------------------------------------------------------------------
console.clear();
let getUL = document.querySelector('ul');
console.log(getUL);

let yyy = [];

function getTextFromUl(ul) {    

    let ull = Array.from(ul.querySelectorAll('li'));

    // for (let key in ull) {
    //     let aaa = ull[key].textContent;
    //     yyy.push(aaa);
    // }
    // return yyy;

    let retur = [...ull].map(value => value.textContent);
    return retur;

}

console.log(getTextFromUl(getUL));


// 4)-----------------------------------------------------------------------------------
console.clear();
// let paragraphKneoten = document.querySelector('p').childNodes;
// // console.log(paragraphKneoten);

// let elements = Array.from(paragraphKneoten);
// console.log(elements);

// elements.forEach(el => {
//     if (el.nodeName === '#text') {
//       el.textContent = '<p>-text-</p>';
//       }
// });


// 5.1)-----------------------------------------------------------------------------------
console.clear();


let ulData = document.querySelector('ul');
let liData = Array.from(ulData.querySelectorAll('li'));
console.log(liData);


for (let key in liData) {
    console.log(liData[key]);
    liData[key].classList.add('list');

}

console.log(ulData);


// 5.2)------------------------------------------------------------------------------------
console.clear();

var link = Array.from(document.querySelector('body').childNodes);
console.log(link);

for (let key in link) {
    if (link[key].localName  === 'a') {
        console.log(link[key]);
        link[key].id = 'link';
    }
}
console.log(link);





// var linkBody = Array.from(document.querySelector('body').childNodes);
// console.log(linkBody);
// let user = linkBody.find((user => user.localName === 'a'));

// console.log(user);



// 5.3)-----------------------------------------------------------------------------------
console.clear();


let ulDataUl = document.querySelector('ul');
let liDataLi = Array.from(ulData.querySelectorAll('li'));
console.log(liDataLi);

for(let i = 0; i < liDataLi.length; i+=2) {
    console.log(liDataLi[i]);
    liDataLi[i].classList.add('item')
}


// 5.4)-----------------------------------------------------------------------------------
console.clear();

var linkA = Array.from(document.querySelectorAll('a'));
console.log(linkA);

for (let key in linkA) {
    linkA[key].classList.add('custom-link');
}

console.log(linkA);


// 6)-----------------------------------------------------------------------------------
console.clear();

// let divs = document.querySelector('div');

// let domElemen = document.querySelector('ul');
// console.log(domElemen);

// let createElement = document.createElement('li');
// createElement.classList.add('new-item');
// createElement.textContent = 'item';

// domElemen.appendChild(createElement);
// console.log(domElemen); 

// let li = Array.from(domElemen.querySelectorAll('li'));
// console.log(li);

// for (let key in li) {
//     li[key].classList.remove('list', 'item');
// }

// console.log(li);
// console.log(domElemen);

// let conter = 0;
// let textContent = '';
// for (let i = 0; i < li.length; i++) {
//     conter++
//     textContent = li[i].textContent;
//     li[i].textContent = `${textContent} ${conter}`;
//     console.log(li[i]);
// }


let domElemen = document.querySelector('ul');
let li = Array.from(domElemen.querySelectorAll('li'));
let counter = li.length;
console.log(counter);

//--------------------------------------------------

let createElement = document.createElement('li');
createElement.classList.add('new-item');
createElement.textContent = 'item';

let createElement1 = document.createElement('li');
createElement1.classList.add('new-item');
createElement1.textContent = 'item';

let createElement2 = document.createElement('li');
createElement2.classList.add('new-item');
createElement2.textContent = 'item';

let createElement3 = document.createElement('li');
createElement3.classList.add('new-item');
createElement3.textContent = 'item';
//--------------------------------------------------

domElemen.appendChild(createElement);
domElemen.appendChild(createElement1);
domElemen.appendChild(createElement2);
domElemen.appendChild(createElement3);

//--------------------------------------------------

let liNew = Array.from(domElemen.querySelectorAll('li'));


let text = [];

for (let i = 0; i < liNew.length; i++) {
    if (liNew[i].textContent == 'item') {
        text.push(liNew[i]);
    }
}
console.log(text);

for (let key in text) {
    counter++;
    text[key].textContent = `${text[key].textContent} ${counter}`;
}


// 7)-----------------------------------------------------------------------------------
console.clear();

let textList = [];

let newLi = Array.from(domElemen.querySelectorAll('li'));
let listTag = document.getElementsByClassName('list');


// for (let i = 0; i < listTag.length; i++) {
//     if (listTag[i].classList == 'list' || listTag[i].classList == 'list item') {
//         listTag[i].innerHTML = `<strong>${listTag[i].textContent}</strong>`;

//     }
// }

// for (let i = 0; i < listTag.length; i++) {
//     if (listTag[i].classList == 'list' || listTag[i].classList == 'list item') {
//         listTag[i].innerHTML = `<strong>${listTag[i].textContent}</strong>`;
//     }
// }

let href = domElemen.querySelectorAll('a[href]');
console.log(href);


// 1) whit document.createDocumentFragment();

// for (let i = 0; i < href.length; i++) {
//     let fragment = document.createDocumentFragment();
//     span = document.createElement('span');
//     span.textContent = ' Span ';
//     fragment.appendChild(span);
//     href[i].appendChild(fragment);
//     console.log(href[i]);
// }

// 2) whit insertAdjacentHTML('beforeend', '<span> Span </span>');

for (let i = 0; i < href.length; i++) {
    href[i].insertAdjacentHTML('beforeend', '<span> Span </span>');
    console.log(href[i]);
}



// 8)-----------------------------------------------------------------------------------
console.clear();

let body = document.querySelector('body');
let divImage = document.createElement('div');

let img = document.createElement('img');
img.src = 'https://im.jigsawplanet.com/?rc=img&pid=1f68033ee28b&size=160';
img.alt = "Wetter";
divImage.appendChild(img);

body.insertAdjacentElement('afterbegin', divImage);
// body.appendChild(divImage);
console.log(img);



// 9)-----------------------------------------------------------------------------------
console.clear();

let mark = document.querySelector('mark');
mark.classList = 'green';
mark.insertAdjacentText('beforeend', '-green');
console.log(mark);


// 10)-----------------------------------------------------------------------------------
console.clear();


let anton = Array.from(domElemen.querySelectorAll('li'));

// getLi.reverse();
// console.log(getLi);

// let anton = [];
// for (let i = getLi.length - 1; i >= 0; i--) {
//     anton.push(getLi[i]);
// }
// console.log(anton);

anton.sort(function(a,b){ 
    nameA = a.textContent.toLowerCase();
    // console.log(a.textContent);
    nameB = b.textContent.toLowerCase();
    // console.log(b.textContent);

    if (nameA < nameB) //сортируем строки по возрастанию
        return -1;
    if (nameA > nameB)
        return 1;
        return 0 // Никакой сортировки
})
console.log(anton);



