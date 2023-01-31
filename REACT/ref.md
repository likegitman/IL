# ref
> 컴포넌트 내부에서 DOM에 직접 접근해야 할 때 사용(DOM을 직접적으로 건드려야 할 때)

## DOM을 꼭 사용해야 하는 상황
* 특정 input tag에 포커스를 줘야 할 때
* 스크롤 박스를 조작해야 할 때
* Canvas 요소에 그림을 그려야 할 때 등

## USE
1. 콜백 함수를 이용한 ref 설정  
`<input ref={(ref)=>this.input=ref} />`

2. 리액트에 내장되어있는 createRef()를 이용한 ref 설정  
`input = React.createRef();`

3. React Hooks인 useRef를 이용한 설정  
`const input = useRef();`

# 특정 input에 포커스 

## ValidationSample.js
```
import { Component } from "react";
import "./styles/validated.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref)=>this.input=ref}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```

## App.js
```
import ValidationSample from "./ValidationSample";

function App() {
  return (
    <div>
      <ValidationSample />
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
