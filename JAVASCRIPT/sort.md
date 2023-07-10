# sort()
> 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.(오름차순, 내림차순)
> 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.

## Example

### use
```js
const fruits = ["Melone", "Apple", "Banana"];
fruits.sort();
console.log(fruits); // output: ["Apple", "Banana", "Melon"]

const num_list = [1, 100, 23, 45, 59];
num_list.sort();
console.log(num_list) // output: [1, 23, 45, 99, 100]
```

### 오름차순
```js
const num_list = [1, 100, 23, 45, 59];
num_list.sort((a, b) => a - b);
console.log(num_list); // output: [1, 23, 45, 59, 100]
```

### 내림차순
```js
const num_list = [1, 100, 23, 45, 59];
num_list.sort();
console.log(num_list); // output: [100, 59, 45, 23, 1]
```
