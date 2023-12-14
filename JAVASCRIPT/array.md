# Array
배열, 프로그래밍을 하면서 어디에든 있는 자료구조이다. Array는 어떤 데이터를 연속적으로 저장하기 위해서 많이

사용하는데 정말 많이 쓰기 때문에 대부분 언어에서 내장된 형태로 배열 자료구조 제공한다.

수학적인 정의에서 배열이란 1차원적인 묶음을 의미한다.

![image](https://github.com/likegitman/TIL/assets/105215297/9512dec7-8138-44bf-93c5-65a87082d65b)

위의 그래프를 함수로 나타내면 f(1) = 3, f(2) = 1, f(3) = -1, f(4) = 2, f(5) = 0, f(6) = 6이다.

위 식을 배열 자료구조로 나타내면 `[3, 1, -1, 2, 0 , 6]`이된다. 이때 f(x)의 정의역(x)의 집합을 인덱스들이고

치역(f(x))의 집합을 배열이라고 한다. index는 보통 0부터 시작한다.

## JS
위에서 말했듯 배열은 대부분의 프로그래밍에서 내장된 상태로 제공하지만 사용방식은 다를 수 있다. 정적 언어인

C언어는 배열을 만들 때 미리 값이 결정되어 있어야한다. `int arr[5] = {1,2,3,4,5};`로 배열을 만들지만

JS는 Array 객체로 제공한다. `let arr = new Array();` 객체로 제공하기 때문에 선언과 할당을 따로따로 할 수 있다.

```js
let arr = [];
let arr2 = [1, 2, 3];

arr[2] = 10;
arr2[3] = 10

console.log(arr); // output: [undefined, undefined, 10]
console.log(arr2); // output: [1, 2, 3, 10]
```
C언어는 존재하지 않는 index를 참조하려하면 오류를 발생시키지만 js는 값이 들어있지 않은 배열은 undefined로 채우거나 

값이 있는 배열에는 그 index의 값을 추가한다. 또한 js는 배열에 어떠한 type이든 허용하기에 배열을 유연하게 사용가능하다.

Array는 객체이다. 따라서 속성과 메소드를 가진다.

### length
> 길이를 알아내는 용도이다.

`console.log([1, 2, 3, 4, 5].length); // output: 5`

### at()
> 정숫값을 받아 해당 index에 있는 항목을 반환하며 양수와 음수를 사용할 수 있다. 음의 정수는 배열의 마지막 항목부터 거스른다.

```js
const arr = [5, 12, 8, 130, 44];

console.log(arr.at(-1)); // output: 44
console.log(arr.at(3)); // output: 130
```

### concat()
> 2개 이상의 배열을 병합하는 데 사용된다.

```js
const arr = [1, 2, 3];
const arr2[4, 5];
console.log(arr.concat(arr2)); // output: [1, 2, 3, 4, 5]
```

### entries()
> Array instance의 entries() method는 배열의 각 index에 대한 key/value 쌍을 포함하는 새 배열 반복자 객체를 반환한다.
```js
const arr = [1, 2, 3];
const iterator1 = arr.entries();

console.log(iterator1.next()); // output: Object { value: Array [0, 1], done: false }

console.log(iterator1.next().value); // output: Array [0, 1]
console.log(iterator1.next().value); // output: Array [1, 2]
```

### every()
> Array instance의 every() method는 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 확인한다.

```js
const arr = [1, 2, 3];

console.log(arr.every((v) => v > 1)); // output: false

console.log(arr.every((v) => v > 0)); // output: true
```

### fill
배열의 index 범위 내에 있는 모든 요소를 정적 값으로 변경한다. 그리고 수정된 배열을 반환한다.
```js
const arr = [1, 2, 3];

console.log(arr.fill(100)); // output: [100, 100, 100]

console.log(arr.fill(100, 1)); // output: [1, 100, 100]

console.log(arr.fill(0, 0, 2)); // output: [0, 0, 3]
```

### filter
> 배열의 일부에 대한 얕은 복사본을 생성하고 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링한다.
```js
const nums = [1, 2, 3, 4, 5];
console.log(nums.filter((v) => v > 3)); // output: [4, 5]
```

### find
> 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환한다.

```js
const nums = [1, 2, 3, 4, 5];
console.log(nums.find((v) => v > 3)); // output: 4
```

### findIndex
> 작성한 테스트 함수를 만족하는 배열의 첫 번째 요소 index를 반환한다. 만족하는 값이 없다면 -1을 반환한다.
```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.findIndex((v) => v > 2)); // output: 2
```

### forEach
> 각 배열 요소에 대해 제공된 함수를 한 번씩 실행한다.

```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((v) => console.log(v)); // output: 1, 2, 3, 4, 5
```

### from
> 순회 가능, 유사 배열 객체에서 얕게 복사된 새로운 Array instance를 반환한다.

```js
console.log(Array.from('foo')); // output: ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (v) => v + v)); // output: [2, 4, 6]
```

### includes
> 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 boolean 값을 반환한다.

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(2)); // output: true
console.log(arr.includes(6)); // output: false
```

### indexOf
> String 객체에서 주어진 값과 일치하는 첫 번째 index를 반환한다. 일치하는 값이 없으면 -1을 반환한다.

```js
const str = "I love dog!";

