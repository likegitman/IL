# apply
`func.apply([thisObj [,argArray]]);`
apply는 첫 번째 인자로 thisObj라는 현재 객체로 사용될 객체를 전달 받다.
이 자리에는 말 그대로 객체를 전해도 되고 this, null 등의 값을 넘길 수 있다.
객체를 넘긴다면 해당 함수 안에서 this는 전달한 객체를 가리킨다.

두 번째로는 배열을 전달 받는데 이 배열의 요소들은 함수의 인수들의 집합이다.
```js
function mulFn(num1, num2) {
  return num1 * num2;
}

console.log(mulFn(2, 3)); // 6
console.log(mulFn.apply(this, [2, 3])); // 6
```

# call
`func.call([thisObj [, arg[, arg[, ...]]]]);`
call은 첫 번째 인자로 apply와 같은 값을 받는다.
두 번째 인자로는 apply같이 배열이 아니라 요소 하나하나를 받는다.
```js
function mulFn(num1, num2) {
  return num1 * num2;
}

console.log(mulFn(2, 3)); // 6
console.log(mulFn.call(2, 3)); // 6
```
bind를 알기 전에 중요한 것이 있다. 사실 위 코드들로는 왜 사용하는 지 이해가 안 될 수 있지만
사용하는 경우가 있다. 위 같이 딱히 this를 사용할 필요가 없다면 그저 일반적인 호출을 하는 것이 낫다.
```js
const name = 'woonrin';
const obj1 = { name: 'mike' };
const obj2 = { name: 'john' };

function printName(say) {
  console.log(`${this.name} ${say}!);
}

printName('hello'); // woonrin hello!
printName.call(this, 'hello'); // woonrin hello!
printName.call(obj1, 'bye'); // mike bye!
printName.call(obj2, 'good'); // john good!
```
이렇게 call을 사용하면 첫 번째 인자로 this가 가리키는 객체를 변경시킬 수 있습니다.

이렇듯 apply와 call의 기능은 동일하다. 위 예시들의 call을 apply로 바꿔도 똑같이 동작하지만
두 번째 인자로 받는 요소가 다를 뿐이다.
# bind
bind는 apply와 인자를 전달받는 방식이 같고 기능은 같다고 할 수 있지만 차이점이 있다.
apply와 call은 호출하는 즉시 실행이 되지만 bind는 할당을하고 할당된 변수를 실행시켜야 한다.
```js
const obj = { name: 'woonrin' };
const say = function(say) {
  console.log(`${this.name} ${say}`);
}

const bindSay = say.bind(obj, 'hello');
bindSay(); // woonrin hello
```
