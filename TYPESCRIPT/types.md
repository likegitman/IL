# TypeScript에서 명시해주는 Type

## string
```javascript
let apple:string = 'apple';
apple = 7; // error
```
## unknown
```javascript
let x = unknown;

// 검사 필요
if(typeof x  === 'number') return let b = a + 1;
```
## number
```javascript
let height:number = 170;
height = 'one hundred seventy'; // error
```

## boolean
```javascript
let isBig = true;
isBig = 123; // error
```

## Array< number > || number[]
```javascript
let arrNum1:Array<number> = [1, 2, 3];
let arrNum2:number[] = [1, 2, 3];

// arrNum1.toLowerCase(); // error
arrNum1.push(4); // possible
```

## Array< string > ||  string[]
```javascript
let arrStr1:Array<string> = ['a', 'b', 'c'];
let arrStr2:string[] = ['a', 'b', 'c'];

// arrStr2.push(10); // error
arrStr2.toUpCase(); // possible
```

## Tuple
```javascript
// 각각의 index의 type이 다를 때 사용
let tuple:[string, number];

// tuple = [10, 'apple']; // error
tuple = ['apple', 10]; // possible

// tuple[1].toLowerCase(); // error
tuple[0].toLowerCase(); // possible
```

## literal
> 코드 상에서 고정된 값을 나타내는 type이다. 따라서 변수를 선언함과 동시에 그 변수의 값을 고정시킨다.
```javascript
let grade:number = 3;
grade = 4; // possible

let grade2:5 = 5;
grade2 = 6; // error
```
## union
> type1 | type
```javascript
let grade:string | number = 3;
grade = "3";
```

## as const
> Object나 Array 내부의 property 값을 literal처럼 정확히 지정할 때 사용한다.
```javascript
const obj = {name: "woonrin", age: 18}; // {name: string, age:number}
const obj2 = {name: "mike", age: 17}; // {name: "mike", age:17}

const numberArr = [1, 2, 3, 4]; // number[];
const numberArr2 = [1, 2, 3, 4] as const; // [1, 2, 3, 4]
```

## function(void)
```javascript
// return 값이 없을 때
function helloWorld():void {
  console.log('Hello, World');
}
```

## function(never)
```javascript
// error를 띄울 때
function expError():never {
  throw new Error();
}

// loop를 돌 때
function goLoop():never {
  for(;;) {
    console.log('Loop...');
  }
}
```
