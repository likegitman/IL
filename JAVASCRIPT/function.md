# Function

## Use
```javascript
// declaration
fucntion printHello() {
  console.log('Hello');
} 

function add(a, b) {
  const sum = a + b;
  return sum;
}

// call
printanything(); // output: Hello

const result = add(1, 2);
console.log(result) // output: 3
```

## Parameters
```javascript
function changeName(obj) {
  obj.name = 'Woonrin'
}
const Name = { name : 'Minsu' };
changeName(Name);
console.log(Name); // output: Woonrin
```

## Default parameters

```javascript
function showMessage(message, from) {
  consolo.log(`${message} by ${from}`);
}
showMessage('hello'); // output: hello by undefined
```

```
function showMessage(message, from = 'unknown') { // 사용자가 지정하지않을 때 값을 대신할 수 있음
  consolo.log(`${message} by ${from}`);
}
showMessage('hello'); // output: hello by unknown
```

## Rest parameters

```javascript
function printAll(...args) { // ... = 배열 형태로 전달 됨
  for(let i = 0; i < args.length; i++;) { 
    console.log(args[i]);
  }
}
printAll('hello', 'good', 'wonderful'); // ...args의 인자들(값들)
// output: hello
//         good
//         wonderful
```

```javascript
// 위 방식 보다 간단한 방법 (for of 문법)
function printAll(...args) {
  for(const arg of args) { // args의 있는 값들이 하나씩 지정되면서 출력 됨
    console.log(arg);
  }
}
printAll('hello', 'good', 'wonderful');
```

```javascript
function printAll(...args) {
  args.forEach((arg)=>console.log(arg))
}
printAll('hello', 'good', 'wonderful');
```
## Local scope

```javascript
let globalMessage = 'global'; //global variable => 어디에서든 사용가능
function printMessage() {
  let message = 'hello'; //local variable => 함수블럭안에서만 작동
  consolo.log(message); //작동
  console.log(globalMessage); //작동
}
console.log(message); //작동 하지않음
```

```javascript
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  consolo.log(message);
  console.log(globalMessage);
  function printAnother() { //부모 자식 함수
    console.log(message); //작동 => 자식은 부모에게서 정의된 메시지를 확인(사용)이 가능함
    let childMessage = 'hello';
  }
  console.log(childMessage); //작동 하지않음
}
```

## Return
```javascript
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`) // output: sum: 3
```

## Every Return
> 조건 참: user.point가 10 초과라면
```javascript
//bad
function upgradeUser(user) {
  if(user.point > 10) {
    // long uprtade logic...
    // if안에 많은 logic들을 넣게되면 가독성이 떨어짐
  }
}
```

```javascript
//good
function upgradeUser(user) {
  if(user.point <= 10) {
    return;
    // 조건이 아닐때는 빨리 return으로 함수를 종료하는게 좋음
  }
  // long upgrade logic...
}
```

## Function Expression
> function은 변수에 할당이 가능하고,
  function에 parameter로 전달이되며  
  return값으로 return이 가능하다.
  
  ```javascript
  function sum(a, b) {
    return a + b; // return
  }
  // anonymous function
  const print = function () { // 변수 print에 anonymous function을 할당함
    console.log('print');
  };
  print(); // output: print
  const printAgain = print; // print를 할당함으로써 printAgain이 함수를 가리키게 됨
  printAgain(); // output: print
  const sumAgain = sum; // 변수 sumAgain에 sum function을 할당함
  console.log(sumAgain(2, 3)); // output: 5
  ```
  
  ## Callback Function
  > 상황에 맞게 전달된 함수를 출력하는 것
  ```javascript
  function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
      printYes();
      } else {
        printNo();
      }
    }
    // anonymous function
    const printYes = function () {
      console.log('yes');
    };
    // named function
    const printNo function print () {
      console.log('no');
    };
    randomQuiz('hello', printYes, printNo);
    randomQuiz('love you', printYes, printNo);    
  ```
  
  ## Arrow function
  ```javascript
  const simplePrint = () => console.log('simplePrint');
  const add = (a, b) => a + b;
  // block이 필요한 Arrow function이라면?
  const simpleMultiply = (a, b) => {
    return a * b;
  };
  ```
  ## IIFE: Immediately Invoked Function Expression
  ```javascript
  (function hello() {
    console.log('IIFE')
  })();
  ```