console.log(str.indexOf("love")); // output: 2
```

### isArray
> 인자가 Array인지 판별한다.

```js
Array.isArray([1, 2, 3]); // output: true
Array.isArray("string"); // output: false
Array.isArray({foo: 100}); // output: false
Array.isArrya(undefined); // output: false
```

### join
> 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

```js
const arr = ["I", "love", "you"];

console.log(arr.join()); // output: I,love,you
console.log(arr.join("")); // output: Iloveyou
console.log(arr.join("_")); // output: I_love_you
```

### keys
> 배열의 각 index에 대한 key를 포함하는 새로운 배열 반복자 객체를 반환한다.

```js
const arr = ["a", "b", "c"];
const iterator = arr.keys();

for (const key of iterator) {
  console.log(key);
}

// output: 0
// output: 1
// output: 2
```

### lastIndexOf
> 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여 최초로 마주치는 index를 반환한다.
> 일치하는 부분을 찾을 수 없으면 -1을 반환한다.

```js
const str = "I love you! because I love your personality";

console.log(str.lastIndexOf("love")); // output: 22
```

### length
> 배열의 길이를 반환한다. 반환값은 부호 없는 32bit 정수형이며 배열의 최대 index보다 항상 1크다.
> length 속성에 값을 설정할 경우 배열의 길이를 변경한다.

```js
const nums = [1, 2, 3, 4];

console.log(nums.length); // output: 4
```

### map
> 배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

```js
const nums = [1, 2, 3, 4];

console.log(nums.map((v) => v * 2)); // output: [2, 4, 6, 8]
```

### pop
> 배열의 마지막 요소를 제거하고 그 요소를 반환한다.

```js
const nums = [1, 2, 3, 4];

console.log(nums.pop()); // output: 4
console.log(nums); // output: [1, 2, 3]
```

## 복사
js에서 배열을 복사하는 방법이 있는데 얕은 복사와 깊은 복사가 있다.

### 얕은 복사
```js
let arr = [1, 2, 3, 4, 5];
let arr2 = arr;
arr[0] = 10;

console.log(arr2); // output: [10, 2, 3, 4, 5]
```
분명 arr2라는 이름에 그저 arr을 할당했을 뿐인데 arr을 바꿧더니 arr2의 값도 같이 바뀐다. 이렇게 출력되는 이뉴는 arr2는

얕은복사를 사용했기 때문인데 js에서 배열을 얕은 복사하면 이름만 다를 뿐 같은 배열을 바라보게 된 상태로 이름만 2개가

복사되었기 때문이다. 이렇게 되면 하나의 배열에 이름만 2개가 된것인데 아예 따로 독립적인 배열을 만들고 싶다면 깊은 복사를 해야한다.

깊은 복사를 하는 방법은 여러가지가 있지만 대표적인 2가지 예시만 들어보자면 for문과 JSON.stringify나 parse를 사용하는 것이다.

#### for
```js
let arr = [1, 2, 3, 4, 5];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  arr2[i] = arr[i];
}
arr[0] = 10;

console.log(arr); // output: [10, 2, 3, 4, 5]
console.log(arr2); // output: [1, 2, 3, 4, 5]
```

#### JSON.strigify, JSON.parse
```js
let arr = [1, 2, 3, 4, 5];

const stringifyArr = JSON.stringify(arr);

let arr2 = JSON.parse(stringifyArr);
arr[0] = 10;
console.log(arr); // output: [10, 2, 3, 4, 5];
console.log(arr2); // output: [1, 2, 3, 4, 5]
```
