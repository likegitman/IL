# Redux Toolkit

## createSlice
> reducer 함수의 객체와 slice 이름, 초기 상태 값을 받아들이고 해당 action 생성자와  
> acton 유형으로 slice reducer를 자동으로 생성한다.

### Example
1. name : createSlice를 통해 slice를 생성하게 되는데, 내부적으로 중복을 피하기 위해서 사용하는 값.
   
2. initialState : default 값이면서 상태 관리에 사용되는 type이다. interface로 type을 지정하고  
                  initialState의 값을 초기화를 시켜준다.

3. reducers : 상태 변화를 처리하는 함수를 정의한다. 정의하는 함수의 이름은 dispatch로 부르는  
              action 함수의 이름이고 함수의 내부는 아래와 같이 state의 상태 값을 변경하는 처리를 해준다.

4. 후처리 : createSlice로 생성된 counterSlice의 actions를 export시켜서 외부에서 action함수를 호출할 수 있게한다.
            reducer 또한 export 시켜서 store에 reducer를 등록할 수 있게한다. 
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // 직접 값을 변경하기에 전개구문이 필요없다.
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

// 비구조화 할당 문법
export const {increase, decrease} = counterSlice.actions;

export default counterSlice.reducer;
```

## configureStore
1. reducer : redux sotre의 rootReducer를 설정함.
2. middleware : redux-logger와 같은 redux-middleware를 설정함.  
   middleware를 설정한 경우엔 자동으로 applyMiddleware에 전달.  
   미들웨어를 설정하지 않은 경우엔 getDefaultMiddleware를 호출.  
3. devTools : Redux-DevTools 사용 여부를 설정함. 기본값은 true.
4. preloadedState : redux store의 초깃 값을 설정함.
5. enhancers : 사용자 정의 middleware를 설정함. callback 함수로 설정하면 middleware의 적용 순서를 정의함. 
```js
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";

const logger = createLogger();

const rootReducer = combineReducers({
    counterSlice,
    todosSlice,
});

const initialState = {};

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            logger
        ),
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export default store;
```
