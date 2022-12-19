# Map

## 컴포넌트 반복
```
const IterationSample=()=>{
  return(
    <ul>
      <li>눈사람</li>
      <li>눈</li>
      <li>얼음</li>
      <li>당근</li>
    </ul>
  );
};

export default IterationSample;
```

## map
```
const IterationSample=()=>{
  const winters=["눈사람", "눈", "얼음", "당근"];
  // key 값이 없을 때는 index를 키로 지정
  const winterList=winters.map((winter,index)=><li key={index}>{winter}</li>)
  return(
    <ul>
      {winterList}
    </ul>
  );
};

export default IterationSample;
```

```
import { useState } from 'react';

const IterationSample=()=>{
  const [winters, setWinters]=useState([
    {id: 1, text: "눈사람"},
    {id: 2, text: "눈"},
    {id: 3, text: "얼음"},
    {id: 4, text: "당근"}
  ]);
  // 고유한 값을 지정했다면 key 값에 써주기
  const winterList=winters.map((winter)=><li key={winter.id}>{winter.text}</li>)
  return(
    <ul>
      {winterList}
    </ul>
  );
};

export default IterationSample;
```
