# 타입 추론 (Type Interface)
TypeScript가 코드를 해석해 나가는 동작을 의믜한다.

```js
let city = 'a new york';
console.log(city.toUppercase());
// error: 'toUppercase' 속성이 'string'형식에 없습니다.
// 'toUpperCase'를 사용하시겠습니까?
```
위 코드에서 type을 명시해주지 않아도 TypeScript는 초깃값으로부터 타입을 **추론**한다.

## 가장 적절한 타입 (Best Common Type)
TypeScript는 보통 몇 개의 표현식을 바탕으로 타입을 추론한다. 그 표현식을 이용해 가장 **근접한** 타입을
 
추론하게 되는데 이 때 가장 근접한 타입을 **Best Common Type**이라고한다.

`let arr = [0, 1, null];`

위와 같은 배열이 있다고 한다면 arr이라는 배열의 타입을 추론하기 위해 각각의 아이템을 살펴봐야된다.

당연히 각각의 아이템을 본다면 타입은 크게 number와 null이라는 타입으로 구분된다.

 이때 Best Common Type 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정한다.

## 문맥상의 타이핑 (Contextual Typing)
TypeScript에서 타입을 추론하는 또 다른 방식은 바로 문맥상으로 타입을 결정하는 것이다.

이 문맥상의 타입 결정은 코드의 **위치**를 기준으로 일어나게 된다.

```js
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);
  console.log(mouseEvent.kangaroo);
  // error: 'MouseEvent' 형식에 'kangaroo' 속성이 없습니다.
}
```

위 코드에서 타입 체커는 window.onmousedown에 할당되는 함수의 타입을 추론하기 위해 window.onmousedown의 타입을 검사한다.

검사가 끝나고 나면 함수의 타입이 마우스 이벤트와 연관이 있다고 추론하기에 mouseEvent 인자에 button 속성은 있지만

kangaroo라는 속성은 존재하지 않는다고 판단해 해당 줄에 에러 메시지를 뛰운다.

```js
window.onscroll = function(uiEvent) {
  console.log(uiEvent.button);
  // error: 'Event' 형식에 'button' 속성이 없습니다.
}
```

위 코드는 반대로 window.onscroll에 할당되었기 때문에 함수의 인자인 uiEvent에는 button 속성이 없다고 판단한다.

하지만 문맥상으로 타입을 추론하기 때문에 다음과 같은 코드에서는 오류가 발생하지 않는다.

```js
const handler = function(uiEvent) {
  console.log(uiEvent.button);
}
```

아까와 같이 window.onscroll은 TypeScript가 타입을 추론할 수 있겠지만 함수가 할당되는 변수의 타입을 

추정하기 어렵기 때문에 오류 메시지를 띄우지 않는다.
