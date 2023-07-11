# Middleware
> dispatch된 action이 reducer에 도달하기 전에 중간영역에서 사용자의 목적에 맞게 기능을  
> 확장할 수 있도록 돕는다. 예시로 `redux-logger`는 action이 dispatch 될 때마다  
> 개발자 도구 console에 log가 찍히는 것을 예씨로 들 수 있다. action이 reducer에 도달하기전에  
> log를 출력하는 과정이 중간에 추가된 것이기 때문이다.

# 구조
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
> 처리해야 할 middleware에게 action을 넘겨주고, 그 다음 middleware가 없다면 reducer에게 action을 넘겨준다는 것을  
> 의미한다.
