# Operators

## String concatenation
```js
console.log('my' + 'cat'); //output: my cat
console.log('1' + 2) //output: 3
console.log(`string literals: 1 + 2 = ${1 + 2}`);
```

## Numeric operators
```js
console.log(8 + 2); 
console.log(8 - 2);
console.log(8 / 2); //output: 4
console.log(8 * 2);
console.log(8 % 2); //output: 0
console.log(2 ** 3); //output: 8
```

## Increment and decrement operators
```js
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${conter}`); // output: 3, 3

let counter2 = 5;
const postIncrement = counter++; 
console.log(`preIncrement: ${postIncrement}, counter: ${conter2}`); // output: 5, 6
```

## Assignment operators
```js
let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;
```

## Comparison operators
```js
console.log(2 < 8); //작다
console.log(4 <= 5); //작거나 같다
console.log(3 > 1); //크다
console.log(10 >= 5); //크거나 같다
```

## Logical operators
* AND(&&)
> 조건이 모두 참이라면 true반환  
  하나라도 거짓이면 false반환
* OR(||)
> 조건중 한 가지라도 참이면 true반환  
  모두 다 거짓이면 false반환
* NOT(!)
> 참이면 거짓으로, 거짓이면 참으로 바꿈
* Nullish 병합 연산자(??)
> 왼쪽 피연산자가 null이거나 undefined일 때 오른쪽 피연산자를 반환하고 그렇지 않으면
> 왼쪽의 피연산자를 반환하는 논리 연산자이다.
```js
const x = "null";
const y = "full";
const defaultValue = "default";
const result = x ?? defaultValue;
const result2 = y ?? defaultValue;
console.log(result); // output: default
console.log(result2); // output: full
```

## Bit operators
* Tilde(~)
> NOT의 기능을 하는데 2진수일 때 0과 1을 뒤바뀌게 해주는 비트 연산자이다
```js
const x = 5;
console.log(~x); // output: -6

const y = -3;
console.log(~y); // output: 2
```

* Double Tilde(~~)
> tilde를 2번 반복해주는데 하지만 이말대로라면 값은 제자리 걸음마냥 값이 똑같다.  
> 그렇다면 왜 쓰냐하면 특정한 경우에 유용하기 때문이다.
#### 1. Math.floor() 대신 사용될 수 있다.
> `~`연산자를 사용하게되면서 소수점들은 버려지게 되고 결국 `Math.floor()`와 같은 기능을 하게 된다.  
> **장점**은 속도 측면에서 `Math.floor()`보다 빠르다. 비슷한 기능을 속도순으로 나열하면  
> `~~`, `Math.floor()`, `parseInt()`순이라고 한다. **단점**은 `~~`라는 표시가 생소하기 때문에  
> 코드의 가독성 면에서 문제가 생길 수 있다.

#### 2. undefined 또는 null을 0으로 변환한다.
```js
const array = [1, 1, 1, 2, 2, 3, 3, 3, 3];
const obj = {};

array.forEach((v) => {
  if (obj[v]) obj[v] += 1;
  else obj[v] = 1
})

console.log(obj);
// output: { '1': 3, '2': 2, '3': 4 }
```
> 위와 같이 object의 key 값을 확인하는 작업을 `~~` 연산자를 사용한다면 코드를 줄일 수 있다.

```js
const array = [1, 1, 1, 2, 2, 3, 3, 3, 3];
const obj = {};

array.forEach((v) => obj[v] = ~~obj[v] + 1);

console.log(obj);
// output: { '1': 3, '2': 2, '3': 4 }
```
## Equality operators
* ==
> type보다 안의 값을 신경써서 같은지 다른지 판정
* ===
> type을 신경써서 같은지 다른지 판정
```
const string = '5';
const number = 5;

console.log(string == number); // true
console.log(string != number); // false

console.log(string === number); // false
console.log(string !== number); // true
```
