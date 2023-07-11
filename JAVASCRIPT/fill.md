# fill()
> 배열의 시작 index부터 끝 index의 이전까지 정적인 값 하나로 채우는 배열 메소드이다.
## 문법
`arr.fill(value, start[, end]);`

## Example
```js
const arr = [4, 6, 9, 8];

console.log(array1.fill(0, 1, 4));
// output: [4, 0, 0, 0]

console.log(array1.fill(5, 2));
// output: [4, 6, 5, 5]

console.log(array1.fill(9));
// output: [9, 9, 9, 9]

```
