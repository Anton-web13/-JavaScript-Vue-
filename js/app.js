const btn = document.querySelector('button');
const link = document.querySelector('a');
// console.log(link);
// console.dir(btn);
// btn.onclick = function() {           // nur einen click
//     console.log('click');
// }

// btn.onclick = function() {
//     console.log('click 2');
// }

// btn.addEventListener('click', function() {      // kann mehr click leisten
//     console.log('click');
// })

// // btn.addEventListener('click', function() {
// //     console.log('click 2');
// // })

// btn.addEventListener('click', function(e) {
//     console.log(e);
// })




// btn.addEventListener('click', (e) => {
//     console.log(this);
//     console.log(e);
// })

// function clickhandler(e) {
//     e.preventDefault();
//     console.log(this);
//     console.log('click');
// }

// link.addEventListener('click', clickhandler);

// link.removeEventListener('click', clickhandler);




// let href = document.querySelector('a');
// console.log(href);
// let bodyw= document.querySelector('body');
// btn.addEventListener('click', (e) => {
//     const div = document.createElement('div');
//     div.textContent = Math.random();
//     div.classList = 'container';
//     href.insertAdjacentElement('afterend', div);
//     console.log(bodyw);
// })

const container = document.querySelector('.container');

btn.addEventListener('click', (e) => {
    const div = document.createElement('div');
    const nestedBtn = document.createElement('button');
    div.textContent = Math.random();
    nestedBtn.textContent = 'button';
    div.appendChild(nestedBtn);
    container.appendChild(div);
})

container.addEventListener('click', e => {
    // console.dir(e.target);
    if (e.target.tagName === 'BUTTON') {
        console.log('Button click');
    }
})







