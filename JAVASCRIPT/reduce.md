# reduce
> 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고 하나의 결과값을 반환한다.  

# 인자
### 1. 누산기 (acc)
### 2. 현재값 (cur)
### 3. 현재 인덱스 (idx)
### 원본 배열 (src)

> reducer함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로  
> 결국 최종 결과는 하나의 값이 된다.



# Example
```js
const arr = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); // output: 10
```
