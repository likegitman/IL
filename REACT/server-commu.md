# axios
> axios는 브라우저와 Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.

## 특징
1. 운영환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api를 사용한다.
2. Promise API를 사용한다.
3. 요청과 응답 데이터의 변형
4. HTTP 요청 취소
5. HTTP 요청과 응답을 JSON 형태로 자동 변경한다.

## create()
> axios를 활용한 비동기 처리를 도와주는 메소드이다. HTTP 메소드인 `GET, POST, PUT, PATCH, DELETE`를 제공해
> 편리하게 통신을 할 수 있게 해준다.

### Example

#### 생성
```js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_URL,
  withCredentials: true
});

export default API;
```

#### 사용
```js
API.get()
```
