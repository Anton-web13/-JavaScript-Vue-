const btn = document.querySelector('.btn');
// console.log(btn)
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
  // e.stopPropagation();
  console.log('click btn');
})

wrap.addEventListener('click', e => {               // реагируют на всплытие
  // e.stopPropagation();
  console.log('click wrap');
})

document.body.addEventListener('click', e => {     // реагируют на всплытие
  console.log('click body');
})

wrap.addEventListener(                             // реагируют на погружение
  'click', e => {
  // e.stopPropagation();
    console.log('click wrap');
  }, 
  {capture: true}
)

document.body.addEventListener(                   // реагируют на погружение
  'click', e => {
    console.log('click body');
  }, 
  true
)