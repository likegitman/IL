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
        <h1>The Number is : 0</h1>
        <button class="btn__1">ADD</button>
        <button class="btn__2">MINUS</button>
    </body>

    <script>
        let cnt=0;
        const h1=document.querySelector("h1");
        const btn__1=document.getElementById("btn__1");
        const btn__2=document.getElementById("btn__2");
        
        function add(){
            cnt=cnt+1;
            h1.innerText=`The Number is : ${cnt}`;
        }
        function minus(){
            cnt=cnt-1;
            h1.innerText=`The Number is : ${cnt}`;
        }
        bnt__1.addEventListener("click", add);
        btn__2.addEventListener("click", minus);
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
