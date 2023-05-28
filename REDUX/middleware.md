# Middleware
> redux에서 비동기 작업을 위한 기능이기 때문에 action을 dispatch했을 때 reducer에서 이를 처리하기전에  
> 사전에 지정된 작업들을 실행한다. 따라서 middleware는 action과 reducer사이의 중간자 역할이라고 할 수 있다.

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
