# Set
> `Set`은 js에서 고유한 값들의 집합을 다루는 자료구조이다. `Set`을 사용하면 데이터의 중복을 제거하고  
> 유일한 값들을 효과적으로 관리할 수 있다. js의 set말고 자료구조로서의 `set`은 **순서가 없고 중복되지 않은**  
> 데이터의 집합이다. 배열(array)과 비슷하다고 생각할 수 있지만 이 둘에는 차이점이 있다.

## 차이점
> 배열은 데이터를 **순서있게** 저장한다. 그래서 `index`를 통해 특정 위치에 저장되어 있는 데이터에 접근이 가능하다.  
> 그리고 배열에는 동일한 값(중복 값)을 여러번 저장할 수 있다. 저장할 수 있는 이유는 값이 같아도 `index`가 다르기에  
> 중복 값이 문제가 되지 않는다.  

> 하지만 `Set`은 데이터를 **순서없이** 저장한다. 그래서 배열처럼 `index`로 접근할 수가 없다.  
> 그리고 중복 값을 허용하지 않는다. 기존 `set`에 있는 값을 또 추가하면 추가도지 않는다.

## 생성
```js
const set = new Set(); // Set(0) {size: 0}`

const numSet = new Set([1, 2, 3]); // Set(3) {1, 2, 3}
```

## 추가
> `add()` 함수를 사용하고 중복 값이 들어가지 않는다.
```js
const set = new Set();

set.add(1); // Set (1) {1}
set.add('A'); // Set (2) {1, 'A'}
set.add(true); // Set (3) {1, 'A', true/}
```

### 연속추가
```js
const set = new Set();

set.add(1).add('A').add(true); // Set (3) {1, 'A', true}
```

## 삭제
> `delete()` 함수를 사용하고 `set`의 특정 값을 삭제할 수 있다. 인자로 넘기는 값이 세트에 존재하여  
> 성공적으로 삭제했다면 `true`를 반환하고 해당 값이 `set`에 존재하지 않아서 삭제에 실패했다면 `false`를 반환한다.
```js
set.delete(1);
set.delete(2);
```

## 값 여부
> `has()` 함수를 사용하고 `if 조건문`, `3항 연산자`와 많이 사용한다.
```js
const set = new Set();
set.add('A');

if (set.has('A')) {
  console.log('A'는 존재합니다.);
}

const result = set.has('B') ? 'Has' : 'Hasen't';
```

## 길이 확인
> `size` 속성을 통해서 `set`의 길이를 알 수 있다.
```js
const set = new Set();

set.add(1);
set.add('A');
set.add(true);

console.log(set.size) // 3
```

## 모두 삭제
> `clear` 함수를 사용한다.
```js
set.clear(); // Set(0) {size: 0}
```

## 순회
> `for문 + of`, `forEach` 함수를 사용하여 `set`을 순회할 수 있다.
```js
const set = new Set([1, 2, 3, 4);

for (const num of set) {
  console.log(num);
}

set.forEach((num) => console.log(num))
```

## 변환
### set => array

```js
const set = new Set([1, 2, 3, 4]);
const array = [...set]; // [1, 2, 3, 4]
```

### array => set
```js
const array = [1, 2, 3, 4];
const set = new Set(array); // Set(4) {1, 2, 3, 4}
```

## 집합 연산
```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([4, 5, 6, 7, 8]);

// 합집합
const union = new Set([...set1, ...set2]);
console.log([...union]); // [1, 2, 3, 4, 5, 6, 7, 8]

// 교집합
const intersection = new Set([...set1].filter((value) => set2.has(value)));
console.log([...intersection]); // [4]

// 차집합
const difference = new Set([...set1].filter((value) => !set2.has(value)));
console.log([...difference]); // [1, 2, 3]
```
