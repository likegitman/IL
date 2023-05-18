# Spread 연산자
> 배열이나 Object를 전개할 때 사용는 연산자로 `...이름`으로 사용할 수 있다

### object
```javascript
const woonrin = {
  name: "woonrin",
}

console.log(woonrin) // output: Object {name: "woonrin"}

const frontWoonrin = {
  ...woonrin,
  major: "front-end",
};

console.log(frontWoonrin) // output: Object {name: "woonrin", major: "front-end"}
```

### array
```javascript
function mul(x, y, z) {
  return x * y * z;
}

let array = [3, 4, 5];

console.log(array); // output: [3, 4, 5]

console.log(...array) // output: 3, 4, 5

console.log(mul(...array)); // output: 60

let newArray = [...array, 6];
console.log(newArray); // output: [3, 4, 5, 6]
```

# Rest 연산자
> 생김새가 spread 연산자와 비슷하지만  분명하게 다르다. rest는 객체, 배열, 함수의 파리미터 등에서  
> 사용이 가능한 연산자이다. spread와 똑같이 `...이름`으로 사용할 수 있다.

### object
```javascript
const woonrin = {
  name: "woonrin",
  major: "front-end",
  gender: "male",
};

// 비구조화 할당 문법
const {name, ...rest} = woonrin;

console.log(name); // output: woonrin

// 나머지 object의 값들이 출력된다.
console.log(rest); // output: Object {major: "front-end", gender: "male"}
```

### array
```javascript
let array = [1, 2, 3, 4, 5];

const [first, ...rest] = array;

console.log(first); // output: 1

console.log(rest); // output: [2, 3, 4, 5,]
```

### parameter
> 함수에서 parameter가 얼마나 될지 모를 때 rest연산자를 사용하면 수월하게 parameter를 받아올 수 있다.
```javascript
function max(...rest) {
  return Math.max(...rest);
}

const result = max(1, 2, 3, 4, 5, 6, 100, 81, 90, 73);
console.log(result); // output: 100
```
