
// 1)------------------------------------------------------------------
let paragraph = document.querySelector('p').textContent;
console.log(paragraph);


// 2)------------------------------------------------------------------
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


// 3)------------------------------------------------------------------
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


// 4)------------------------------------------------------------------
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


// 5.1)------------------------------------------------------------------
console.clear();


let ulData = document.querySelector('ul');
let liData = Array.from(ulData.querySelectorAll('li'));
console.log(liData);


for (let key in liData) {
    console.log(liData[key]);
    liData[key].classList.add('list');

}

console.log(ulData);


// 5.2)------------------------------------------------------------------
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



// 5.3)------------------------------------------------------------------
console.clear();


let ulDataUl = document.querySelector('ul');
let liDataLi = Array.from(ulData.querySelectorAll('li'));
console.log(liDataLi);

for(let i = 0; i < liDataLi.length; i+=2) {
    console.log(liDataLi[i]);
    liDataLi[i].classList.add('item')
}


// 5.4)------------------------------------------------------------------
console.clear();

var linkA = Array.from(document.querySelectorAll('a'));
console.log(linkA);

for (let key in linkA) {
    linkA[key].classList.add('custom-link');
}

console.log(linkA);


// 6)------------------------------------------------------------------
console.clear();

// let divs = document.querySelector('div');

let domElemen = document.querySelector('ul');
console.log(domElemen);

let createElement = document.createElement('li');
createElement.classList.add('new-item');
createElement.textContent = 'item';

domElemen.appendChild(createElement);
console.log(domElemen); 

let li = Array.from(domElemen.querySelectorAll('li'));
console.log(li);

for (let key in li) {
    li[key].classList.remove('list', 'item');
}

console.log(li);
console.log(domElemen);

let conter = 0;
let textContent = '';
for (let i = 0; i < li.length; i++) {
    conter++
    textContent = li[i].textContent;
    li[i].textContent = `${textContent} ${conter}`;
    console.log(li[i]);
}

