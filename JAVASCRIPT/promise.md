# Promise
> 비동기 작업이 맞이할 결과를 성공(완료) 또는 실패와 그 결괏값을 나타낸다.
> promise는 resolve, reject 인자를 받고 new Promise가 반환하는 객체는 `state: pending(대기) result: undefined`라는
> property를 갖는다. resolve(value)가 호출되면 `state: fulfilled, result: value`의 형태가 되고 reject(error)가 호출되면
> `state: rejected, result: error`의 형태가 된다.

## Example

```js
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // 성공
        resolve('woonrin');
        // 실패(error)
        reject(new Error('no network'));
    }, 2000);
});
```

