# Type System

## 타입 에너테이션
변수나 상수 혹은 함수의 인자와 반환 값 등에 타입을 명시해서 어떤 타입의 값이 저장될 것인지를 컴파일러에 직접 알려주는 문법이다.
```ts
let isDone: boolean = false;
let age: number = 18;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number];
```
TypeScript에서는 `: type`을 제거해도 정상적으로 작동한다. 단지 작성하지 않으면 타입 시스템이 타입 추론을 하는 과정에서 어려움을 겪는다.

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

parameter.name으로 접근이 가능하기에 오류가 발생하지 않는다.

