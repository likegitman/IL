# React.memo

1. React에서 제공하는 고차 컴포넌트(Higher Order Component)이다.
> 컴포넌트를 인자로 받아 새로운 컴포넌트(최적화 컴포넌트)를 반환.

2. 부모 컴포넌트로부터 자식 컴포넌트에게 전달 된 props를 검사한다. 
> props가 변경 됐을때만 렌더링 시키고 아니라면 재사용을 하는 원리를 이용해  
> 자식 컴포넌트가 무분별하게 렌더링 되지 않게하는 효율적인 기능.

3. props의 변화에만 의존하는 최적화 방법이다.

# 언제 사용?
> 무분별하게 사용하면 Memoization의 특성 때문에장저장공간을 낭비할 수 있음
1. 컴포넌트가 같은 props로 자주 렌더링 될 때
2. 컴포넌트가 렌더링이 될때마다 복잡한 logic을 처리해야할 때

# Example

## MemoParent.js
```javascript
import React, { useState } from 'react';
import MemoChild from './MemoChild';

function MemoParent() {
    const [parentAge, setParentAge] = useState(0);
    const [childAge, setChildAge] = useState(0);
    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    const incrementChildAge = () => {
        setChildAge(childAge + 1);
    };

    console.log("👪부모 컴포넌트가 렌더링 되었습니다!")

    return (
        <div style={{
            border: "2px solid navy",
            padding: "10px"
        }}>
            <h1>👪부모</h1>
            <p>Age: {parentAge}</p>
            <button onClick={incrementParentAge}>부모의 나이 증가</button>
            <button onClick={incrementChildAge}>자녀의 나이 증가</button>
            <MemoChild
                name={"홍길동"}
                age={childAge}
            />
        </div>
    );
}

export default MemoParent;
```

## MemoChild.js
> memo를 사용하지 않는다면 부모의 parentAge가 업데이트 될 때 자식 컴포넌트는  
> 업데이트 되는게 하나도 없는데 자식 컴포넌트도 렌더링이 된다  
> memo를 사용함으로서 props인 name과 age를 검사해 parentAge가 업데이트 되어도  
> 자식 컴포넌트는 렌더링 되지 않는다.(childAge가 업데이트 된다면 렌더링 됨)
```javascript
import React, {memo} from 'react';

function MemoChild({name, age}) {
    console.log("자녀 컴포넌트도 렌더링 되었습니다!");

    return (
        <div style={{
            border: "2px solid powderblue",
            padding: "10px"
        }}>
            <h2>👶자녀</h2>
            <p>name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default memo(MemoChild);
```
