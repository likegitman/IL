# useEffect
> 코드가 언제 실행될지 결정

```javascript
// useState와 useEffect를 import
import { useState, useEffect } from "react";

function App() {
  const [cnt, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((value) => value + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  // 의존성 배열에 아무것도 없기때문에 마운트 될 때 1번만 실행될 코드
  useEffect(() => {
    console.log("i run only once");
  }, []);
  
  // cnt의 값이 업데이트 될 때만 실행
  // keyword의 값이 업데이트 될 때는 실행이 안 됨
  useEffect(()=>{
    console.log("i run when 'cnt' changes.");
  },[cnt]);
  
  // keyword의 값이 업데이트 될 때만 실행
  // cnt의 값이 업데이트 될 때는 실행이 안 됨
  useEffect(()=>{
      console.log("i run when 'keyword' changes.");
  },[keyword]);
  
  // keyword의 값이 변할 때도 실행되고, cnt의 값이 변할 때도 실행이 됨
  useEffect(()=>{
    console.log("I run when keyword & cnt change");
  },[keyword, cnt]);
  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{cnt}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
```
