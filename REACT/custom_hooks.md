# Custom Hooks
> 리액트는 여러개의 hooks를 조합해 만드는데, 조합한 기능을 다른 컴포넌트에서도 사용하려면  
> 똑같은 코드를 복사, 붙여넣기를 해야된다. 만약 이 기능이 하는 일은 같은데 넘겨받는 인자만 다르다고한다면 중복된 코드가 생기기 때문에 좋지 않다.  
> custom hooks는 내가 원하는 기능을 하나의 함수 컴포넌트로 만들어서 다루기 쉽게 해준다.

# useInput

## App.js
```
import useInput from "./hooks/useInput";

function displayMessage(message) {
  alert(message)
}

function App() {

  const [inputValue, handleChange, handleSubmit] = useInput("안녕", displayMessage);

  return (
    <div>
      <h2>useInput</h2>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;

```

## useInput.js
```
import React, { useState } from 'react';

function useInput(initialValue, submitAction) {

    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setInputValue("");
        submitAction(inputValue);
    };

    return [inputValue, handleChange, handleSubmit];
}

export default useInput;
```
