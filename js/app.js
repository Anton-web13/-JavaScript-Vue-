const menu = document.querySelector('.menu');
// const li_span = document.querySelectorAll('.dropdown_item');
const li_span = document.querySelectorAll('li span');
const liClass = document.querySelectorAll('.dropdown_item');

const li_div = menu.querySelectorAll('.dropdown_menu');
const li = menu.querySelectorAll('li div');


console.log(li_span);
console.log(liClass);

// const obj = [];
// for (let key in liClass) {
//     obj.push(liClass[key].innerText);
// }
// // console.log(obj);
// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }


// li_span.forEach((e) => {
//     e.addEventListener('click', (e) => {
//         console.log(e.currentTarget);

//         for (let i = 0; i < li_div.length; i++) {
//             if (!e.target === li_div[i]) {
//                 li_div[i].classList.toggle('d_show');
//                 li_div[i].classList.toggle('d_none');
//             } 
//         }
//     })
// })

// liClass.forEach((element) => element.addEventListener('click', function() 
// {
//     li_div.forEach((element) => 
//     {
//         if(!element.classList.contains('d_none') === this.querySelector('div')) {
//             element.classList.toggle('d_none');
//         }
//     });
//     this.querySelector('div').classList.toggle('d_none');
// }));

// Array.from(document.getElementsByClassName('dropdown_item')).forEach((element) => element.addEventListener("click", function() 
// { 
//   Array.from(document.getElementsByClassName('dropdown_menu')).forEach((element) => 
//   {
//    if(!element.classList.contains('d_none')){ element.classList.add('d_none');}
//   }
//   );
//   this.querySelector('div').classList.toggle('d_none');
// }));

// --------------------------------------------------------------------------------
//                                     Anfang
// --------------------------------------------------------------------------------

const newSpan = [];
li_span.forEach((e) => {
    if (e.parentElement.classList.contains('dropdown_item')) {
        newSpan.push(e);
    }
})

for (let i = 0; i < newSpan.length; i++) {
    newSpan[i].addEventListener('click', function(e) {
        for (let i = 0; i < li_div.length; i++) {
            if (e.target === newSpan[i]) {
                li_div[i].classList.toggle('d_show');
            } else {
                li_div[i].classList.remove('d_show');
            }
        }
    })
}

// --------------------------------------------------------------------------------
//                                     Ende
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
//                                     Anfang
// --------------------------------------------------------------------------------

// menu.addEventListener('click', e => {

//     for (let i = 0; i < li_span.length; i++) {

//         for (let i = 0; i < li_div.length; i++) {
//             if (e.target === li_span[i]) {
//                 li_div[i].classList.toggle('d_show');
//             } else {
//                 li_div[i].classList.remove('d_show');
//             }
//         }
//     }
// })

// --------------------------------------------------------------------------------
//                                     Ende
// --------------------------------------------------------------------------------

// menu.addEventListener('click', e => {
//     // console.log(e.currentTarget);

//     for (let i = 0; i < li_span.length; i++) {

//         // // if (e.currentTarget) {
//         //     console.log(liClass[i].innerText);
//         // // }
//         for (let i = 0; i < li_div.length; i++) {
//             if (e.target === li_span[i]) {
//                 li_div[i].classList.toggle('d_show');
//                 li_div[i].classList.toggle('d_none');
//             } else {
//                 li_div[i].classList.remove('d_show');
//                 li_div[i].classList.add('d_none');
//             }
//         }
//     }
// })


// --------------------------------------------------------------------------------
//                                     Anfang
// --------------------------------------------------------------------------------

// const menus = document.getElementsByClassName('menu')[0];
// menus.addEventListener('click', handlerMenu);

// function handlerMenu(e) {
//     let li = e.target.parentElement;

//     console.log(li)

//     if (li.classList.contains('dropdown_item')) {

//         let dropdownMenu = li.getElementsByClassName('dropdown_menu')[0];

//         let isHide = dropdownMenu.classList.contains('d_none');

//         closeMenu();

//         if (isHide) {
//             dropdownMenu.classList.remove("d_none");
//         } else {
//             dropdownMenu.classList.add("d_none");
//         }
//     }
// }

// function closeMenu() {
//     let dropdownMenuList = menu.getElementsByClassName('dropdown_menu');

//     for (let i = 0; i < dropdownMenuList.length; i++) {
//         dropdownMenuList[i].classList.add('d_none');
//     }
// }

// --------------------------------------------------------------------------------
//                                     Ende
// --------------------------------------------------------------------------------