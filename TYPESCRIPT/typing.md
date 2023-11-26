# Type System

## 구조적 타이핑
```ts
interface Animal {
  name: string;
  age: number;
}

interface People {
  name: string;
  age: number;
}

let animal: Animal = { name: 'Ggami', age: 10 };
let people: People = { name: 'Woonrin', age: 18 };

animal = people;
people = animal;
```
TypeScript에서는 이름으로 타입을 구분하는 명목적인 타이핑이 아니라 **구조**로 타입을 구분한다. 이를 구조적 타이핑이라고 한다.

## 구조적 서브타이핑
객체가 가지고 있는 속성을 바탕으로 타입을 구분하는 것이다. 이름이 다른 객체여도 가지고 있는 속성이 같다면 서로 호환이 가능한 타입으로 인식한다.
```ts
interface Animal {
  name: string
}

interface People {
  name: string
  age: number
}

let animal: Animal;
let people: People = { name: "Woonrin", age: 18 };

animal = people;
```
위의 두 interface들은 가지고 있는 속성의 개수가 다르다. 하지만 이름이 일치하는 속성인 name이 있기 때문에 animal 변수에 people 변수를 할당할 수 있다.

당연히 구조적 서브타이핑은 함수에서도 적용된다.
```ts
interface Animal {
  name: string
}

let people = { name: string, age: number };

function showName(parameter: Animal) {
  console.log(parameter.name)
}

showName(people)
```
parameter의 타입은 name으로 한정되어 있다. 하지만 타입을 명시하지 않은 people이라는 변수를 매개변수로 줘도 people이 Animal의 속성인 name을 갖고있어

parameter.name으로 접근이 가능하기에 오류가 발생하지 않는다. TypeScript가 type을 가지는 다른 언어들처럼 이름으로 구분하는 방식말고 구조로 구분하는 이유는

ts가 js를 닮은 언어이기(슈퍼셋) 때문이다. js는 덕 타이핑을 기반으로 하는데 덕 타이핑은 어떤 타입에 부합하는 변수나 메서드를 가질 경우 해당 타입에 속하는 것으로

간주하는 방식이다. 둘 다 객체가 가진 속성을 기반으로 타입을 검사하는데 이렇게 보니 구조적 타이핑과 덕 타이핑은 꽤 비슷한 것을 알 수 있다.

차이점이 있다면 타입을 검사하는 시점에 있다. 덕 타이핑은 js의 타이핑 방식이기에 런타임에서 타입을 검사하고 구조적 타이핑은 컴파일타임에서 타입을 검사한다.

