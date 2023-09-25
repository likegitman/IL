# Map
> `key - value` 쌍을 보유하고 key의 원래 삽입 순서를 기억한다.

## Example
```js
cosnt map1 = new Map();

// 값 설정
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// 값 가져오기
console.log(map1.get('a')); // output: 1

map1.set('a', 97);
console.log(map1.get('a')); // output: 97

console.log(map1.size); // output: 3

map1.delete('b');

console.log(map1.size); // output: 2
```
