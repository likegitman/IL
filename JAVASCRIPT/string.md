# String function
```
let introduce="Hello My name is Woonrin";

console.log(introduce.charAt(0));
// charAt(n) : n번째 문자를 출력한다. 
// 위 문장에서 결과는 H

console.log(introduce.indexOf("y"));
// indexOf("?") : ?라는 글자가 있다면 글자의 인덱스를, 없다면 false(-1)을 출력한다.
// 위 문장에서 결과는 y의 index 값 7

console.log(introduce.includes("your"));
// includes("?") : ?라는 글자가 있다면 true(0), 없다면 false(-1)을 출력한다.4
// 위 문장에서 결과는 false

console.log(introduce.replace("Hello", "Hi"));
// replace("x", "y") : x를 y로 교체한다.
// 위 문장에서 결과는 Hi My name is Woonrin

console.log(introduce.search("name"));
// search("?") : ?라는 글자를 검색하여 첫 문자의 시작 지점을 알려준다.
// 위 문장에서 결과는 9

console.log(introduce.slice(0,6));
// slice(n, n') : n~n'-1 까지의 문자를 가져온다.
// 위 문장에서 결과는 Hello

console.log(introduce.split(" "));
// split("?") : ?라는 문자를 기준으로 문자열을 분리한다.
// 위 문장에서 결과는 ['Hello', 'My', 'name', 'is', 'Woonrin']

console.log(introduce.trim());
// trim() : 앞, 뒤의 공백을 제거하는 역할을 한다. 이 값에서는 앞뒤에 공백이 없으므로 결과가 본래의 문자열과 동일하다.

console.log(introduce.length);
// length : 문자열의 길이를 반환한다.
// 위 문장에서 결과는 24
```
