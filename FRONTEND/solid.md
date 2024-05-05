# SOLID ( 객체 지향 설계 5대 원칙 )
객체 지향 설계 5대 원칙이란
- SRP: 단일 책임 원칙
- OCP: 개방-폐쇄 원칙
- LSP: 리스코프 치환 원칙
- ISP: 인터페이스 분리 원칙
- DIP: 의존 역전 원칙

## SRP ( Single Responsiblity Principle )
단일 책임 원칙이란 코든 클래스는 각각 하나의 책임만 가져야 한다는 원칙이다.  
각 클래스는 하나의 책임만을 가져야한다는 것인데 실제로 예시를 들자면  
맥도날드 같은 햄버거 전문점에서는 철저한 분업이 이루어진다.  
이러한 분업 시스템은 햄버거 생산에 큰 효율을 불어넣는다. 프로그래밍에서도 동일하다.  
각각의 클래스가 단일 책임을 갖게 되면 개발에 큰 효율성을 가져다주게 된다.  
React에서는 컴포넌트나 함수의 단위로 이 원칙을 적용할 수도 있다.  

만약 아래 예시 함수가 어떤 type을 조건문으로 확인해 어떤 결과를 반환하는 함수라고 치자.  
어떤 기능의 변경 사항이 생겼을 때 이 함수를 수정해야한다면 그 목적은 반드시 어떤 type과 관련된 문제여야 한다.  
```js
const conditionFn = (type) => {
  if (type === 'common') return ...;
  else if (type === 'special') return ...;
}
```
type과 관련된 변경이 생겼을 경우 해당 함수만 처리해주면 되기에 변경에 빠르게 대응할 수 있다.  
만약 아래와 같이 여러 기능이 있다면 함수는 단일 책임을 갖지 않는다.  
한 기능만 수정해야하는데도 개발자는 여러 기능이 있는 함수를 보게 되기에 유지보수면에서 좋지 않다.  
```js
const conditionFn = (type) => {
  let cnt = 0;
  if (type === 'common') return ...;
  else if (type === 'special') return ...;
  else return cnt++;
}
```

## OCP ( Open Closed Principle )
확장에는 열려있으며 변경에는 닫혀있어한다. 라는 규칙이다.  
조금 헷갈릴 수 있는 말이지만 **기능의 작동**은 변경될 수 있지만 **기능의 작동을 작성한 코드 자체**는 변경되지 않아야한다.  
```js
let colors = ['red', 'blue'];
let colorMaker = {
  makeIceCream: (color) => {
    if (colors.indexOf(color) > -1) {
      console.log(`I have ${color}`);
    } else {
      console.log(`I don't have ${color}`);
    }
  },
};
```
위 코드에서 새로운 색상이 추가되어야 한다는 변경이 생겼을 때 보통 직접 colors라는 배열을 건드릴 것이다.  
하지만 이는 코드 자체를 변경하면 안 된다는 규칙을 어기는 행위이다.  
확장에 열려있도록 아래와 같이 작성할 수 있다.  
```js
let colors = ['red', 'blue'];
let colorMaker = {
  makeIceCream: (color) => {
    if (colors.indexOf(color) > -1) {
      console.log(`I have ${color}`);
    } else {
      console.log(`I don't have ${color}`);
    }
  },
  addColors: (color) => {
    colors.push(color);
  }
};
```
이렇게 되면 코드 자체를 수정하지 않고도 어디에서든 색상을 새로 추가할 수 있다. 

## LSP ( Liskov Substitution Principle )
파생 클래스는 기본 클래스로 대체가 가능해야 한다. 라는 규칙이다.  
확장을 통해서 파생된 클래스는 기초가 되는 클래스의 기능을 전부 사용이 가능 해야한다는 의미이다.  
js는 객체 지향 언어이기 때문에 당연히 extends 키워드를 사용하면 LSP를 지킬 수 있다.  

React + TS를 주로 사용하기에 ts에서 쉽게 지킬 수 있다.  
```ts
interface Person {
  name: string;
  age: number;
}

