# Map

## 컴포넌트 반복
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

## map

### Key값이 없을 때
```javascript
import React from 'react';

function Winter() {
    const winters = ["눈사람", "눈", "얼음", "당근"];

    return (
        <div>
            <ul>
                {winters.map((winter, index) => (
                    <li key={index}>{winter}</li>
                ))}
            </ul>
        </div>
    );
}

export default Winter;
```

### Key값을 지정했을 때
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
