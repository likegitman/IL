# Array

## Declaration
```
// way 1
const arr1 = new Array();
// way 2
const arr2 = [1, 2];
```

## Index position
```
const figure = ['■', '▲'];
console.log(figure); // output: (2) ["■", "▲"]
console.log(figure.length); // output: 2
console.log(figure[0]); // output: ■
console.log(figure[1]); // output: ▲
console.log(figure[2]); // output: undefined
console.log(figure[figure.length - 1]); // output: ▲
```

## Looping over an array
```
const figure = ['■', '▲'];

// for
for (let i = 0; i < figure.length; i++) {
    console.log(figure[i]); // output: ■ \n ▲
}
```

```
const figure = ['■', '▲'];

// for of
for(let figure of figure) {
    console.log(figure); // output: ■ \n ▲
}
```

```
const figure = ['■', '▲'];

//forEach
figure.forEach(function (figure, index) {
    console.log(figure, index); // output: ■ 0 \n ▲ 1
});

// anonymous function은 arrow function으로 사용 가능
figure.forEach((figure) => console.log(figure)); // output: ■ \n ▲
```
