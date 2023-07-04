# Redux Saga
> `Redux Thunk` 다음으로 가장 많이 사용되고 있는 `Redux Saga`는 리액트나 리덕스 Application에서
> 비동기적으로 API를 호출하여 데이터를 가져오는 일과 같은 사이드 효과를 쉽게 처리하기 위햐여
> 사용하는 라이브러리이다. 때에 따라서 기존의 요청을 취소 처리해야 한다거나 여러 개의 API를 순차적으로
> 호출해야 하는 등의 까다로운 비동기 작업을 다루는 것에 유용하다. `Redux saga`는 제너레이터라는 기능을
> 사용하여 사이드 효과를 처리한다. [제너레이터](/JAVASCRIPT/generator.md)

## Effect 함수

### fork
> 매개변수로 전달된 함수를 비동기적으로 실행한다. 비동기적으로 실행되어서
> blocking이 발생하지 않는 새로운 맥략의 Saga 작업을 생성하게 된다.

### call
> 매개변수로 전달된 동기나 비동기 함수를 실행한다. 전달받은 함수가 비동기 함수라면
> 해당 함수가 수행 될 때까지 기다렸다가 결괏값을 반환하여 blocking이 발생한다.

### put
> action을 dispatch한다. 일반적으로 Worker Saga에서 API 성공과 실패의 여부에 따라서
> 상태를 반영하기 위해서 reducer에 action을 dispatch 하는 용도로 많이 사용된다.

### takeEvery
> action이 dispatch 될 때마다 새로운 작업분기를 한다. 작업이 동시에 중복으로 발생해도
> 문제가 없는 경우에 사용해야한다.

