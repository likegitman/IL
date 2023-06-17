# Redux Thunk
> redux를 사용하는 프로젝트에서 비동기 작업을 처리할 때 가장 기본적으로 사용하는 미들웨어이다.
> 객체가 아닌 함수 형태의 action을 dispatch할 수 있게 해준다.
> Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.

# Example
```js
import { createAction, handleActions } from "redux-actions";

const INCREASE = "todos/INCREASE";
const DECREASE = "todos/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1,
  },
  initialState
);

export default counter;
```
> 위와 같이 코드를 치면 counter의 값이 1초 뒤에 변하게 된다.