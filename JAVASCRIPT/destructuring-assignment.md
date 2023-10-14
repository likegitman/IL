# 구조분해 할당
> 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다. 개발을 하다 보면
> 함수에 객체나 배열을 전달한다. 하지만 경험상 전체 배열 객체가 아닌 **일부**만 전달하고 싶은 경우는 무조건 생긴다
> 이럴 때 객체나 배열을 변수로 **분해** 할 수 있게 해주는 구조 분해 할당 문법을 사용할 수 있다.

## Example
```js
// Object
const Me = {
  name: 'woonrin',
  age: 18,
  major: 'front'
};

// Origin
const name = Me.name;
const age = Me.age;

console.log(name, age); // output: woonrin, 18

// 구조 분해 할당
const { name, age } = Me;

console.log(name, age); // output: woonrin, 18

// Array
const arr = [1, 2, 3, 4, 5];

// Origin
const first = arr[0];
const second = arr[1];

console.log(first, second); // output: 1, 2

// 구조 분해 할당

const [first, second] = arr;

console.log(first, second); // 1, 2
```
> 구조 분해 할당은 **파괴**가 아닌 무언가를 복사해 변수로 **분해**하기 위한 위한 문법이다. 따라서 원본 객체나  
> 배열은 변경되거나 파괴되지 않는다. 또 배열은 상관없겠지만 객체를 구조 분해 할당을 할 때는 이름이 똑같아야 한다.
```js
const Me = {
  name: 'woonrin',
  age: 18,
  major: 'front'
};

const { myName } = Me; // error
```
> 또 많이 쓰이는 함수의 `props`에서 구조 분해 할당이 있다.
```js
// 방법 1
const fn = (props) => {
  const { name, age } = props;
  console.log(name, age);
};

// 방법 2
const fn = ({name, age}) => {
  console.log(name, age);
};
```
