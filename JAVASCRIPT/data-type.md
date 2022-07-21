# Data-type

## Number
- infinity
> 양수를 0으로 나누게되면 infinity 값
- negativeInfinity 
> 음수를 0으로 나누게되면 negativeInfinity 값
- NaN 
> 숫자가 아닌것을 숫자로 나누게되면 Not a Number 값

## String
> ' '로 감싼 것
- 문자열과 변수를 + 기호를 이용해  연결시킬수 있음
```
const name = 'Woonrin';
const greeting = 'hello' + name;
console.log(greeting); //output: hello Woonrin
```
- template literals
> 백택기호로 감싸고 $기호를 사요하는 것
```
const name = 'Woorin'
console.log(`hello ${name}`); //output: hello Woonrin
```

## Boolean
> 참과 거짓
- true
> false가 아닌 모든 값

- false
> 0, null, undefined, NaN, ' ' 비어있는 string  
`const false = 3 < 1; //false` 

## Null, Undefined
- null
> 명확하게 비어있다고 지정하였을 때  
`let x = null;`
- undefined
> 선언은 되어있지만 안의 값이 지정되지 않았을 때  
`let x;`

## Symbol
> 고유한 식별자가 필요할 때 사용
```
const symbol1 = Symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2); //output: false
```
- 심볼의 값이 같다고 지정할 때
```
const symbol1 = Symbol.for('id');
const symbol2 = symbol.for('id');
console.log(symbol1 === symbol2); //output: true
```

- 출력할 때
```
const symbol1 = Symbol('id');
console.log(`${symbol1.description}`); //output: id
```

## Dynamic typing
```
let x = 'hello';
consolo.log(`value: ${x}, type: $(typeof x)`); //output: value: hello, type: string
let x = 1;
consolo.log(`value: ${x}, type: $(typeof x)`); //output: value: 1, type: number
let x = '7' + 5;
consolo.log(`value: ${x}, type: $(typeof x)`); //output: value: 75, type: string
let x = '8' / '2';
consolo.log(`value: ${x}, type: $(typeof x)`); //output: value: 4, type: number
```
