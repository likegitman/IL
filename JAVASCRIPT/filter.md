# filter()
> 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환한다.

## 문법
`arr.filter(callback(element[, index[, array]])[, thisArg]);`

## 인자
### callback
> 각 요소를 시험할 함수로 true를 반환하면 요소를 유지하고 false를 반환하면 요소를 버린다.
#### 1. 현재 처리할 요소 (element)
#### 2. 현재 처리할 요소의 index (index는 0부터 시작한다.)
#### 3. filter를 호출한 배열 (array)

### thisArg
> callback을 실행할 때 this로 사용하는 값이다.

## Example
```js
const numArr = [1, 2, 3, 4, 5];
const result = numArr.filter((num) => num > 3);
console.log(result);
// output: [4, 5]
```
