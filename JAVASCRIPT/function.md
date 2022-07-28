# Function

## 사용법
```
fucntion printHello() {
  console.log('Hello');
} 
printfHello(); // output: Hello
```

```
function log(message) {
  console.log(message);
} 
log('Test'); // output: Test
```

## Parameters
```
function changeName(obj) {
  obj.name = 'Woonrin'
}
const Name = { name : 'Minsu' };
changeName(Name);
console.log(Name); // output: Woonrin
```

## Default parameters

```
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

```
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

```
// 위 방식 보다 간단한 방법 (for of 문법)
function printAll(...args) {
  for(const arg of args) { // args의 있는 값들이 하나씩 지정되면서 출력 됨
    console.log(arg);
  }
}
printAll('hello', 'good', 'wonderful');
```

## Local scope
```
let globalMessage = 'global'; //global variable => 어디에서든 사용가능
function printMessage() {
  let message = 'hello'; //local variable => 함수블럭안에서만 작동
  consolo.log(message); //작동
  console.log(globalMessage); //작동
}
console.log(message); //작동 하지않음
```

```
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
```
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`) // output: sum: 3
```

## Every Return
> 조건 참: user.point가 10 초과라면
```
//bad
function upgradeUser(user) {
  if(user.point > 10) {
    // long uprtade logic...
    // if안에 많은 logic들을 넣게되면 가독성이 떨어짐
  }
}
```

```
//good
function upgradeUser(user) {
  if(user.point <= 10) {
    return;
    // 조건이 아닐때는 빨리 return으로 함수를 종료하는게 좋음
  }
  // long upgrade logic...
}
```
