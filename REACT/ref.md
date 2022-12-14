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

# Example

## HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        .success{
            background-color: green;
        }

        .failure{
            background-color: red;
        }
    </style>
    <script>
        function validate(){
            let input=document.getElementById("password");
            input.className="";
            if(input.value==='0000'){
                input.className="success";
            } else{
                input.className="failure";
            }
        }
    </script>
    <input type="password" id="password"></b> 
    <button onclick="validate()">검증하기</button>
</body>
</html>
```

## React

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
