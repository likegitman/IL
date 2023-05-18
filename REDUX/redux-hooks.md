# Redux의 유용한 Hooks들

## useSelector
> connect함수를 사용하지 않고도 redux의 상태를 조회할 수 있는 hooks이다.
> 상태 선택 함수의 형태는 mapStateProps의 형태와 같다.

## useDispatch
> 컴포넌트 내부에서 store의 내장 함수인 dispatch를 사용할 수 있게 해준다. Container Components에서  
> action을 dispatch해야할 때 주로 사용한다.

### useSelector, useDispatch
```javascript
import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from "../modules/counter";

function CounterContainer() {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    
    const onIncrease = useCallback(()=>{
        dispatch(increase());
    }, [dispatch]);

    const onDecrease = useCallback(()=>{
        dispatch(decrease());
    }, [dispatch]);
    
    return (
        <Counter number={number} />
    );
}

export default CounterContainer;

// react-redux hooks 사용 전
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease,
//     }
// )(CounterContainer);
```
