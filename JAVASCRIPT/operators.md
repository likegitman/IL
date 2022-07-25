# Operators

## String concatenation
```
console.log('my' + 'cat'); //output: my cat
console.log('1' + 2) //output: 3
console.log(`string literals: 1 + 2 = ${1 + 2}`);
```

## Numeric operators
```
console.log(8 + 2); 
console.log(8 - 2);
console.log(8 / 2); //output: 4
console.log(8 * 2);
console.log(8 % 2); //output: 0
console.log(2 ** 3); //output: 8
```

## Increment and decrement operators
```
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${conter}`); // output: 3, 3

let counter2 = 5;
const postIncrement = counter++; 
console.log(`preIncrement: ${postIncrement}, counter: ${conter2}`); // output: 5, 6
```

## Assignment operators
```
let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;
```

## Comparison operators
```
console.log(2 < 8); //작다
console.log(4 <= 5); //작거나 같다
console.log(3 > 1); //크다
console.log(10 >= 5); //크거나 같다
```

## Logical operators
* AND(&&)
> 조건이 모두 참이면면 true반환  
  하나라도 거짓이라면 false반환
* OR(||)
> 조건중 한 가지라도 참이면 true반환  
  모두 다 거짓이면 false반환
* NOT(!)
> 참이면 거짓으로 거짓이면 참으로 바꿈

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
