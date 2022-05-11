// function nnnn (n) {
//     let num = [];
//     for (let i = 0; i < n; i++) {
//         num[i] = i + 1;
//     }
//     return console.log(num);
// }
// nnnn(20);



// function nnnn (n) {

//     let num = [];
    
//     for (let i = n -0; i >= 1; i--) {
//         num.unshift(i);
//     }
//     return console.log(num);
// }

// nnnn(20);


// function nnnn (n) {

//     let num = [];
    
//     for (let i = 1; i <= n; i++) {

//         num.push(i);
//     }
//     return console.log(num);
// }

// nnnn(20);



function nnnn (n) {
    n = 3;
    let num = [];
    
    for (let i = 1; i <= n; i++) {

        num.push(i);
        num.concat(num);
    }
    return num;
}

let rew = nnnn();

console.log(rew);

let tyt = rew.concat(rew);
console.log(tyt);