interface Child extends Person {
  height: number;
}
```

## ISP ( Interface Segregation Principle )
자신이 사용하지 않는 인터페이스는 구현하지 말아야 한다. 라는 규칙이다.  
당연한 말일 수 있지만 사용되지 않음에도 생성되어있는 인터페이스들을 자주 볼 수 있다.  
이는 객체 지향 프로그래밍의 상속에서도 낭비가 발생할 수 있는데 위에서 코드로 설명한 상속의 예시에서  
부모의 name과 자식의 height만 Child 타입에 필요하다면 age는 낭비가 된다고도 볼 수 있다.  
낭비되는 자원이 없는지 신중히 살펴보아야 한다.

## DIP ( Dependency Inversion Principle )
고수준 모듈은 저수준 모듈에 의존해서는 안 된다.라는 규칙이다.  
객체에서 어떤 Class를 참조해서 사용해야하는 상황이 생긴다면 Class를 직접 참조하는 것이 아니라  
그 대상의 상위 요소로 참조해야 한다. 여기서 상위 요소란 추상 클래스나 인터페이스를 의미한다.  
객체들은 서로 정보를 주고 받을 때 의존 관계가 형성된다.  
여기서 **추상성이 낮은 클래스**보다 **추상성이 높은 클래스**와 통신을 하는 원칙을 가지고 정보를 주고 받는다.  
이를 DIP 원칙이라고 한다.

위에서 의존 관계가 형성된다고 했는데 의존 관계란 한 클래스가 어떤 기능을 수행하려고할 때 다른 클래스의 서비스가  
필요한 경우를 말한다. 의존을 해야하기에 의존 관계라고 부른다.  
예를들어 A 클래스의 메서드에서 매개변수를 다른 B 클래스의 타입으로 받아 B 객체의 메서드를 사용한다고 했을 때  
A는 B 클래스에 의존한다고 할 수 있다.

설명이 길어서 잘 이해가 되지 않는다면 아래 코드를 확인해보자.  
```java
class Dog {
  print() {
    console.log('dog!');
  }
}

class Cat {
  print() {
    console.log('cat!');
  }
}

class Zoo {
  constructor() {
    this.dog = new Dog();
    this.cat = new Cat();
  }

  printAll() {
    this.dog.print();
    this.cat.print();
  }
}
```
위 코드는 DIP를 잘 지키지 못 한 예시이다. 고수준 클래스인 Zoo가 Dog와 Cat 클래스에 의존성을 가지고 있기 때문이다.  
만약 새로운 동물이 추가된다면 Zoo를 직접 수정해야하며 OCP를 지킬 수도 없게된다.  
지금까지 설명한 DIP를 생각했을 때 어떻게 바꿀 수 있을까?  
```java
class Animal {
  print() {
    // ...
  }
}

class Dog extends Animal {
  print() {
    console.log('dog!');
  }
}

class Cat extends Animal {
  print() {
    console.log('cat!');
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  printAll() {
    for (const animal of this.animals) {
      animal.print();
    }
  }
}

const zoo = new Zoo();
const dog = new Dog();

zoo.addAnimal(dog);
```

구체적인 클래스가 아니라 Animal이라는 추상화 클래스를 만들고 Dog와 Cat이 의존성을 가지도록 했다.  
그리고 addAnimal이라는 메서드의 추가로 새로운 동물의 추가에도 부담이 줄게되며  
변경 사항이 생겨도 addAnimal을 이용해 원본 Zoo를 수정하지 않아도 된다.  

이렇게 DIP를 지킨다면 저수준 클래스의 구현은 계속 해나가더라도 고수준 클래스는 독립적이어야하고  
추가적인 수정이 필요해지면 안 된다. OCP와 비슷하다.
