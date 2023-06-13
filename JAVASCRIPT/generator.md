# Generator Function

## 문법
> 제너레이터 함수의 문법에서 중요한 점은 함수를 작성할 때 함수를 특정 구간에 멈춴 놓을 수도 있고  
> 원할 때 다시 돌아가게 할 수 있다는 것이다.

### 일반 함수
```js
function myFunction() {
  return 1;
  return 2;
  return 3;
  return 4;
  return 5;
}
```
> 일반함수는 하나의 값 혹은 0개의 값을 반환한다. 따라서 위 코드처럼 값을 여러개 반환하는 것은 불가능하다.  
> 위 함수를 실행시키면 반환되는 값은 맨 위의 값 1만이 반환된다.

### 제너레이터 함수
```js
function* generatorSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}
```
> 제너레이터 함수라면 함수에서 값을 __순차적__ 으로 반환할 수 있다.  
> 제너레이터 함수를 만들 때는 `function*`이라는 키워드를 사용하며, 이 함수를 호출하면 코드가 실행되지 않고  
> 실행을 처리하는 특별한 객체인 제너레이터 객체가 반환된다.

## next
> 제너레이터의 주요 메서드이다. `next()`를 호출하면 가장 가까운 `yield <value>`문을 만날 때까지 실행이 지속된다.  
> 이후 `yield <value>`문을 만나면 실행이 멈추고 산출하고자 하는 값인 `value`가 바깥 코드에 반환되고 `next()`는 항상  
> 2개의 property를 가진 객체를 반환한다. -> `value: 산출값, done: 함수 코드 실행이 끝났으면 true, 아니라면 false`  
```js
function* generatorSequence() {
  console.log("하나");
  yield 1;
  console.log("둘");
  yield 2;
  console.log("셋");
  yield 3;
  console.log("넷");
  return 4;
}

const generator = generatorSequence();

generator.next();
// output:
// "하나"
// {value: 1, done: false}
generator.next();
// output:
// "둘"
// {value: 2, done: false}
generator.next();
// output:
// "셋"
// {value: 3, done: false}
generator.next();
// output:
// "넷"
// {value: 4, done: true}
generator.next();
// output: {value: undefined, done: true}
```
> yield를 만날 때 마다 멈추는 것을 볼 수 있고 함수 코드가 끝나는 return문을 만날 때까지 done의 값은 false이다.  
> 제너레이가 처음 만들어질 때는 함수의 흐름이 멈춰있지만 `next()`가 호출되면 다음 yield가 있는 곳까지 호출하고 다시 함수가 멈춘다.  
> 이렇게 제너레이터 함수를 사용하면 함수를 도중에 멈출 수도 있고 순차적으로 여러 값을 반환시킬 수도 있다.
