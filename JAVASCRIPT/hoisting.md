# Hoisting
> 자바스크립트 함수 안에 있는 선언들(변수, 함수)을 모두 끌어올려서  
> 해당 함수 유효범위의 최상단에 선언하는 것이다.  

# 유효범위
> 변수에 접근할 수 있는 범위이다.  
> block scope, function scope, global scope

# var hoisting
> 변수 할당이 선언보다 위에 있어도 오류가 생기지 않는다.
```javascript
name = "Mike";
var name;
```

# function hoisting
> 함수 호출이 선언보다 위에 있어도 오류가 생기지 않는다.
```javascript
let name = "Mike";

pringName(name);

function printName(name) {
  console.log(name);
}
```

# Hoisting 대상
> var와 함수 선언문만 hoisting대상이고 그 외의  
> const, let, 함수 표현식은 hoisting대상이 아니다.

# 변수 생성 단계
> let과 const는 아래의 세 단계가 각각 따로따로 이뤄지고  
> var를 사용하면 선언과 초기화가 동시에 이뤄진다.  
> 함수 선언문은 세 단계 모두 동시에 이루어진다.

1. 선언 - 변수 객체를 실행 context에 등록한다.
2. 초기화 - 등록된 변수의 메모리를 확보하고 undefined로 초기화된다.
3. 할당 - 초기화 된 변수에 실제 값을 할당한다.

## Example
> 아래코드는 실행은 되지만 console에는 undefined가 출력된다.  
> 그 이유는 JavaScript내부상황을 보면 알 수 있다.
```javascript
printName(name);

function printName(name) {
  console.log(name);
}

var name = "Mike";
```

## 내부 hoisting 상황
> 이런식으로 hoisting이 이뤄지기 때문에 실행은 되지만  
> var 변수의 값이 undefined인 이유이다.
```javascript
var name = undefined; // 선언과 초기화

function printName(name) {
  console.log(name);
}

printName(name);

name = "Mike";
```
