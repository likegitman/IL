# Proto Type
> JS는 class라는 개념이 없다. 그래서 기존의 객체를 복사하여 새로운 객체를  
> 생성하는 프로토타입 기반의 언어이다. 프로토타입 기반 언어는 객체 원형인 프로토타입을  
> 이용하여 새로운 객체를 만들고 생성된 객체 역시 또 다른 객체의 원형이 될 수 있다.  
> 프로토타입은 객체를 확장하고 객체 지향적인 프로그래밍을 할 수 있도록 도와준다.  

# 함수와 객체의 내부 구조
> JS에서는 함수를 정의하고 파싱단계에 들어가면 내부적으로 수행되는 작업이 있다.  
> 함수 멤버로 prototype속성이 있고 이 속성은 다른 곳에 생성된 함수이름의 프로토타입 객체를  
> 참조한다. 또, 이 프로토타입 객체의 멤버인 constructor속성은 정의한 함수를 참조하는 내부구조를 가진다.  
![스크린샷 2023-03-25 213308](https://user-images.githubusercontent.com/105215297/227717698-fa815c22-56f4-4b55-bd8e-ce2a5b14c78b.png)  
> 위 이미지의 code는 `function Person(){}`이다.  
> Person 함수의 prototype속성이 참조하는 Person프로토타입 객체는 아래 code와 같이  
> `new Person()`을 통해 생성된 모든 객체의 원형이 되는 객체이다.  
```javascript
function Person(){}

let minsu = new Person();
let woonrin = new Person();
```
