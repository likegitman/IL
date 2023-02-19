# useMemo
> 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고  
  특정 값이 바뀌지 않았다면 이전에 연산한 결과를 다시 사용하는 Hook이다.
  useMemo는 첫번째 값으로 콜백함수를 받고 두번째 값으로는 의존성 배열을 받는다.

# 평균값 계산하기

## Average.js
```
import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
    console.log("평균값 계산 중...");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(0);

    const onChange = (e) => {
        setNumber(e.target.value);
    };

    const onInsert = () => {
        if (list.length === 2) {
            alert("리스트를 초기화합니다.")
            setList([]);
            setNumber(0);
        } else {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber(0);
        }
    };

    // useMemo를 사용하지 않는다면 list가 변할때 뿐만아니라 number가 변할때도 getAverage가 호출됨 
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
