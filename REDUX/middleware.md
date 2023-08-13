# Middleware
> dispatch된 action이 reducer에 도달하기 전에 중간영역에서 사용자의 목적에 맞게 기능을  
> 확장할 수 있도록 돕는다. 예시로 `redux-logger`는 action이 dispatch 될 때마다  
> 개발자 도구 console에 log가 찍히는 것을 예시로 들 수 있다. action이 reducer에 도달하기전에  
> log를 출력하는 과정이 중간에 추가된 것이기 때문이다.

## 구조
```js

// Arrow Function
const middleWare => store => next => action => {
  // 미들웨어의 기본구조
}

// Function
const middleWare = function middleWare(store) {
  return function(next) {
    return function(action) {
      // 미들웨어의 기본구조
    }
  }
}
```
> 위 코드에서 알 수 있듯이 middleware는 함수를 반환하는 함수를 반환하는 함수이다.  
> 위 코드의 파라미터들을 설명하자면 store는 redux store instance, action은 dispatch된 action을 가리킨다.  
> next는 함수의 형태로 store.dispatch와 비슷한 역할을 한다. 이 둘의 차이점은 next(action)을 호출하면 그 다음에  
> 처리해야 할 middleware에게 action을 넘겨주고, 그 다음 middleware가 없다면 reducer에게 action을
> 넘겨준다는 것을 의미한다.  

## redux-thunk
> redux에서 할 수 없는 네트워크 요청 기능에 도움을 주는 `middleware` 중에서 가장 많이 사용하는  
> `middleware`이다. redux-thunk는 action대신 함수를 반환하는 action creator를 쓸 수 있게 해준다.  
> 또, action의 dispatch를 지연시키는데 사용될 수 있으며 특정 조건이 충족될 때만 dispatch할 수 있다.

### Redux가 API 호출이 안 되는 이유
1. async await로 호출할 때
> `action must be plain objects. Use custom middleware for async actions`.  
> 이런 오류가 뜨는데 이 오류가 발생하는 이유는 action은 일반 객체(plain object)여야 한다.  
> 하지만 async await는 아주 큰 함수이다. 그래서 이 함수가 종료된 후 반환되는 return 값이  
> 일반 객체이고 reducer로 dispatch 되는 최초의 action 형태는 일반 객체(plain object)가 아니고  
> async await의 함수 형태이기 때문이다.

2. promise로 호출할 때
> action creator를 호출하고 action이 dispatch 되어 reducer로 이동할 때 API요청을 promise로 작성하면  
> 이러한 모든 단계는 순신간에 실행된다. 이 말은 Promise를 사용해 너무 순식간에 실행돼 반환되는 데이터가  
> 아직 없다고 판단한다는 것이다.

### Thunk가 호출이 가능한 이유
> `redux-thunk`는 action을 반환할 때 객체가 아닌 함수를 반환할 수 있게해주는데 이 말은 redux-thunk는
> dispatch 된 action이 함수인지 아닌지 판단하고 만약 action이 함수라면 계속 그 함수를 실행하고 함수가 아니라면
> 즉, 객체가 되었을 때 reducer로 dispatch된 action을 보낸다.

## redux-saga
> `redux-thunk` 다음으로 많이 쓰이는 `middleware`이다. `redux-saga`는 비동기적으로 API를 호출하여  
> 데이터를 가져오는 일과 같은 부수 효과 (Side Effect)를 쉽게 처리하기 위해 사용된다. 예를들어 때에 따라  
> 기존 요청을 취소해야하거나 여러개의 API를 순차적으로 호출해야하는 등의 까다로운 비동기 작업을 다룰 때  
> `redux-saga`를 많이 사용한다.

## Example
[예제](https://github.com/likegitman/Redux-Middleware-practice)
