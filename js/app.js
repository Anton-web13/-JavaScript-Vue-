let btn_msg = document.getElementById('btn-msg');

// console.log(ulList);
// btn_msg.style.backgroundColor = 'red';
let ppp = document.querySelector('p');

// 1)--------------------------------------------------------------------------------

btn_msg.addEventListener('click', e => {
    alert(btn_msg.textContent);
});


// 2)--------------------------------------------------------------------------------

btn_msg.addEventListener('mouseover', e => {
    btn_msg.classList.add('red');

    btn_msg.addEventListener('mouseout', e => {
        btn_msg.classList.remove('red');
    })
})

// 3)--------------------------------------------------------------------------------
document.body.addEventListener('click', e => {
    console.log(`${ppp.textContent} ${e.target.tagName}`);
});


// 4)--------------------------------------------------------------------------------

let btn_generate = document.getElementById('btn-generate');

let ul = document.querySelector('ul');
let arrayLi = ul.querySelectorAll('li');
let counter = arrayLi.length;
console.log(counter);

btn_generate.addEventListener('click', e => {
    counter++;
    let liNew = document.createElement('li');
    let button = document.createElement('button');
    liNew.textContent = `Item ${counter}`;
    ul.appendChild(liNew);
    // ul.insertAdjacentElement('beforeend', button);


    // ul.addEventListener('click', e => {
    //     if (e.target.tagName === "BUTTON") {
    //         ul.removeChild(e.target);
    //         // ul.removeChild(button);
    //     }
    // })

    let ulAll = document.querySelector('ul');
    let arrayLiAll = ulAll.querySelectorAll('li');
    
    ulAll.addEventListener('click', removeElement)

    function removeElement(e) {
        for (let i = 0; i < arrayLiAll.length; i++) {
            if(e.target === arrayLiAll[i]) {
                e.target.remove();
                // arrayLiAll[i].remove();
            }
        }
    }
})






