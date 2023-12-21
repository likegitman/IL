# Call by value
js에서 어떤 함수에 매개변수를 넘길 때 기본형 또는 원시형을 넘길 때는 Call by value 방식으로 넘긴다.

여기서 말하는 기본형이란 number, string, boolean, null, undefined 등이다. Call by value는 복사된 값을

인자로 넘겨서 매개변수로 전달한다. 장점은 원본 데이터를 건드리지 않고 값을 복사해서 처리하기 때문에 안전하다.

값을 복사하기 때문에 메모리 사용량이 늘어나는 것이 단점이다.

# Call by reference
Call by value는 기본형을 매개변수로 넘길 때 사용된다면 Call by reference는 참조형을 매개변수로 넘길때 사용된다.

참조형이란 배열, 함수, 객체, 정규표현식 등이있다. 실제 데이터가 존재하는 주소를 가리키는 주소값을 인자로 넘겨서 

매개변수로 전달한다. 복사하지 않고 주소를 직접 참조하기에 빠르다. Call by value는 값을 복사했지만 

Call by reference는 값을 직접 참조하기에 원본 데이터가 영향을 받아 위험하다는 단점이 있다.

```js
function foo(obj2) {
  obj2 = 10;
  console.log(obj2); // output: 10
}

let obj1 = { a: 5, b: 8 };
foo(obj1);
console.log(obj1); // output: { a: 5, b: 8 }
```
분명 객체를 넘겼는데 원래의 값이 변하지 않았다. 그 이유는 js는 객체의 프로퍼티 값이 아닌 객체 자체의 

변경을 허용하지  않기 때문이다. 겉보기로는 주소값을 참조하는 것 같지만 실제로는 주소값의 복사본을 만들어

넘기고 있다.

## Examples
```js
function fn(obj) {
  obj = null;
  console.log(obj); // output: null
}

let b1 = {"a": 1};
fn(b1);
console.log(b1); // output: {"a": 1}
```
위 코드도 b1 이라는 객체를 null로 만드는 것 같지만 js는 허용하지 않는다. obj라는 인자에는 복사된 주소값이

들어가게되고 넘긴 b1이라는 주소값에 값이 할당되는 것이 아니라 또 다른 주소값에 null이 할당된다.

이 규칙은 객체뿐만 경우에 적용된다. 기본형을 넘겨도 마찬가지이다.

```js
function fn(a) {
  a = 5;
}

let x = 1;

fn(x);
console.log(x); // output: 1
```
하지만 객체의 속성은 변할 수 있다.

```js
const x = { "a": 1 };
function fn(obj) {
  obj.a = 5;
}

fn(x);
console.log(x); // output: { a: 5 }
```
객체의 속성이 변하는 이유는 참조형의 복사본인 객체를 전달했고 이 객체는 말했듯이 다른 주소값을 가지지만

둘 다 똑같은 `{"a": 1}`이라는 값을 **바라보고**있기 때문이다. 이런 상태에서 obj의 속성이 변화하면

결국 똑같은 값을 바라보고 있는 a의 속성도 변하게 되는것이다.

```js
function fn(b) {
  b = b.a = 1;
  b.b = 3;
}

const a = {};
fn(a);
console.log(a); // output: { a: 1 }
```
fn의 첫 줄인 `b = b.a = 1;`는 변수 a가 가리키는 값에 `{a: 1}`이 할당되고 두번째 줄은 기본형에 프로퍼티에

값을 할당했기 때문에 무시된다.
