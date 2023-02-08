# TypeScript에서 명시해주는 Type

## string
```
let apple:string = 'apple';
apple = 7; // error
```

## number
```
let height:number = 170;
height = 'one hundred seventy'; // error
```

## boolean
```
let isBig = true;
isBig = 123; // error
```

## Array< number > || number[]
```
let arrNum1:Array<number> = [1, 2, 3];
let arrNum2:number[] = [1, 2, 3];

// arrNum1.toLowerCase(); // error
arrNum1.push(4); // possible
```

## Array< string > ||  string[]
```
let arrStr1:Array<string> = ['a', 'b', 'c'];
let arrStr2:string[] = ['a', 'b', 'c'];

// arrStr2.push(10); // error
arrStr2.toUpCase(); // possible
```

## Tuple
```
// 각각의 index의 type이 다를 때 사용
let tuple:[string, number];

// tuple = [10, 'apple']; // error
tuple = ['apple', 10]; // possible

// tuple[1].toLowerCase(); // error
tuple[0].toLowerCase(); // possible
```

## function(void)
```
// return 값이 없을 때
function helloWorld():void {
  console.log('Hello, World');
}
```

## function(never)

```
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
