# Async & Await

## Async
```
// Promise
// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         resolve('woonrin');
//     });
// }

// async를 function앞에 쓰면 code block이 Promise로 바뀜
async function fetchUser() {
    return 'woonrin';
}

const user = fetchUser();
console.log(user); // output:Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'woonrin'}
user.then(console.log); // output: woonrin
```

## Await
```
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// // chaining
// function getTriangle() {
//     return delay(2000)
//     .then(() => '▲');
// }

// await
async function getTriangle() {
    await delay(2000);
    return '▲'
}

async function getStar() {
    await delay(2000);
    return '★';
}

// chaining
// function pickFigure() {
//     return getTriangle().then(triangle => {
//         return getStar().then(star => `${triangle} + ${star}`);
//     });
// }

// await
function pickFigure() {
    const triangle = await getTriangle();
    const star = await getStar();
    return `${triangle} + ${star}`;
}
pickFigure().then(console.log); // 4초후 ▲ + ★
```

```
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// // chaining
// function getTriangle() {
//     return delay(2000)
//     .then(() => '▲');
// }

// await
async function getTriangle() {
    await delay(2000);
    return '▲';
}

async function getStar() {
    await delay(2000);
    return '★';
}

// parallel processing
function pickFigure() {
    const trianglePromise = getTriangle();
    const starPromise = getStar();
    const apple = await trianglePromise;
    const star = await starPromise;
    return `${triangle} + ${star}`;
}
pickFigure().then(console.log); // 4초후 ▲ + ★

```

## Useful Promise API
* all()
```
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// // chaining
// function getStar() {
//     return delay(2000)
//     .then(() => '★');
// }

async function getTriangle() {
    await delay(2000);
    return '▲'
}

async function getStar() {
    await delay(2000);
    return '★';
}

function pickFigure() {
    return Promise.all([getTriangle(), getStar()]).then(figure =>
        figure.join(' + ')
    );
}

pickFigure().then(console.log); // 4초후 output: ▲ + ★
```

* race()
```
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// // chaining
// function getStar() {
//     return delay(2000)
//     .then(() => '★');
// }

async function getTriangle() {
    await delay(2000);
    return '▲'
}

async function getStar() {
    await delay(1000);
    return '★';
}

function pinkOnlyOne() {
    return Promise.race([getTriangle(), getStar()]);
}
pinkOnlyOne().then(console.log); // output: ▲
```
