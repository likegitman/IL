# replace
> 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환하는 메서드이다. 그 패턴은  
> 문자열이나 정규식이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있다.

### 1. 패턴이 문자열인 경우
```js
const str = "Oranges are delicious, apples are also delicious.";
cosnt convertedStr = str.replace("delicious", "sour");

console.log(convertedStr); // output: "Oranges are sour, apples are also delicious".
```
> 위 결과처럼 패턴이 문자열인 경우에는 제일 먼저 일치하는 문자열만 치환이 되며 해당하는 모든 문자열이 치환이 되지는 않는다.

### 2. 패턴이 정규식인 경우
```js
const str = "Oranges are delicious, apples are also delicious.";
cosnt convertedStr = str.replace(/delicious/gi, "sour");

console.log(convertedStr); // output: "Oranges are sour, apples are also sour".
```
> 패턴은 `/찾을 문자열/gi`식으로 적어야되고 `//`안에는 따옴표가 있으면 안 되고  
> 뒤 gi에서 g는 global 즉, 모든 문자열을 변경한다는 의미고 i는 ignore 대소문자를 무시하고  
> 모두 일치하는 패턴을 검색하는 것을 의미한다. 이렇게 정규식을 사용하면 해당하는 모든 문자열이 바꾸게 된다.
