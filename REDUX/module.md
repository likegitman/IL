# Module
> Redux의 파일구조 중 Ducks패턴을 사용해서 modules폴더 안에 액션 타입, 액션 생성 함수, 리듀서를  
> 작성한 코드를 모듈이라고 한다.

## Example

### reducer
```javascript
// src/modules/counter.js

// 액션타입을 정의하고 문자열안에 module이름을 넣음으로써 액션의 이름이 충돌되지 않게한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// export를 붙여 다른 파일에서 action 생성 함수를 불러올 수 있다.
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// reducer함수의 초기상태
const initialState = 0;

// reducer 함수
function counter(state, action) {
  switch(action.type) {
    case INCREASE:
      return {
        number: state + 1
      };
     case DECREASE:
       return {
         number: state - 1
       };
      default:
        return state;
  }
}

export default counter;
```

### rootReducer
> createStore함수를 사용하여 store를 생성할 때 리듀서는 하나만 사용해야한다.  
> 만약 리듀서가 여러개라면 rootReducer파일을 만들고 combineReducers함수를 사용하여 기존의 리듀서들을 하나로 합칠 수 있다.
```javascript
// src/modules/index.js

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos  
})

export default rootReducer;
```

### 프로젝트에 store 적용하기
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore } from 'redux';
import App from './App';
import rootReducer from './modules';

// store 생성
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider를 이용해 store를 프로젝트에 적용시킨다.
  // Provider는 store를 props로 전달해 주어야한다.
  <Provider store={store}>
    <App />
  </Provider>
);
```

## createAction
> createAction을 사용하면 매번 객체를 직접 만들어 줄 필요없이 간단하게 action 생성 함수를 만들 수 있다.  
> 단, 타입을 정의한다면 상관없지만 타입을 변수로 만들지 않고 createAction을 사용하면 action 생성 함수의  
> type으로 접근을 할 수 있다.
```js
import {createAction} from "react-actions";

export const increase = createAction("counter/INCREASE");
export const decrease = createAction("counter/DECREASE");

const initialState = {
    number: 0
};

const counter = (state = initialState, action) => {
    switch(action.type) {
        case increase.type:
          return {
            number: state.number + 1,
          };
        case decrease.type:
          return {
            number: state.number - 1,
          }
        default:
          return state;
    }
}

export default counter;
```

## handleAction(s)

> handleAction을 사용하여 각 액션마다 업데이트 함수를 `switch/case`문이 아닌 간단하게 코드를 짤 수 있다.
> 단, 다루어야하는 업데이트 함수가 여러개라면 handleActions를 사용해야하고 handleAction을 사용하면 오류가 발생한다.
```javascript
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0,
}

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({
            number: state.number + 1,
        }),
        [DECREASE]: (state, action) => ({
            number: state.number - 1,
        }),
    },
    initialState
);

export default counter;
```
