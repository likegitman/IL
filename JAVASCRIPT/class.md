# Class
객체 지향 프로그래밍에서 사용되는 다양한 기능을 자바스크립트에서도 사용할 수 있다.
```js
class ExClass {
  constructor() {...}
  method1() {...}
  method2() {...}
  method3() {...}
  // ...
}
```
이렇게 class를 만들고 new ExClass()를 호출하면 내부에서 정의한 method가 들어있는 객체가 생성된다.

객체의 기본 상태를 설정해주는 생성자 메서드인 constructor는 new에 의해 자동으로 호출되므로 특별한

절차없이 객체를 초기화할 수 있다.
```js
class User {
  constructor(name) {
    this.name = name;
  }

  printHi() {
    console.log(this.name);
  }
}

let user = new User("woonrin");
user.printHi();
```
위 코드는 new User("woonrin")을 호출하여 새로운 객체가 생성되고 인수인 woonrin이 this.name에 할당된다.

이 과정을 거친 후에 user.printHi()같은 method를 호출할 수 있는것이다. class는 사실 이름만 class이고

**js에서 class는 함수이다.**
```js
class User {
  constructor(name) { this.name = name; }
  printHi() { console.log(this.name); }
}
console.log(typeof User); // output: function
```
User가 하는 일은 다음과 같다.
1. User라는 이름을 가진 함수를 만든다. 함수 본문은 생성자 method인 constructor에서 가져온다. 
   생성자 method가 없으면 본문이 비워진 채로 함수가 만들어진다.
2. printHi와 같은 class 내에서 정의한 method를 User.prototype에 저장한다.

new User를 호출해 객체를 만들고 객체의 method를 호출하면 method를 prototype property를 통해가져온다.

이런 과정이 있기에 class내 method에 접근할 수 있다. 

```js
class User {
  constructor(name) { this.name = name }
  printHi() { console.log(this.name) }
}
console.log(typeof User); // output: function
console.log(User === User.prototype.constructor); // output: true
console.log(User.ptorototype.printHi); // output: printHi() { console.log(this.name) }
console.log(Object.getOwnPropertyNames(User.prototype)); // output: ["constructor", "printHi"]
```
class말고 class 역할을 하는 함수를 선언할 수 있기 때문에 class를 왜 쓰는지 의문이 생기기도한다.

```js
functino User() {
  this.name = name;
}

User.prototype.printHi = function() {
  console.log(this.name);
}

let user = new User("woonrin");
user.printHi();
```
위 코드는 class 키워드 없이 순수 함수로 class 역할을 하는 함수를 선언하는 방법이다. class 키워드를

사용한 방식이라 결과는 차이가 얼마없다. 하지만 두 방법에는 중요한 차이가 있는데

### 1. class로 만든  함수에는 특수 내부 프로퍼티 `[[IsClassConstructor]]: true`가 이름표처럼 붙는다.
이것만으로도 큰 차이가 있는데 js는 다양한 경우에 위 이름가 활용한다. class 생성자를 new와 함께 호출하지 않으면

오류가 발생한다.
```js
class User() {
  constructor() {}
}

User(); // Class constructor User cannot be invoked without 'new'
```
분명 위에서 User를 console로 찍었을 때 함수 타입이라고 했지만 함수처럼 그냥 호출하면 오류가 발생한다.

이때 `[[IsClassConstructor]]: true`가 사용되는데 class 생성자를 문자열로 형변환하면 `class...`로 시작하는

문자열이 되는데 이때도 위 키워드가 사용된다. 위 키워드는 객체가 클래스의 생성자 함수로 사용될 수 있는지 여부를 나타낸다.
```js
class User() {
  constructor() {}
}

console.log(User); // class User { ... }
```

### 2. class에 정의된 method는 열거할 수 없다. 
class의 prototype property에 추가된 method의 enumerable 플래그 값은 false이다. `for..in`으로 객체를 순회할 때

method는 순회 대상에서 제외하고자 하는 경우가 많으므로 이 특징은 꽤 유용하다.

### 3. class는 항상 strict mode로 실행된다. 
class 생성자 안 코드 전체엔 자동으로 strict mode가 적용된다.

## 표현식
```js
let User = class {
  printHi() { console.log("hello, world!"); }
}
```
class 표현식에 이름을 넣으면 해당 class내부에서만 class 이름에 접근할 수 있다.
```js
let User class ExClass {
  printHi() { console.log(ExClass); }
}

new User().printHi();
console.log(User); // output:  ReferenceError: ExClass is not defined
```
위 예시들은 무조건 class가 선언되지만 동적으로 생성하는것도 가능하다.
```js
function makeClass(str) {
  return class {
    printHi() {
      console.log(str);
    };
  };
}

let User = makeClass("hello, world!");
new User().printHi();
```

## getter, setter
class는 getter, setter, computed property를 지원한다. 여기서 getter, setter는 User.prototype에 정의된다.

### getter, setter
```js
class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      console.log("이름이 너무 짧습니다.");
      return;
    }
    this._name = value;
}

let user = new User("woonrin");
user = new User(""); // output: 이름이 너무 짧습니다.
```

### computed property
computed property(계산된 속성)은 객체 리터럴 내에서 동적으로 속성 이름을 생성하는 기능이다.
```js
class User {
  ['print' + 'Hi']() {
    console.log("hello, world!");
  }
}

new User().printHi();
```

## class field
class field라는 문법을 사용하면 어떤 종류의 property든 class에 추가할 수 있다.
```js
class User {
  name = "woonrin";

  printHi() {
    console.log(name);
  }
}

new User.printHi();
```
class를 정의할 때 `property name = value`의 형식으로 써주면 간단히 class field를 만들 수 있다.

만약 class field를 사용하지 않는다면 constructor에서 처리할 수도 있지만 더 간단히 변수를 초기화

하는 것을 원한다면 class field를 사용하는 것이 유용하다. 이때 class field를 사용해서 선언하고 초기화한

변수는 prototype이 아닌 개별 객체에서만 설정된다.
```js
class User {
  name = "woonrin";
}

let user = new User();
console.log(user.name); // output: woonrin
console.log(User.prototype.name); output: undefined
```
굳이 변수가 아니라 복잡한 식을 넣어도 된다. `name = prompt("이름을 입력해주세요.", "woonrin");`

## binding
js에서 this 키워드는 동적으로 결정된다. 따라서 객체 method를 여기저기 전달해 전혀 다른 context에서

호출하게 되면 this는 method가 정의된 객체를 참조하지 않는다.
```js
class Button {
  constructor(value) {
    this.value = value
  }

  click() {
    console.log(this.value);
  }
}

let button = new Button("clicked!");
setTimeout(button.click, 2000); // output: undefined
```
this의 context를 알 수 없게 되는 문제를 losting this라고 한다. 이 문제를 해결하는 방법은

class field를 사용하거나 래퍼 함수를 전달해서 해결할 수 있다.

#### class field
```js
class Button {
  constructor(value) {
    this.value = value
  }

  click = () => {
    console.log(this.value);
  }
}

let button = new Button("clicked!");
setTimeout(button.click, 2000); // output: clicked!
```

#### 래퍼 함수
```js
class Button {
  constructor(value) {
    this.value = value
  }

  click() {
    console.log(this.value);
  }
}

let button = new Button("clicked!");
setTimeout(() => button.click, 2000); // output: clicked!
```
