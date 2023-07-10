# substr()
### 문법
`string.substr(start, length);`
> 파라미터로 입력받은 start index부터 length 길이만큼 string을 잘라내어 반환하는 함수이다.
### Example
```js
let str = "안녕하세요!"

let str1 = str.substr(0, 1);
let str2 = str.substr(1, 2);
let str3 = str.substr(str.length-1, 1);

console.log(str1); // output: 안
console.log(str2); // output: 녕하
console.log(str3); // output: !
```

# substring()
### 문법
`string.substring(start, end);`
> 파라미터로 잘라내고 싶은 문자열의 start index와 end index를 전달한다. ( index는 0부터 시작 )
### Example
```js
let str = "안녕하세요!"

let str1 = str.substring(0, 1);
let str2 = str.substring(1, 1);
let str3 = str.substring(str.length-1, 1);

console.log(str1); // output: 안
console.log(str2); // output: 녕
console.log(str3); // output: !
```

# slice()
### 문법
`string.slice(start, end);`
> substring과 같이 파라미터로 잘라내고 싶은 문자열의 start index와 end index를 전달한다.
### Example
```js
let str = "안녕하세요!"

let str1 = str.slice(0, 1);
let str2 = str.slice(1, 2);
let str3 = str.slice(str.length-1, 1);

console.log(str1); // output: 안
console.log(str2); // output: 녕
console.log(str3); // output: !
```

## substring, slice의 차이

### 1. start index가 end index보다 클 때
#### substring은 start와 end를 바꾸어서 계산하고 slice는 빈 문자열을 리턴한다.

### 2. start값 또는 end값이 음수일 때
#### slice는 가장 뒤에서 음수의 절댓값만큼 내려온 index로 취급하고 substring은 start와 end값을
#### index 0으로 취급한다.

# toString()

### 문법
`number.toString(radix)`
> 임의의 숫자형 값을 문자열로 변환하는 자바스크립트 Number객체의 내장 method이다.  
> radix 매개변수는 10 진법으로 표현된 숫자를 다른 진수로 변환한다. 변환된 진수도 물론 문자열이다.
### Example
```js
let num = 17;
let str = num.toString();

console.log(num); // output: 17
console.log(str); // output: "17"

console.log(17.toString()); // Error: Invalid or unexpected token
console.log((17).toString()); // "17"
console.log((10.9).toString()); // output: "10.9"
console.log((-17).toString()); // output: "-17"
```
