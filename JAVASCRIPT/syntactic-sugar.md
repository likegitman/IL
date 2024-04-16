# Syntactic Sugar
해석하면 문법적 설탕이다. 복잡할 것 같은 문법이란 글자에 설탕이라는 달콤한 것이 섞여들어간 느낌이다.
> 사람이 이해하고 표현하기 쉽도록 디자인된 프로그래밍 언어 문법, 프로그래밍된 언어를 좀 더 간결하고 명확하게 표현할 수 있도록 도와주는 문법을 말한다.

해당 언어의 문법을 기존보다 좀 더 사람이 이해하기 쉽도록 또는 개발자가 사용하기 용이하도록 변경한 것이다.
이미 있는 문법에서 달콤하게 바꾼다는 게 뭔지 이해가 안 될 수 있으니 예제를 보자.

### switch
```js
let color = 'RED';
let text = 'error';
switch(color) {
  case 'BLUE':
    text = 'SUCCESS';
    break;
  case 'RED':
    text = 'ERRROR'
    break;
  default
}
```
위는 평범한 switch 문법이다. swich는 간단한 문법에 속하기는 한다. 하지만 좀 더 달콤하게 바꿀 수 있는데
```js
let color = 'RED';
let text = color === 'BLUE' ? 'SUCCESS' : 'ERROR';
```
훨씬 간결해졌다. 이처럼 원래 문법을 좀 더 달콤하게 한 것을 문법적 설탕이라고 부르는데 좀 더 살펴보자.

### arrow function
흔히 사용되는 화살표 함수도 일반 함수보다 표현식을 좀 더 간단하게 쓸 수 있으니 문법적 설탕에 포함된다.
```js
function add(x, y) {
  return x + y;
}
```
```js
const add = () => x + y;
```

### Object literals
```js
const obj = {
  name: 'woonrin',
  age: 19,
};
```
```js
const name = 'woonrin';
const age = 19;
const obj = { name, age };
```

### Destructuring Assignment
```js
const arr = [1, 2];
const obj = {
  name: 'woonrin',
  age: 19,
};

const first = arr[0];
const second = arr[1];
const name = obj.name;
const age = obj.age;
```
```
const arr = [1, 2];
const obj = {
  name: 'woonrin',
  age: 19,
};

const [first, second] = arr;
const { name, age } = obj;
```

* 이외에도 js에는 많은 문법적 설탕이 있다.

## 과유불급
설탕은 많이 먹을수록 당뇨에 걸리는 것과 같이 지나치게 많은 문법적 설탕은 독이 된다.
개발 속도나 가독성 면으로 좋을 지는 몰라도 양이 점점 많아지면 몇몇 문법적 설탕은 약간의 이해를 필요로 하게 된다.
나는 이정도면 알 수 있겠지라고 작성한 문법이 다른 개발자에겐 이해를 요구하는 문법일 수 있으니 잘 생각하며 사용하자.
