# every()
> javascript에서 Array의 `every()`메소드는 배열의 모든 요소가 특정한 조건을 충족하는지 확인하고
> `some()`메소드는 배열 요소들 중에 __1개라도__ 조건을 충족하는지 확인하는데 사용된다.

## Example
```js
const array = [10, "apple", 20, "banana", 30];

const result = array.every((arr) => typeof arr === "string");
const result2 = array.some((arr) => typeof arr === "string");

console.log(result); // output: false
console.log(result2); // output: true
```

# 차이점

### every()
> 모든 요소가 조건을 충족해야 true를 return한다.
> every는 어떤 요소가 조건을 충족하지 못 하면 남은 요소들을 체크하지 않고 false를 return하고 함수를 종료한다.
> 따라서 every는 남은 요소들을 확인할 필요가 없다.

### some()
> 1개의 요소만 조건을 충족하면 true를 return한다.
> some은 어떤 요소가 조건을 충족하면 남아있는 요소들을 체크하지 않고 true를 return하고 함수를 종료한다.
> 따라서 some도 남은 요소들을 확인 할 필요가 없다.
