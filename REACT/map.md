# Map
> React에서는 반복되는 컴포넌트를 렌더링하기 위해 JavaScript 배열의 내장함수인 map을 사용한다.  
> 파라미터로 전달된 callback 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열을 생성 한다.  
> 그래서 원래 배열에 영향을 미치지 않는다.

# Example

## map()을 사용하지 않았을 때
```javascript
function Winter() {
  return(
    <ul>
      <li>눈사람</li>
      <li>눈</li>
      <li>얼음</li>
      <li>당근</li>
    </ul>
  );
};

export default Winter;
```

## map을 사용할 때 (Key값이 없을 때)
```javascript
import React from 'react';

function Winter() {
    const winters = ["눈사람", "눈", "얼음", "당근"];

    return (
        <div>
            <ul>
                {winters.map((winter, index) => (
                    // key값이 없을 때는 index값을 사용한다. index는 0부터 시작함
                    <li key={index}>{winter}</li>
                ))}
            </ul>
        </div>
    );
}

export default Winter;
```

## Key값을 지정했을 때
```javascript
import { useState } from 'react';

function Winter() {
    
    const [winters, setWinters] = useState([
        { id: 1, text: "눈사람" },
        { id: 2, text: "눈" },
        { id: 3, text: "얼음" },
        { id: 4, text: "당근" }
    ]);

    return (
        <ul>
            {winters.map((winter) => (
                <li key={winter.id}>
                    {winter.text}
                </li>
            ))}
        </ul>
    );
};

export default Winter;
```

## React에서 Key란?
> React에서 key란 어떠한 항목을 추가, 변경, 삭제할 때 식별하는 것을 돕는다.  
> key는 element에 안정적인 고유성을 부여해야하기 때문에 배열 내부의 element에 지정을 해야하고  
> 배열 안에서 형제 사이에서 고유하고 전체 범위에서 고유하지않는다. 따라서 두개의 다른 배열을 만들 때  
> key 이름이 똑같아도 상관이없다.
