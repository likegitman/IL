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

# useReducer를 이용한 입출금 시스템
```
import React, { useReducer, useState } from 'react';

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - dispatch의 요구내용

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
};

function reducer(state, action) {
    console.log("reducer 작동!", state, action);
    switch (action.type) {
        case ACTION_TYPES.deposit:
            if(action.payload===0){
                alert('0원은 입금하실 수 없습니다.');
                return state;
            }
            return state + action.payload;
        case ACTION_TYPES.withdraw:
            if (state === 0 ) {
                alert('잔고가 0원입니다.');
                return state;
            } else if (action.payload === 0) {
                alert('0원은 출금하실 수 없습니다.');
                return state;
            } else if(action.payload>state) {
                alert('출금하시는 금액이 잔고보다 많습니다.');
                return state;
            } else {
                return state - action.payload;
            }
        default:
            return state;
    }
}

function ReduBank() {
    const [num, setNum] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    const onChange = (e) => {
        setNum(parseInt(e.target.value));
    };

    return (
        <div>
            <h2>useReducer 은행에 오신것을 환엽합니다!</h2>
            <p>통장 잔고: {money}원</p>
            <input
                type="number"
                value={num}
                onChange={onChange}
                step="1000"
            />
            <button onClick={() => {
                dispatch({ type: ACTION_TYPES.deposit, payload: num });
                setNum(0);
            }}>예금</button>
            <button onClick={() => {
                dispatch({ type: ACTION_TYPES.withdraw, payload: num });
                setNum(0);
            }}>출금</button>
        </div>
    );
}

export default ReduBank;
```

# useReducer를 이용한 출석부 
