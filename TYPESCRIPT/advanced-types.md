# Advanced Types

## any
js에서 존재하는 모든 값을 오류 없이 받을 수 있다.
```js
let anyValue: any;

anyValue = 0;
anyValue = "hello, world!";
anyValue = true;
anyValue.hi.print = () => console.log("hi");
```
위 코드들은 아무런 오류 없이 잘 작동한다. 어떻게 보면 편리한 것처럼 보이지만 ts의 목적은 js에 정적 타이핑을 적용하는 것이 주된 목적이다.

하지만 any는 이런 ts의 목적을 무시할 수 있는 type이다. 그래서 any를 가급적 쓰지 않는 것이 좋지만 어쩔 수 없이 써야 될 상황들이 몇 있다.

#### 1. 개발 단계에서 임시로 값을 지정해야 할 때
복잡한 구성 요소로 이루어진 개발 과정에서 추후 값이 변경될 가능성이 있거나 특정 항목의 type이 정해지지 않은 경우에 개발을 계속하기 위해 임시로 지정할 수 있다.

#### 2. 값을 받아올 또는 넘겨줄 값을 특정할 수 없을 때
API 요청, 응답의 처리, 외부 라이브러리 등은 type을 잘 파악하기 어려운 것에 속한다. 즉 어떤 값을 주고 받을지 잘 모르기 때문에 any를 사용하면 해결할 수 있다.

예를 들어 어떤 함수의 type을 정의한다 했을 때 인자의 개수나 반환 값을 명확하게 지정할 수 없을 때 any로 지정하면 편하게 사용할 수 있다.

하지만 이럴 때 any를 사용하면 number나 string 같은 값을 넘겨도 오류를 발생시키지 않는다. 개발자가 실수해도 허용을 한다는 것이기에 가급적 사용을 하지 않아야 된다.

이것과 비슷하게 문제가 있는데
```ts
const anyValue: any = 0;
const strValue: string = anyValue;
strValue.toUpperCase();
```
위 코드도 컴파일 단계에서 오류를 발생시키지 않는다. 지금은 간단한 예제지만 더 복잡한 코드에서는 이런 실수가 충분히 발생할 수 있기 때문에 any는 최대한 사용하지 않는 게 좋다.

## unknown
any와 unknown 모두 범위가 넓은 type이라 헷갈릴 수 있지만 any와 unknown은 분명히 다르다.

### any
- 어떤 타입이든 any 타입에 할당이 가능하다.
- any 타입은 never를 제외한 어떤 type이든 할당이 가능하다.

### unknown
- 어떤 type이든 unknown 타입에 할당이 가능하다.
- any 타입을 제외한 다른 타입에 할당이 불가능하다.

```ts
let unknownValue: unknown;

unknownValue = 0;
unknownValue = "hello, world!";
unknownValue = true;
unknownValue.hi.print = () => console.log("hi");
```
위 코드들은 모두 정상적으로 작동한다. 하지만 아래 코드를 보면 any와 무엇이 다른지 알 수 있다.

```ts
let unknownValue: unknown;

let anyValue: any = unkownValue; // 가능
let numValue: number = unknownValue; // 불가능
let strValue: string = unknownValue; // 불가능
```
any 타입에는 unknown 타입이 할당 가능하지만 다른 타입에는 unknown 타입 할당이 불가능한 것을 볼 수 있다. 알 수 없는 값을 할당할 수는 없기 때문이다.

unknown 타입은 어떤 타입을 할당할 때는 오류가 발생하지 않지만 할당한 값을 가져오거나 호출(함수)할 때는 오류를 발생시킨다.

unknown이 이러한 특징을 가진 이유는 any에서 발생하는 문제점들을 보완하기 위해 나온 타입이기 때문인데 위의 말은 unknown 타입은 어떤 값이든 될 수 있지만

엄격한 타입 검사를 강제한다는 의미를 담고있다. any 보다 훨씬 안정적이기 때문에 data 구조를 파악하기 힘들 때는 any보다는 unknown을 사용하는 게 안전하다.

## void
함수의 타입을 정의할 때는 매개변수와 반환 값의 타입을 지정해줘야한다. 이때 ts에서 아무것도 반환하지 않는 함수는 반환 값을 void로 설정해주어야한다.

## never
never 타입은 void와 마찬가지로 주로 함수에서 주로 사용되는 개념이다. 단 void는 값을 반환하지 **않는**, never는 반환할 수 **없는**이라는 차이가 있다.

주로 never가 반환되는 함수는 크게 2가지로 나뉜다. 에러를 발생시킬 때와 무한히 함수가 실행될 때가 있다.

throw 키워드를 사용하면 에러를 발생시킬 수 있는데 ts는 값을 반환하는 것으로 간주하지 않는다.

무한히 실행되는 함수는 결국 함수가 종료되지 않는 것을 의미하기 때문에 값을 반환하지 못한다. 따라서 무한히 실행되는 함수의 반환 값은 never이다.

```ts
function shootError(): never {
  throw new Error("hello, Error");
}

function infinityLoop(): never {
  while (true) {
    //...
  }
}
```
never는 자신을 제외한 어떤 타입도 never 타입에 할당될 수 없는데 이유는 never는 모든 타입의 하위타입이기 때문이다. 아무리 any 타입이라도 

never에 할당하는 것은 불가능하다.
