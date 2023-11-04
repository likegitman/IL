# Axios
> 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신라이브러리이다.

위 말처럼 axios는 비동기 통신을 하기 위한 라이브러리이다. 하지만 JavaScript의 fetch API를 사용하여 비동기 통신을 할 수 있다. 

그럼에도 axios가 나온 이유는 fetch API보다 요구사항을 더 간단하게 작성하여 통신할 수 있기 때문이다.

#### fetch
```js
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 1,
    title: 'Example',
    body: 'example...'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### axios
```js
const url = 'https://jsonplaceholder.typicode.com/posts';

axios.post(url, {
  userId: 1,
  title: 'Example',
  body: 'example...'
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

위의 예제들을 보면 한 눈에 봐도 axios의 코드가 더 짧으면서 사용도 간편하다는 것을 알 수 있다.

axios는 데이터를 자동으로 JSON으로 파싱하고 then-catch를 사용할 때 then을 연속적으로 체이닝하지 않아도 된다.

또, method나 header는 fetch API같이 명시해줄 수도 있지만 특별한 경우가 아니면 명시하지 않고 위 예제와 같이

간단하게 작성해도 동작하는 데에는 문제가 없다. 이것 말고도 axios는 아래서 설명할 interceptors를 이용해

요청과 응답을 중간에 가로 따로 어떤 작업을 처리할 수 있게도 할 수 있다.

## Install

### npm
`npm install axios`

### yarn
`yarn add axios`

## Example

### GET
```js
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url)
  .then(response => console.log(response.data);)
  .catch(error => console.error(error));
```

### POST
```js
const url = 'https://jsonplaceholder.typicode.com/posts';

axios.post(url, {
  userId: 1,
  title: 'Example',
  body: 'example body'
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### PUT
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.put(url, {
  id: 1,
  userId: 1,
  title: 'Example2',
  body: 'example...'
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error););
```

### PATCH
patch는 일부분만 변경할 때 사용하는 method이기에 수정하고자 하는 요소의 변경사항만 작성한다.
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.patch(url, {
  body: 'This post has been updated with a PATCH request.'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

### DELETE
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.delete(url);
```
