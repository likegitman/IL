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
* for
```
const figure = ['■', '▲'];

for (let i = 0; i < figure.length; i++) {
    console.log(figure[i]); // output: ■ \n ▲
}
```

* for of
```
const figure = ['■', '▲'];

for(let figure of figure) {
    console.log(figure); // output: ■ \n ▲
}
```

* forEach
```
const figure = ['■', '▲'];

figure.forEach(function (figure, index) {
    console.log(figure, index); // output: ■ 0 \n ▲ 1
});

// anonymous function은 arrow function으로 사용 가능
figure.forEach((figure) => console.log(figure)); // output: ■ \n ▲
```

## Addtion, Deletion, Copy
* pop and push
```
const figure = ['■', '▲'];

// push: add an item to the end
figure.push('★','＠');
console.log(figure); // output: (4) ['■', '▲', '★', '＠']

// pop: remove an item from the end
figure.pop();
figure.pop();
console.log(figure); // output: (2) ['■', '▲']
```

* unshift and shift
```
// ※ unshift, shift are slower than push, pop

const figure = ['■', '▲'];

// unshift: add an item to the first
figure.unshift('◆', '●');
console.log(figure); // output: (4) ['◆', '●', '■', '▲']

// shift: remove an tem from the first
figure.shift();
figure.shift();
console.log(figure); // output: (2) ['■', '▲']
```

* splice
```
const figure = ['■', '▲'];

// splice: remove an item by index position
figure.push('♠', '♥', '♣');
console.log(figure); // output: (5) ['■', '▲', '♠', '♥', '♣']
figure.splice(1, 1) // start: number, deleteCount?: number
console.log(figure); // output: (4) ['■', '♠', '♥', '♣']

// figure의 1번 index값이 지워진 자리에 ◈와 ＃가 추가된다
figure.splice(1, 1, '◈', '＃');
console.log(figure); // output: (5) ['■', '◈', '＃', '♥', '♣']
```

* combine two arrays
```
const figure = ['■', '▲'];
const figure2 = ['＆', '§'];
const newFigure = figure.concat(figure2);
console.log(newFigure); // output: (4) ['■', '▲', '＆', '§']
```

## Searching

* indexOf
```
const figure = ['■', '▲', '◆'];

// indexOf: 몇번째 index에 있는지 나온다
console.log(figure.indexOf('■')); // output: 1
console.log(figure.indexOf('◆')); // output: 2

// index에 없는 값은 -1로 나온다
console.log(figure.indexOf('▣')); // output: -1
```

* includes
```
const figure = ['■', '▲', '◆'];
// includes: index값이 포합되어있는지 나타낸다
console.log(figure.includes('■')); // output: true
console.log(figure.includes('★')); // output: false
```

* lastIndexOf
```
const figure = ['■', '▲', '◆'];

figure.push('■');
// indexOf는 중복된 값이 있을경우 첫번째에 해당하는 값의 위치를 나타낸다
console.log(figure.indexOf('■')); // output: 0

// lastIndexOf는 중복된 값이 있을경우 마지막에 해당하는 값의 위치를 나타낸다 
console.log(figure.lastIndexOf('■')); // output: 5
```
