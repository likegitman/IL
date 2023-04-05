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
* onkeypress -> onKeyPress
* onsubmit -> onSubmit

2. 이벤트에 실행할 때 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
* Arrow function 문법으로 함수를 만들어 전달하는 방법
* 렌더링 부분 외부에 미리 만들어서 전달하는 방법

3. DOM 요소에만 이벤트를 설정할 수 있다.
* div, button, input, form, span 등의 DOM요소에는 이벤트를 설정할 수 있지만,  
  직접 만든 컴포넌트(`<Component />`)에는 이벤트를 자체적으로 설정할 수 없다.

# Example
## EventHandle.js
```javascript
function EventHandle() {
    const [message, setMessage] = useState("");
    const onChange = (e) => {
        setMessage(e.target.value);
    };
    const onClick = () => {
        setMessage("");
    };

    return (
        <div>
            <input
                type="text"
                name="message"
                value={message}
                onChange={onChange}
            />
            <br />
            <button onClick={onClick}>공백</button>
        </div>
    );
}
```
