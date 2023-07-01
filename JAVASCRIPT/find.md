# find()
> 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환한다. 만족하는 요소가 없다면 `undefined`를 반환한다.

## 문법
`arr.find(callback[, thisArg]);`

## 인자
### callback
#### 1. 현재 처리할 요소 (element)
#### 2. 콜백 함수에서 처리할 현재 요소의 index (inde는 0부터 시작한다.)
#### 3. find 함수를 호출한 배열 (array);

### thisArg
> callback이 호출될 때 this로 사용할 객체

## Example
```js
const arr1 = ["apple", "banana", "waterMelon","melon"];
const result = arr1.find((arr) => arr.length > 5);
console.log(result);
// output: "banana"
```
