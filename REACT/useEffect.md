# useEffect
> 코드가 언제 실행될지 결정

```
// useState와 useEffect를 import
import { useState, useEffect } from "react";

function App() {
  const [cnt, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  // []에 아무것도 없기때문에 1번만 실행될 코드
  useEffect(() => {
    console.log("i run only once");
  }, []);
  
  // keyword가 변할때만 실행
  // cnt값이 변해도 실행되지 않음

  // useEffect(()=>{
  //   // keyword의 값이 빈값이 아니고
  //   // 길이가 5보다 길다면 실행
  //   if(keyword!==""&&keyword.length>5){
  //     console.log("SEARCH FOR", keyword);
  //   }
  // },[keyword]);
  
  useEffect(()=>{
    console.log("i run when 'cnt' changes.");
},[cnt]);
  useEffect(()=>{
      console.log("i run when 'keyword' changes.");
  },[keyword]);
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
