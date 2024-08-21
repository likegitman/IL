# 함수형 프로그래밍
함수형 프로그래밍은 프로그래밍 패러다임에서 선언형 프로그래밍에 해당하는 패러다임이다.  
선언형과 반대되는 명령형 프로그래밍은 **어떻게 할 건지**를 설명하는 방식이고  
선언현 프로그래밍은 **무엇을 할 건지**를 설명하는 방식이다.  

함수형 프로그래밍은 **순수 함수**를 조립하여 소프트웨어를 만드는 방식이다.

### Example
가장 대표적인 예시로는 배열을 순회하며 새로운 배열을 반환하는 map 메서드로 예를 들 수 있다.

#### 명령형 프로그래밍
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
```

#### 선언형 프로그래밍
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
```

## 순수 함수
순수 함수란 입력에 대해 항상 같은 값을 도출해내는 함수를 의미하기도 하며  
**side effect**가 발생하지 않는 함수를 의미하기도 한다.

### 순수 함수 예시
```js
const add = (x, y) => x + y;
const arrAttach = (arr, attachValue) => arr.concat(attachValue);
const arrSort = arr => [...arr].sort((a, b) => a - b);
```
순수 함수는 함수의 외부 값이나 전달 된 값을 직접 변경하지 않는다.  
그래서 같은 입력에는 항상 같은 결과만 반환한다.  

### 순수 함수가 아닌 예시
```js
let z = 10;
const add = (x, y) => x + y + z;
const arrAttach = (arr, attachValue) => (arr.push(attachValue), arr);
const arrSort = arr => arr.sort((a, b) => a - b);
```
add 함수는 z가 변경 됨에 따라 같은 입력에 다른 결과가 도출될 수 있고  
arrAttach는 외부 상태를 바꾸고 수정된 원본 배열의 참조를 반환한다.  
원본 배열을 변경하기 때문에 여러 번 호출하면 내용이 계속 변경되게 된다.  
아래 sort도 원본 배열을 정렬하기 때문에 결과가 일정하지 않는다.

### Side Effect
의도치 않게 발생하는 예측할 수 없는 효과들을 말한다.  
외부의 값이나 상태를 변경하는 것도 포함되고 일정한 결과를 도출할 수 없도록  
만들 수도 있어서 순수 함수에서는 Side Effect가 일어나선 안 된다.

### 장점
1. **불변성**을 유지해 안정성 향상과 같은 입력에 같은 결과를 도출하여 코드의 예측 가능성을 높인다.
2. 디버깅하거나 테스트하기에 쉽다.
3. 병렬 처리, 메모이제이션과 같은 성능 향상에 도움이 될 수 있는 기능들을 적용하기 간편하다.

## 일급 객체 & 일급 함수
### 일급 객체
일급 객체는 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 말한다.  
보통 함수에 인자로 넘기기, 수정하기, 변수 대입하기와 같은 연산을 지원하는 경우  
이를 일급 객체라고 부른다.

1. 무명의 리터럴로 생성이 가능
2. 변수나 자료구조에 저장할 수 있다.
3. 함수의 매개 변수에 전달할 수 있다.
4. 함수의 반환 값으로 사용할 수 있다.

js함수는 위 조건들을 만족하여 일급 객체이다.

### 일급 함수
함수를 일급 객체로 취급하는 것을 일컫는다.  
즉, 일급 객체의 조건을 만족하는 함수라고 할 수 있다.  
함수가 일급 객체라는 것은 함수를 객체처럼 값으로 취급할 수 있다는 뜻이 된다.  

#### 함수를 변수에 할당
```js
// 함수는 무명의 리터럴로 생성할 수 있고 변수에 저장할 수 있다.
const add = function (x, y) {
  return x + y;
};

// 함수는 객체에 저장할 수 있다.
const calculator = { add };
```

