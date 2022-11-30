# useState
> state의 두번째 값은 첫번째 값을 설정한다
```'
import { useState } from "react";

const [cnt,setCnt]=useState(0);
const onClick=()=>{
    setCnt(cnt+1);
};
return(
    <button onClick={onClick}>{cnt}</button>
);
```

## Vanilla JS
```
<!DOCTYPE html>
<html>
    <body>
        <span>Total clicks: 0</span>
        <button id="btn">Click me</button>
    </body>

    <script>
        let cnt=0;
        const button=document.getElementById("btn");
        const span=document.querySelector("span");
        function handleClick(){
            cnt=cnt+1;
            span.innerText=`Total clicks: ${cnt}`;
        }
        button.addEventListener("click", handleClick)
    </script>
</html>
```

## React State
```
import React, { useState } from "react";
function App(){
  const [cnt, setCnt]=useState(0);
  const add=()=>{
    setCnt(cnt+1);
  };
  const minus=()=>{
    setCnt(cnt-1);
  }
  return(
    <div>
      <h1>The Number is : {cnt}</h1>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
    </div>
  )
}
export default App;
```

## State Function
```
import React, { useState } from "react";
function App(){
  const [cnt, setCnt]=useState(0);
  const add=()=>{
    setCnt(current=>(cnt+1));
  };
  const minus=()=>{
    setCnt(current=>(cnt-1));
  };
  return(
    <div>
      <h1>The Number is : {cnt}</h1>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
    </div>
  )
}
export default App;
```
