# Redux Toolkit

## createReducer()
> 상태에 변화를 일으키는 reducer 함수를 생성하는 util함수이다. 내부적으로 `immer라이브러리를
> 사용하기에 `state.loading = false`식으로 작성해도 불변 업데이트가 이루어진다.
> 인자로 주어지는 builder객체는 addCase, addMacher, addDefaultCase라는 메서드를 제공한다.
> 그리고 각 함수에서 action을 reducer에서 어떻게 처리할지를 결정한다.

```js
const initialState = {
  todo: [
    {id: 1, text: "redux 공부하기", isDone: false},
    {id: 2, text: "react 심화", isDone: true},
  ]
};

const todos = createReducer(state = initialState, (builder) => {
  builder.addCase('TOGGLE', (state, action) => {
    const newTodo = state.todo.find((item) => item.id === action.id);
    newTodo.isDone = !newTodo.isDone;
  })
});
```
### builder 표기법
```js
// 라인마다 builder 메서드 호출
const initialState = [];
const todos = createReducer(state = initialState, (builder) => {
  builder.addCase(increment, (state, action)) => {})
  builder.addCase(increment, (state, action)) => {})
});

// 메서드 호출을 연속적으로 작성
const todos = createReducer(state = initialState, (builder) => {
  builder
  .addCase(increment, (state, action)) => {})
  .addCase(increment, (state, action)) => {})
});
```

## createAction
> 기존의 action 생성함수는 type이나 payload를 객체 형태로 일일이 써야 했지만 createAction을 사용하면  
> 훨씬 간단하게 action 생성함수를 작성할 수 있다.
### Example

#### original
```js
const INCREAMENT = "counter/INCREMENT"
const increase = (number) => {
  type: INCREMENT,
  payload: number
};

const action = increase(5);
console.log(action);
// {type: 'counter/INCREAMENT', payload: 5}
```

#### createAction
```js
import { createAction } from '@reduxjs/toolkit';

const INCREAMENT = "counter/INCREMENT";

const increase = createAction(INCREAMENT);

const action = increase(5);
console.log(action);
// {type: 'counter/INCREAMENT', payload: 5}
```
```js
import { createAction } from '@reduxjs/toolkit';

const ADD = 'todos/ADD';

const addTodo = createAction(ADD, (text) => {
  id: new Date(),
  text,
  isDone: false
});

const action = addTodo("redux toolkit 공부하기");
console.log(action);
/*
{
  type: 'todos/ADD',
  payload: {
    id: 2023-07-15T07:24:20.177Z,
    text: 'redux toolkit 공부하기',
    isDone: false
  }
}  
*/
```

## createSlice
> reducer 함수의 객체와 slice 이름, 초기 상태 값을 받아들이고 해당 action 생성자와  
> acton 유형으로 slice reducer를 자동으로 생성한다.

### 인자
#### 1. name
createSlice를 통해 slice를 생성하게 되는데 내부적으로 중복을 피하기 위해서 사용하는 값이다.

#### 2. initialState
default 값이면서 상태 관리에 사용되는 type이다. interface로 type을 지정하고 initialState의 값을 초기화 시켜준다.

#### 3. reducers
상태 변화를 처리하는 함수를 정의한다. 정의하는 함수의 이름은 dispatch로 부르는 action 함수의 이름이고  
함수의 내부는 아래와 같이 state의 상태 값을 변경하는 처리를 해준다.

#### 4. 후처리
createSlice로 생성된 counterSlice의 actions를 export시켜서 외부에서 action함수를 호출할 수 있게한다.  
reducer 또한 export 시켜서 store에 reducer를 등록할 수 있게한다.

### Example
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

### 인자
#### 1. reducer
redux sotre의 rootReducer를 설정한다.
#### 2. middleware 
redux-logger와 같은 redux-middleware를 설정한다. middleware를 설정한 경우엔 자동으로 applyMiddleware에 전달한다.  
미들웨어를 설정하지 않은 경우엔 getDefaultMiddleware를 호출.
#### 3. devTools 
Redux-DevTools 사용 여부를 설정하고 기본값은 true이다.
#### 4. preloadedState
redux store의 초깃 값을 설정한다.
#### 5. enhancers
사용자 정의 middleware를 설정하고 enhancers를 callback 함수로 설정하면 middleware의 적용 순서를 정의한다.

### Example
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

## createAsyncThunk
> redux toolkit에서 제공하는 유틸리티 함수, redux에서 비동기 작업을 처리하는 action 생성함수를
> 생성하는 데에 사용된다. 비동기 작업을 위한 action들을 쉽고 정의하고 처리할 수 있다.

### 인자
`createAsyncThunk(typePrefix, payloadCreator, options);`
#### 1. typePrefix
생성되는 액션 타입의 접두사(prefix)로 된다. 비동기 작업에 대한 성공, 실패, 진행 중인 상태에 대한 액션들이 자동으로 생성되는데  
이 접두사를 기반으로 액션 타입이 생성된다.
#### 2. payloadCreator
비동기 작업의 페이로드 값을 생성하는 함수이다. dispatch와 getState를 인자로 받아서 비동기 작업을 수행하고  
그 결과를 액션의 페이로드로 반환해야 한다.
#### 3. options
createAsyncThunk에 대한 추가적인 설정을 제공하는 객체이다. 예를 들어 loading이라는 액션을 발생시킬 때 사용할 액션 타입이나  
에러 처리 방식 등을 설정할 수 있다.

### Example
```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
);

const initialState = {
  entities: [],
  loading: 'idle',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    })
  },
});

export default usersSlice.reducer;
```
