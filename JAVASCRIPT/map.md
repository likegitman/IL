# map()
> 배열 메소드로 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.  
> forEach문과 비슷하다고 볼 수 있는데 forEach문과 다르게 map 함수는 부모 스코프 영역을 건드리지 않고
> callback 함수로만 목적을 달성한다.

## 문법
`arr.map(callback(currentValue[ ,index [, array]]) [,thisArg]);`

## 인자
### callback
#### 1. 현재 처리할 요소 (currentArr)
#### 2. 현재 처리할 요소의 index (index는 0부터 시작한다.)
#### 3. map()을 호출한 배열

### thisArg
> callback을 실행할 때 this로 사용되는 값이다.

## Examples
```js
const arr1 = [1, 2, 3, 4, 5];

const mapArr = arr1.map((arr) => arr * 2);
// output: [2, 4, 6, 8, 10]
```

```js
const arr1 = ['hello' ,'my', 'name', 'is', 'woonrin'];
const arr2 = arrA.map((str) => {
  return str.length;
});
console.log(arrB); // output: [5, 2, 4, 2, 6]
```
