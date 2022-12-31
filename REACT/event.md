# Event
> 사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트(EVENT)라고한다.

# Event Type
* Clipboard
* Touch
* UI
* Composition
* Keyboard
* Wheel
* Focus
* Media
* Form
* Image
* Mouse
* Animation
* Selection
* Transition
* Etc

# Caution
1. 이벤트 이름은 카멜 표기법으로 작성한다.
* onclick -> onClick
* onchange -> onChange
* onkeyup -> onKeyUp
* onsubmit -> onSubmit

2. 이벤트에 실행할 때 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
* arrow function 문법으로 함수를 만들어 전달하는 방법
* 렌더링 부분 외부에 미리 만들어서 전달하는 방법

3. DOM 요소에만 이벤트를 설정할 수 있다.
* div, button, input, form, span 등의 DOM요소에는 이벤트를 설정할 수 있지만,  
  직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.

4. Component에 직접 이벤트를 설정할 수 없다
* 설정하고싶다면 component에 props로 전해줘 그 props를 함수로 설정한다.

# Arrow Function으로 바로 전달

## App.js
```
import EventHandle from "./EventHandle";

const App=()=>{
  return <EventHandle />;
};

export default App;
```

## EventHandle.js
```
import { Component } from "react";

class EventHandle extends Component{
    
    state={
        message: ''
    };
       
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                 type="text"
                 name="message"
                 placeholder="아무거나 입력해보세요."
                 value={this.state.message}
                 onChange={
                     (e)=>{
                         this.setState({
                             message: e.target.value
                            });
                        }
                 }
                 />
                <br />
                <button
                 onClick={
                     ()=>{
                         alert(this.state.message);
                         this.setState({
                             message: ''
                         });
                    }
                }                
                >공백</button>
            </div>
        );
    }
}

export default EventHandle;
```

# 임의 메서드 만들기
## App.js
```
import EventHandle from "./EventHandle";

const App=()=>{
  return <EventHandle />;
};

export default App;
```

## EventHandle.js
```
import { Component } from "react";

class EventHandle extends Component{
    
    state={
        message: ''
    };

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
        
    }

    handleClick(){
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                 type="text"
                 name="message"
                 placeholder="아무거나 입력해보세요."
                 value={this.state.message}
                 onChange={this.handleChange}
                />
                <br />
                <button
                 onClick={this.handleClick}                
                >공백</button>
            </div>
        );
    }
}

export default EventHandle;
```
