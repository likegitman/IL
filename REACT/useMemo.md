# useMemo와 useCallback을 이해하기 전에 알아야 되는 것
> 리액트는에서 컴포넌트가 렌더링 된다면 함수가 실행될 때마다 내부에 선언되어있던 표현식도 매번  
> 다시 선언되어 사용되는데 자신의 sate가 바뀌거나 부모에게서 받는 props가변경되었을 때마다 리렌더링이된다.  
> 심지어 하위 컴포넌트에 React.memo와 같은 최적화를 설정하지 않으면 받는 props가 변경되지 않아도 컴포넌트가  
> 렌더링이 되는것이 기본이다.

# useMemo
> 메모리제이션 된 __값__ 을 반환한다. 만약 부모로부터 자식 컴포넌트는 props a와 b를 받고 자식은  
> a와 b를 다른 함수로 각각의 값을 가공한 새로운 값을 보여준다. 그런데 부모로부터 받은 props중에 a만 변경이 됐는데  
> b도 새로 가공되어진다. 변하지 않았으면 이전의 값을 쓰면되는데, 그럼에도 b는 새로운 값을 사용한다. 이럴 때 사용하는 것이  
> useMemo이다. (이러한 상황은 자기자신의 값의 경우에도 해당한다.)

# Example

## 부모 props가 변경됐을 때

### App.js
```
import { useState } from 'react';
import Select from './components/Select';

function App() {
  const [color, setColor] = useState("");
  const [fruit, setFruit] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "color") {
      setColor(e.target.value);
    } else {
      setFruit(e.target.value);
    }
  };

  return (
    <div>
      <p>색깔</p>
      <select id='color' value={color} onChange={handleChange}>
        <option>빨강</option>
        <option>파랑</option>
        <option>노랑</option>
      </select>

      <p>과일</p>
      <select value={fruit} onChange={handleChange}>
        <option>사과</option>
        <option>포도</option>
        <option>바나나</option>
      </select>
      <Select color={color} fruit={fruit} />
    </div>
  );
}

export default App;
```

### Select.js
```
import React, { useMemo } from 'react';

function colorEn(color) {
    console.log("colorEn 실행 중...");
    switch(color) {
      case "빨강":
        return "red";
      case "파랑":
        return "blue";
      case "노랑":
        return "yellow";
      default:
        return color;
    }
}

function fruitEn(fruit) {
    console.log("fruitEn 실행 중...");
    switch(fruit) {
      case "사과":
        return "apple";
      case "포도":
        return "grape";
      case "바나나":
        return "banana";
      default:
        return fruit;
    }
}

function Select({color, fruit}) {
    // useMemo를 쓰지 않으면 두 props중 하나가 바뀌어도 두 함수가 동시에 실행이 된다.
    const colorChange = useMemo(()=>colorEn(color), [color]);
    const fruitChange = useMemo(()=>fruitEn(fruit), [fruit])
    return (
        <div>
            <h2>User님은</h2>
            <p>{color}는 영어로 {colorChange}이고</p>
            <p>과일 {fruit}는 영어로 {fruitChange}라고 한답니다!</p>
        </div>
    );
}

export default Select;
```

## 자신의 state가 변경됐을 때

### Average.js
```javascript
import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
    console.log("평균값 계산 중...");
    if (numbers.length === 0) return 0;
    else {
      const sum = numbers.reduce((a, b) => a + b);
      return sum / numbers.length;
    }
};

const Average = () => {
    const [number, setNumber] = useState(0);
    const [list, setList] = useState([]);

    const onChange = (e) => {
        setNumber(e.target.value);
    };

    const onInsert = () => {
        if (list.length === 2) {
            alert("리스트를 초기화합니다.");
            setList([]);
            setNumber(0);
        } else {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber(0);
        }
    };

    // useMemo를 사용하지 않는다면 list가 변할때 뿐만아니라 number가 변할때도 getAverage가 호출된다.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <div>
                <input type="number" value={number} onChange={onChange} />
                <button onClick={onInsert}>등록</button>
                <ul>
                    {list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;

```
### 만약 여러개의 state나 props가 변하고 함수들이 실행될 때 함수들 모두 복잡한 식이라면 컴포넌트의 성능은  
### 크게 떨어질 것이다. 이렇게 useMemo를 쓴다면 컴포넌트의 최적화에 큰 도움이 된다.
