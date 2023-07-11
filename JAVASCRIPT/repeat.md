# repeat()
> 주어진 문자열을 옵션의 count만큼 반복하여 붙인 다음에 새로운 문자열로 반환하는 함수이다.  
> 반복의 횟수인 count는 양의 정수여야하며 무한대보다 작고 최대 문자열의 크기를 넘어서는 안된다.

## 문법
`string.repeat(count);`

## Example
```js
let str = "apple";
str.repeat(3);
console.log(str); // output: appleappleapple

let strArr = ["a", "b", "c", "d"];
for(let i = 0; i < strArr.length; i++) {
  console.log(strArr[i].repeat(i + 1)); // output: a bb ccc dddd
}
```
