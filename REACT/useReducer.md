# useReducer

1. useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를  
다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook이다.

2. 아래 reducer는 현재상태 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아  
   상황에 따라 새로운 상태를 반환하는 함수이다.
   
```javascript
function reducer(state, action) {
   switch(action.type){
      return { ... }
   }
}
```

## 구성요소
* Dispatch - state 업데이트를 위한 요구를 하는 역할
* Action - dispatch의 요구내용
* Reducer - dispatch의 action값을 받아 state를 업데이트 하는 역할

# useReducer를 이용한 Counter

## ReduCounter.js
```javascript
import React, { useReducer } from 'react';

// 오타 방지
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

function reducer(state, action){
    // action.type에 따라 다른 작업 수행
    switch(action.type){
        case INCREASE:
            return state + 1;

        case DECREASE:
            return state - 1;

        default:
            // 아무것도 해당되지 않을 때 기존 state 반환
            return state;
    }
}

function ReduCounter (){
    const [state, dispatch]=useReducer(reducer, 0);
    
    return (
        <div>
            <p>
                Counter : <b>{state}</b>입니다.
            </p>
            <button onClick={()=>dispatch({type: INCREASE})}>+1</button>
            <button onClick={()=>dispatch({type: INCREASE})}>-1</button>
        </div>
    );
};

export default ReduCounter;
```

# useReducer를 이용한 Input 상태 관리

## ReduInfo.js
```javascript
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
    // useReducer는 어떤 값 사용할 수 있어 e.target.value를 안 해도 된다.
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
```javascript
import React, { useReducer, useState } from 'react';

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

# useReducer를 이용한 출석부 (여러개의 state다루기)

# ReduAttendance.js
```javascript
import React, { useReducer, useState } from 'react';
import StudentList from './StudentList';

const initialState = {
    cnt: 0,
    students: [
        // Objects
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'Add':
            const name = action.payload.name;
            const newStudents = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                cnt: state.cnt + 1,
                students: [...state.students, newStudents],
            };
        case 'Delete':
            return {
                cnt: state.cnt - 1,
                students: state.students.filter((student) => student.id !== action.payload.id),
            };
        case 'Mark':
            return{
                cnt: state.cnt,
                students: state.students.map((student)=>{
                   if(student.id===action.payload.id){
                    return{
                        ...student,
                        isHere: !student.isHere,
                    };
                   } else{
                    return student;
                   }
                }),
            };
        default:
            return state;
    }
}


function ReduAttendance() {

    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수: {studentsInfo.cnt}명</p>
            <input
                type='text'
                placeholder='이름을 입력해주세요.'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({ type: 'Add', payload: { name } });
                setName('');
            }}>출석</button>
            {studentsInfo.students.map((student) => {
                return (
                    <StudentList
                        key={student.id}
                        name={student.name}
                        id={student.id}
                        dispatch={dispatch}
                        isHere={student.isHere}
                    />
                );
            })}
        </div>
    );
}

export default ReduAttendance;
```

## StudentList.js
```javascript
import React from 'react';

function StudentList({name, dispatch, id, isHere}) {
    return (
        <div>
            <span style={{
                color: isHere?'lightgray': 'black',
                textDecoration: isHere?'line-through' : 'none',
                cursor: 'pointer',
            }}
            onClick={()=>{
                dispatch({type: 'Mark', payload: {id}});
            }}
            >{name}</span>
            <button onClick={()=>{
                dispatch({type: 'Delete', payload: {id}})
            }}>삭제</button>
        </div>
    );
}

export default StudentList;
```
