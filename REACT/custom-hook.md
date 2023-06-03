# Custom Hooks
> 리액트는 여러개의 hooks를 조합해 만드는데, 조합한 기능을 다른 컴포넌트에서도 사용하려면  
> 똑같은 코드를 복사, 붙여넣기를 해야된다. 만약 이 기능이 하는 일은 같은데 넘겨받는 인자만 다르다고한다면  
> 중복된 코드가 생기기 때문에 좋지 않다. custom hook은 내가 원하는 기능을 하나의 함수 컴포넌트로 만들어서 다루기 쉽게 해준다.
> 보통 hooks 폴더안에 만들고 이름은 React 내장 hook과 마찬가지로 use로 시작한다.

## 장점
### 1. 코드와 로직이 간결해지고 가독성이 좋아진다.
### 2. 필요없는 반복 즉, 중복된 코드를 줄이고 재사용성을 높인다.
### 3. 수정사항이 있을 때 컴포넌트 하나하나가 아닌 custom-hook에서만 수정하면되기에 유지보수하기가 좋다.

# Example

## input 상태 관리하기

### App.js
```js
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

### useInput.js
```js
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

## 통신 data 가져오기

### App.js
```js
import React from 'react';
import useFetch from '../hooks/useFetch';

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {

  const { data: userData } = useFetch(baseUrl, "users")
  const { data: postData } = useFetch(baseUrl, "posts")

  return (
    <div>
      <h1>useFetch</h1>
      <h2>User</h2>
      {userData &&
        <pre>
          {JSON.stringify(userData, null, 2)}
        </pre>
      }
      <h2>Post</h2>
      {postData &&
        <pre>
          {JSON.stringify(postData, null, 2)}
        </pre>
      }
    </div>
  );
}

export default App;
```

### useFetch
```js
import {useEffect, useState} from 'react';
import axios from "axios";

function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    axios.get(baseUrl + "/" + type)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return {
    data,
    fetchUrl
  }
}

export default useFetch;
```