#### 함수를 함수의 인자로 전달
```js
function sayHello() {
  return "Hello, ";
}

function greeting(message, name) {
  console.log(message(), name);
}

// 함수를 매개변수로 전달
greeting(sayHello, "woonrin");
```

#### 함수의 반환
```js
function sayHello() {
  return function() {
    console.log("Hello");
  }
}
```

## Currying ( 커링 )
커링은 함수형 프로그래밍에서 중요한 개념인데 함수를 반환하는 함수를 커링이라고 부른다.  
설명보다는 코드로 미리 어떤 것인지 짚고 넘어가자.
```js
const curryingFn = fn => fn2 => x => y => fn(a, b) + fn2(a, b);
const add = (x, y) => x + y;
const multifly = (x, y) => x * y;

curryingFn(add)(multifly)(3)(5); // 8 + 15 = 23
```

### 사용 이유
사실 예제만 보면 왜 저리 복잡하게 사용하는 지 모를 수 있다.  

#### 함수의 재사용
만약 커링을 사용하지 않는다면 우리는 함수의 재활용을 이렇게 할 것이다.
```js
function add(x, y) {
  return x + y;
}

functino add2(a) {
  return add(a, 2);
}
function add3(a) {
  return add(a, 3);
}
function add4(a) {
  return add(a, 4);
}

add2(1); // 3
add3(2); // 5
add4(8); // 12
```
언뜻보면 add를 재사용하고 있지만 똑같이 add에 전달받은 a를 넘겨주는 것은  
똑같다. 같은 코드가 반복되고 있기에 위 코드를 함수를 재사용했다고 보기엔 어렵다.
커링을 활용하면 여러 파생 함수들을 쉽게 만들 수 있고 add를 재사용하고 있다는 것을 느낄 수 있다.
```js
function add(x, y) {
  return x + y;
}

function addX(x) {
  return function(a) {
    return add(a, x);
  }
}

const add2 = addX(2);
const add3 = addX(3);
const add4 = addX(4);

add2(1); // 3
add3(2);// 5
add4(8); // 12
```
사실 function보다 arrow function일 때 커링의 가독성이 장점을 발휘한다고 생각한다.
```js
const add = (x, y) => x + y;
const addX = x => a => add(x, a);
```

함수의 재사용도 재사용이지만 가독성 면에서도 좋다.  
근데 사실 위 addX는 x와 a를 한 번에 인자로 받는 함수로도 작성 가능하다.  
왜 여러 인자를 받지 않고 개별적으로 받는 커링이 나오게 됐을까?

인자를 개별적으로 받으면 **부분 적용**을 할 수 있게 된다.  
부분 적용을 하게 되면 일부 인자는 미리 적용해놓은 함수를 만들 수 있는데  
이렇게하면 고정된 인자를 가진 함수는 반복적으로 사용되면서 코드의 중복을 줄인다.

#### 명시적
간단한 커링만 살펴봤는데 받는 개별 인자가 늘수록 명시적으로 함수를 사용하고  
조립해서 사용할 수도 있다.
```js
function curry(fn){
  return function(fn2){
    return function(a){
      return function(b){
        return fn(a,b) + fn2(a,b);
      }
    }
  }
}

function add(a,b){
  return a+b;
}

function multiply(a,b){
  return a*b;
}

const fnIsAdd = curry(add);
const fnIsAddFn2IsMultiply = fnIsAdd(multiply);
const fnIsAddFn2IsMultiplyAis3 = fnIsAddFn2IsMultiply(3);
const add3and5Plusmultiply3and5 = fnIsAddFn2IsMultiplyAis3(5);
console.log(add3and5Plusmultiply3and5) // (3+5) + (3*5) = 8+15 = 23
```
개별 인자를 계속 받아도 무엇을 하는 함수인지 명시적으로 눈에 보인다.
만약 curry 함수가 인자를 한 번에 받는 것이었다면 무엇을 하려는 지 모를 수 있다.
`curry(add, multiply, 3, 5);` 이렇게 사용했을 것이기 때문이다.  
