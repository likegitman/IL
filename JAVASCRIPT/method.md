# Method
> `method`는 어떠한 객체가 가지고 있는 어떤 동작을 말한다. 언어마다 의미가 다르긴 하지만 `Javascript`에서는
> 일반적으로 객체 안에 `property`로 정의된 함수를 `method`라고 부른다.

## 생성
```js
// function
const obj = {
  printHi: function() {
    console.log('Hi');
  }
};

// arrow function
const obj = {
  printHi: () => {
    console.log('Hi');
  }
};

// not key
const obj = {
  printHi() {
    console.log('Hi');
  }
};

// 정의 후 메소드 추가

// function
const obj = {};

obj.printHi = function() {
  console.log('Hi');
};

// arrow function
const obj = {};
obj.printHi = () => {
  console.log('Hi');
};
```

## 호출
```js
const obj = {
  printHi: function() {
    console.log('Hi');
  }
};

obj.printHi(); // output: Hi

// 소괄호를 붙이지 않으면 호출이 아닌 '접근'을 한 것이기 때문에 함수를 선언한 내용이 반환된다.
obj.printHi; // output: f () {console.log('Hi');}
```
