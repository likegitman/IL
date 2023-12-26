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

## Array
말 그대로 배열 타입을 가리킨다. Array 타입은 js에서도 확인할 수 있는데 `Object.prototype.toString.call(...)` 연산자를 통해 확인할 수 있다. 

이 연산자는 객체의 타입을 알아내는 데에 사용하는 함수이다. typeof를 사용할 수도 있지만 typeof의 경우 객체 타입을 단순히 object 타입으로 알려주지만 

`Object.prototype.toString.call(...)`는 객체의 instance까지 알려주기 때문이다.

```js
const arr = [];
console.log(Object.prototype.toString.call(arr)); // output: [object Array]
```
이미 js에서도 확인할 수 있는 자료형인데 왜 ts에서 다시 배열을 다루는지 의문이 들 수 있지만 js는 배열을 객체에 속하는 타입으로 보고 

ts는 Array 타입을 ts의 특수한 문법과 함께 다루어야한다. 또한 js에서는 배열에 여러 타입을 함께 넣어도 허용한다. 하지만 이는 ts의 정적 타이핑과 부합하지 않는다.

다른 정적 언어들에서도 여러 타입들이 섞인 배열은 허용하지 않는다. 만약 여러 타입을 허용하고 싶다면 유니온 타입을 이용해서 사용할 수 있다.

ts에서 배열 타입을 명시할 때는 Array 키워드를 사용하거나 []를 이용해서 명시할 수 있다.
```ts
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: number[] | boolean[] = [1, true, 3];
const arr4: Array<number | boolean> = [1, true, 3];
```
Array와 [] 선언 방식의 차이는 없고 컨벤션에 따라 사용하면 된다. 한 가지 차이점이 있다면 []를 사용했을 때 타입은 배열보다는 좁은 범위인 튜플이된다.

배열은 배열 길이에 제한을 두진 않지만 튜플은 배열의 하위 타입으로 배열에 길이 제한까지 추가된 타입 시스템이다. 여러 타입을 혼용하는 것도 가능하다.
```ts
let tuple: [number] = [1];
tuple = [1, 2, 3]; // output: error
tuple = [1, true]; // output: error

const tuple2: [number, boolean, string] =  [1, true, "hello, world!"];
```
배열은 사전에 허용하지 않는 값을 허용하지 않는다. 하지만 튜플은 이것에 더해 배열의 길이까지 제한하여 훨씬 안전한 타입이다.

## enum
열거형이라고 부르는 ts에서 제공하는 특별한 타입이다. enum은 일종의 구조체를 만드는 타입 시스템이다. enum을 사용해 열거형을 정의할 수 있는데

각각의 멤버를 가지고있다. js의 객체를 닮았지만 ts는 각 멤버의 값을 스스로 추론한다. 기본적으로 0부터 1씩 증가해 할당한다.
```ts
enum LanguageEnum {
  Typescript, // 0
  Javascript, // 1
  Rust, // 2
  C, // 3
  Python, // 4
  Go, // 5
}

LanguageEnum.TypeScript; // 0
LanguageEnum.["C"]; // 3
LanguageEnum[5]; // "Go"
```
아니면 일부러 값을 할당할 수 있는데 모든 멤버에 일일이 할당할 수도 있지만 일부 멤버에 값을 직접 할당하지 않아도 ts는 누락된 멤버를

아래와 같이 이전 멤버 값의 숫자를 기준으로 1씩 늘려가며 자동으로 반환한다.
```ts
enum LanguageEnum {
  Typescript = "TS",
  Javascript = "JS",
  Rust = 10,
  C, // 11
  Python, // 12
  Go, // 13
}
```
enum은 주로 문자열 상수를 생성하는 데 사용된다. 이를 통하여 응집력있는 집합 구조체를 만들 수 있다. 열거형은 그 자체로 변수 타입으로 지정할 수 있다.

열거형을 타입으로 가지는 변수는 해당 열거형이 가지는 모든 멤버를 값으로 받을 수 있다.
```ts
enum ItemEnum {
  DELIVERY_HOLD = "DELIVERY_HOLD", // 배송 보류
  DELIVERY_READY = "DELIVERY_READY", // 배송 준비 중
  DELIVERYNG = "DELIVERYNG", // 배송 중
  DELIVERED = "DELIVERED" // 배송 완료
}

const checkItemAvailable = (itemStatus: ItemEnum) => {
  switch(itemStatus) {
    case ItemEnum.DELIVERY_HOLD:
    case ItemEnum.DELIVERY_READY:
    case ItemEnum.DELIVERYNG:
      return false;
    case ItemEnum.DELIVERED:
    default:
      return true;
  }
}
```
위 함수의 인자인 itemStatus는 ItemEnum 열거형을 타입으로 가진다. 이를 통해 얻을 수 있는 효과는 ItemStatus의 타입이 문자열로 지정된 경우와 비교했을 때
### 타입 안정성
ItemEnum에 명시되지 않은 다른 문자열은 인자로 받을 수 없다.
### 명확한 의미 전달과 높은 응집력
ItemEnum 타입이 다루는 값이 무엇인지 명확하고 itemStatus에 대한 값을 모아놓은 것이기에 응집력이 뛰어나다.
### 가독성
응집도가 높기 때문에 말하고자 하는 바가 더욱 명확하다. 따라서 열거형 멤버를 통해 어떤 상태를 나타내는지 쉽게 이해할 수 있다.
