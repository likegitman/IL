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
  // CORS 요청을 보낼 때 쿠키를 포함할지 설정하는 옵션이다.
  withCredentials: true
});

export default API;
```

#### 사용
```js
import API from '@/api';

const onFetch = (userInfo) => {
  try {
    const response = await API.post(`/user`, {
      id: userInfo.id 
      name: userInfo.name,
      age: userInfo.age
    });

    setUserDatas(response.data);
  } catch(e) {
    console.log(e);
  }
};
```

## interceptors
> axios를 이용해 통신을 할 때 아래와 같은 경우에 interceptors를 사용해 통신 전에 넣고싶은 설정들을 해줄 수 있다.
1. axios 요청 마다 겹치는 부분을 기본 URL로 설정.
2. axios 요청 마다 매번 header를 처리.
3. error 발생마다 공통으로 예외처리.

### 구성
1. instance
2. request 설정
3. response 설정  

__request와 response 설정은 각각 2개의 callback함수를 받는다. (요청 성공, 실패)__

### Example
```js
import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true
})

API.interceptors.request.use(async (config) => {
   
})
```
