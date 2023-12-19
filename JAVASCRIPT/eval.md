# eval
String 형태의 소스 코드를 매개변수로 해당 스크립트를 동적으로 실행시킬 수 있다. String 매개변수는

js parser에 의해 분석되고 실행된다. 하지만 특별한 경우가 아닌 이상 eval 함수를 사용하지 않고도 동일한

로직을 구현할 수 있기도 하고 보안상의 이유로 사용하지 않는 것을 권장한다.

```js
const print = "hello, world!";
eval("alear(print)");
```
![image](https://github.com/likegitman/TIL/assets/105215297/80744219-4719-4a57-ae6d-9bbe13ee5597)

```js
const equation = "3 + 4";
console.log(eval(equation)); // output: 7
```
eval 함수가 보안에 취약한 이유는 js 컴파일러가 미리 최적화할 수 없기 때문이다.
```js
eval("let name='hello, world';");
```
이때 변수 name은 eval 함수가 호출된 **scope**에 남게된다. 여기서 eval 함수가 어떤 함수 내부에서

실행된 것이 아니기 때문에 name 변수는 전역 변수가 된다. 그렇기에 그 이후에
```js
eval("let name='by, world';");
```
위 코드가 실행될 경우 전역 변수 name의 값은 by, world가 된다. 이렇게 eval 함수가 호출된 위치의

외부 유효범위에 접근과 수정이 가능해 값 변조가 가능해진다. 그래도 프레임워크 구현시에는 유용히

쓰이기 때문에 무조건 사용하지 않는 것은 아니다.

# new Function
eval 함수와 비슷하게 문자열을 코드로 인식해 동적으로 실행한다. 하지만 eval과 다르게 함수 내부 

scope에만 접근과 수정이 가능하여 내부에서 선언된 변수 등은 해당 Function 내에서만 유효해 유효범위 

오염에 대한 문제가 없다.
```js
const print = "hello, world!";
(new Function("alert(print)"))();
```
eval의 실행문을 new Function으로 바꾸면 위 코드와 같이 쓸 수 있다. 성능적으로도 new Function이

eval보다 개선된 성능을 보여준다.
