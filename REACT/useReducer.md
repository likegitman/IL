# useReducer
1. useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를  
다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook이다.

2. 아래 reducer는 현재상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아  
   새로운 상태를 반환하는 함수이다.
   
```
function reducer(state, action) {
   return { ... }
}
```
# useReducer를 이용한 Counter

## App.js
```
import ReduCounter from "./ReduCounter";

function App() {
  return (
    <div>
      <ReduCounter />
    </div>
  );
}

export default App;
```

## ReduCounter.js
```
import React, { useReducer } from 'react';

function reducer(state, action){
    // action.type에 따라 다른 작업 수행
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};

        case 'DECREMENT':
            return {value: state.value - 1};

        default:
            // 아무것도 해당되지 않을 때 기존 상태 변환
            return state;
    }
}

function ReduCounter (){
    const [state, dispatch]=useReducer(reducer, {value: 0});
    
    return (
        <div>
            <p>
                현재 카운터 값은  <b>{state.value}</b>입니다.
            </p>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default ReduCounter;
```

# useReducer를 이용한 Input 상태 관리

## App.js
```
import ReduInfo from "./ReduInfo";

function App() {
  return (
    <div>
      <ReduInfo />
    </div>
  );
}

export default App;
```

## ReduInfo.js
```
import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const ReduInfo=()=> {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nikname: "",
  });

  const { name, nikname } = state;

  const onChange = (e) => {
    // useReducer는 어떤 값도 사용할 수 있어 e.target.value를 안 해도 된다.
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nikname" value={nikname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {name} <br />
        <b>닉네임:</b> {nikname}
      </div>
    </div>
  );
}

export default ReduInfo;

```
