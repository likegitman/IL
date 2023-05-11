# Module
> Redux의 파일구조 중 Ducks패턴을 사용해서 modules폴더 안에 액션 타입, 액션 생성 함수, 리듀서를  
> 작성한 코드를 모듈이라고 한다.


# Example
```javascript
// src/modules/counter.js

// 액션타입을 정의하고 문자열안에 module이름을 넣음으로써 액션의 이름이 충돌되지 않게한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// export를 붙여 다른 파일에서 action 생성 함수를 불러올 수 있다.
export const increase = () => ({type: INCREASE"});
export const decrease = () => ({type: DECREASE"});

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

## rootReducer
> createStore함수를 사용하여 store를 생성할 때 리듀서는 하나만 사용해야한다.  
> 만약 리듀서가 여러개라면 rootReducer파일을 만들고 combineReducers함수를 사용하여 기존의 리듀서들을 하나로 합칠 수 있다.
```
// src/modules/index.js

import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
    counter,
})

export default rootReducer;
```
