# Promise
JS는 비동기 작업의 처리를 위해 callback 함수를 사용한다.  
callback은 비동기 처리에 유용하지만 중첩되면 가독성이 안 좋아지고 에러 처리에 유연하지 못 하다.  
이를 callback 지옥인 callback hell이라 한다.  
이런 callback hell을 개선하고자 ES6에서 Promise라는 것이 등장했다.

> Promise는 callback hell을 개선하기 위해 나온 거구나

## callback이 필요한 이유
```js
const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콘솔에 출력한다.
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const response_data = get("https://jsonplaceholder.typicode.com/posts/1");

console.log("response_data:", response_data);
```
위에서 response_data는 서버에 응답이 제대로 담길까?

**담기지 않는다.**
이유는 JS의 동작 방식에 있는데 get은 내부에 비동기 작업(네트워크 요청)이 존재하는데  
JS는 비동기 작업을 끝까지 해석하지 않고 종료해버린다.  
비동기 작업을 만나면 Web API로 넘긴 후 처리하지 않은 함수를 실행한다.

위 코드의 경우를 이벤트 루프와 관련지어 순서대로 설명하겠다.
1. get 함수가 call stack에 추가되고 open, send가 실행된다.
2. Web API로 비동기 작업을 넘긴다.
3. get 함수가 call stack에서 제거된다.
4. console.log("response_data: ", response_data)가 call stack에서 실행된다.
5. 요청이 끝나면 onload가 Task Queue에 들어간다.
6. onload가 call stack에 들어가 실행된다.

그러니 응답이 담기지 않을 수밖에 없죠.  
이를 해결하는 방법 중에는 callback이 있습니다.
```js
const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

get("https://jsonplaceholder.typicode.com/posts/1", (res) => console.log(res));
```
callback으로 처리해 원하는 서버 응답을 받을 수 있다.  
> callback을 사용하면 JS의 동작 원리에서 손 쉽게 비동기 작업을 처리할 수 있구나

## callback hell
하지만 Promise가 나온 이유처럼 callback은 중첩된다면( callback hell ) 가독성이 좋지 않고 유지보수면으로도 좋지 않다.  
```js
get("/step1", (a) => {
  get(`/step2/${a}`, (b) => {
    get(`/step3/${b}`, (c) => {
      get(`/step4/${c}`, (d) => {
        console.log(d);
      });
    });
  });
});
```
만약 에러 처리 코드까지 추가된다면 끔찍하다.  
Promise를 사용하면 가독성 뿐만 아니라 에러 처리까지 비교적 쉽게 할 수 있게 된다.

## Promise 생성
Promise는 생성자로 사용할 수도 있고 정적 함수로도 사용이 가능하다.  
```js
const promise = new Promise((resolve, reject) => {
  if (비동기 요청 성공) resolve('success!');
  else reject('failed..');
});
```
비동기 작업이 Promise 생성자의 callback 내부에서 실행되며  
비동기 작업의 성공과 실패에 따라 resolve와 reject 함수를 호출하고 있다.
> resolve는 성공 시 호출하고 reject는 실패 시 호출하는 함수구나

## Promsie 상태
| 상태 | 설명 | 전환 조건 | 결과 접근 |
|------|------|-----------|-----------|
| pending | 비동기 작업이 실행되지 않았거나 실행 중인 상태 | Promise 생성 직후 기본 상태 | - |
| fulfilled | 비동기 작업이 성공한 상태 | resolve 호출 | then으로 접근 |
| rejected | 비동기 작업이 실패한 상태 | reject 호출 | catch로 접근 |

Promise는 기본적으로 pending 상태이며 resolve, reject가 호출된 이후 settled상태로 변경된다.
* settled는 fullfilled, rejected를 포함하는 상태

`pending -> settled`로 변경은 가능하지만 `settled -> pending`은 불가능하다.
> Promise는 pending, fulfilled, rejected 3가지 상태를 가지고 resolve, reject로 이를 변경할 수 있구나

## Promise 접근 ( 후속처리 메서드 )
### then
resolve와 reject. 2개의 callback을 인자로 받을 수 있지만 resolve만 인자로 받는 것이 좋다.  
```js
promiseGet(url).then((res) => console.log(res));
```

### catch
reject만 인자로 받는다.  
즉, catch 메서드에서 에러 처리를 한 번에 처리한다. ( then에서도 가능하지만 사용하지 말자 )
```js
promiseGet(url)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
```
요청이 성공하면 then으로 처리되고 실패하면 catch로 들어간다.  
위 코드는 내부적으로 이렇게 변한다고 한다.
```js
promiseGet(url)
  .then((res) => console.log(res))
  .then(undefined, (error) => console.log(error));
```

### finally
finally는 resolve나 reject를 인자로 받지 않고 개별의 callback을 인자로 받는데  
이 callback은 요청의 성공이나 실패에 관계없이 실행된다.
```js
promiseGet(url)
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("요청 완료"));
```
그래서 보통 요청이 끝난 것을 알리는 용도로 쓰거나 로딩 상태를 바꿀 때 많이 사용된다.
> 요청의 성공 후속 처리는 then을 사용하고 실패에는 catch 요청의 마지막에 작업이 필요하다면 finally를 사용하구나

## 예제 개선
```js
const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) resolve(JSON.parse(xhr.response));
      else reject(new Error(xhr.status));
    };
  });
};

promiseGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```
이렇게 되면 서버의 요청도 받을 수 있게되었고 작업이 늘어난대도 callback hell보다  
가독성이 좋아지고 에러 처리도 유연하게 할 수 있다.
