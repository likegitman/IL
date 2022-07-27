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
