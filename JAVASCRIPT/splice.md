# splice()
> 배열 객체에 사용할 수 있는 내장 method이다. `splice`는 기존의 배열 요소를 삭제하거나 교체해서 배열의
> 내용을 변경하며 제거된 요소가 담긴 별도의 배열을 새로 반환한다.

## 삭제
```
let colors = ["red", "blue", "yellow", "green"];
let newColors = colors.splice(2);

console.log(newColors) // output: ["yellow", "green"]
console.log(colors); // output: ["red", "blue"]
```
