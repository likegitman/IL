# Redux Thunk
> redux를 사용하는 프로젝트에서 비동기 작업을 처리할 때 가장 기본적으로 사용하는 미들웨어이다.  
> 객체가 아닌 함수 형태의 action을 dispatch할 수 있게 해준다.  
> Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.

## Thunk

### Example
```js
const addOne = x => x + 1;
const addOneThunk = x => () => addOne(x);

const fn = addOneThunk(1);
setTimeout(()=> {
  const value = fn(); // fn이 실행되는 시점에 연산한다.
  console.log(value);
}, 1000);
```

## redux-thunk
```js
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// thunk 생성 함수
export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

// thunk 생성 함수
export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
  }
};

export default counter;
```
> 위와 같이 코드를 치면 state의 값이 1초 뒤에 변하게 된다
