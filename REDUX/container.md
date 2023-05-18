# Container
> redux store에 접근하여 원하는 상태를 받아오고, 액션도 dispatch해줄 수 있는 역할을하고  
> redux sotre와 연동된 컴포넌트를 Container Component라고 한다

# connect
> Container Component를 redux와 연동하려면 connect함수를 사용해야한다.
`connect(mapStateProps, mapDispatchProps)(연동할 컴포넌트)` 식으로 사용한다.

# Example
```javascript
import Counter from "../components/Counter";
function CounterContainer({number, increase, decrease}) {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}

const mapStateProps = (state) => ({
  number: state.counter.number,
});

const mapDipatchProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  mapStateProps,
  mapDispatchProps,
)(CounterContainer);
```

## bindActionCreators
> action을 dispatch하기 위해서 각 action 생성 함수를 호출하고 dispatch로 감싸는 작업은  
> 번거로울 수 있는데 action생성 함수가 많아진다면 훨씬 번거로울 것이다. 그럴 때 bindActionCreators를 사용하면  
> 번거로운 작업을 줄일 수 있다.
```javascript
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => 
    bindActionCreators(
      {
        increase,
        decrease,
      }
    )
)
```
> mapDispatchProps에 해당하는 파라미터를 함수 형태가 아닌 action생성 함수로 이루어진 객체 형태로 넣어주면  
> connect함수가 bindActionCreators 작업을 대신해 준다.
```
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
      increase,
      decrease,
   }
  )
)
```

## useSelector, useDispatch
> connect함수를 사용하지 않고도 redux의 상태를 조회할 수 있는 hooks이다.  
> 상태 선택 함수의 형태는 mapStateProps의 형태와 같고  
> 컴포넌트 내부에서 store의 내장 함수인 dispatch를 사용할 수 있게 해준다. Container Components에서  
> action을 dispatch해야할 때 주로 사용한다.
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
