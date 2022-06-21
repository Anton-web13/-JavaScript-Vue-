console.log('Request data...');

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Praparing data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData);
//     }, 2000)
// })

// p.then((data) => {
//     console.log('Promise resolved', data);
// })



// p.then((data) => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)
//     })

//     p2.then((clientData) => {
//         console.log('Data received', clientData);
//     })
// })



// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)
//     })
// }).then(clientData => {
//     // console.log('Data received', clientData);
//     // clientData.fromPromise = true;
//     // return clientData;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data received', clientData);
//             clientData.fromPromise = true;
//             resolve(clientData);
//         }, 2000)
//     })
// })
//     .then((clientData2) => {
//         setTimeout(() => {
//             console.log('Data finshed', clientData2);
//         }, 2000)
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally'));







const sleep = ms => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(), ms)
    })
}

// function sleep(ms) {
//     return new Promise(resolve =>{
//         setTimeout(() => resolve(), ms)
//     })
// }

// const sfasf = function sleep(ms) {
//     return new Promise(resolve =>{
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => console.log('After 2 sec.'))
// sleep(3000).then(() => console.log('After 3 sec.'))



Promise.all([sleep(2000), sleep(5000)]).then(() => {     // выполнение после 2-ого промиса
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {     // выполнение после 1-ого промиса
    console.log('Race promises')
})



