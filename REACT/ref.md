# ref
> 컴포넌트 내부에서 DOM에 직접 접근해야 할 때 사용(DOM을 직접적으로 건드려야 할 때)

> JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에  
> getElementById, querySelector 같은 
> DOM Selector 함수를 사용해서 DOM 을 선택하는데  
> 리액트 함수 컴포넌트에서는 useRef라는 Hooks를 사용해서 DOM에 직접 접근한다.

## DOM을 꼭 사용해야 하는 상황
* 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
* 애니메이션을 직접적으로 실행시킬 때.
* 스크롤 박스를 조작해야 할 때
* Canvas 요소에 그림을 그려야 할 때 등
* 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

## USE
1. 콜백 함수를 이용한 ref 설정  
`<input ref={(ref)=>this.input=ref} />`

2. 리액트에 내장되어있는 createRef()를 이용한 ref 설정  
`input = React.createRef();`

3. React Hooks인 useRef를 이용한 설정  
`const input = useRef();`

# 특정 input tag에 포커스 

## InputSample.js
```
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

## App.js
```
import InputSample from "./InputSample";

function App() {
  return (
    <div>
      <InputSample />
    </div>
  );
}

export default App;
```

# 스크롤박스 조정

## ScrollBox.js
```
import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*  앞 코드는 비구조화 할당 문법
        const scrollHeight=this.box.scrollHeight;
        const clientHeight=this.box.clientHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;

```

## App.js
```
import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App_class extends Component{
    render() {
        return (
            <div>
                <ScrollBox ref={(ref)=>this.scrollbox=ref} />
                <button onClick={()=>this.scrollbox.scrollToBottom()}>맨 밑으로</button>
            </div>
        );
    }
}

export default App_class;
```
