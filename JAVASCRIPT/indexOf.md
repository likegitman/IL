# indexOf
> 배열에서 지정된 요소를 찾고 그 요소의 index를 반환하고 만약 요소가 존재하지 않는다면 -1을 반환한다.  

## 인자

### searchElement
> 배열에서 찾을 요소이다.

### formIndex
> 검색을 시작할 index이다. index가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 검색이 되지 않는다.  
> 넘겨준 index 값이 음수이면 배열의 끝에서부터 offset 값으로 사용된다. 

## Example
```js
const array = [1, 2, 3, 4, 5];

console.log(array.indexOf(1)); // output: 0

console.log(array.indexOf(4)); // output: 3

console.log(array.indexOf(6)); // output: -1
```
