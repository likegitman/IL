# typeof
> 객체 데이터를 __객체 타입__ 으로 변환해주는 연산자이다.
> 만약 객체에 쓰인 타입 구조를 그대로 가져와 독립된 타입으로 만들어 사용하고 싶다면 `typeof`를 사용하여
> 해당 객체를 구성하는 타입 구조를 가져와 사용할 수 있다.

## Example
```js
const obj = {
  car: "car",
  train: "train",
  bus: "bus",
};

type Vehicle = typeof obj;
/*
  type Vehicle = {
    car: string,
    train: string,
    bus: string,
  }
*/

const obj2:Vehicle = {
  car: "good",
  train: "not bad",
  bus: "perfect",
}
```

# keyof
> 객체 형태의 타입을 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자이다.

## Example
```js
type typeObj = {
  car: string;
  train: string;
  bus: string;
}

type Union = keyof typeObj;
// type Union = car | train | bus

const c:Union = "car";
const t:Union = "train";
const b:Union = "bus";
```

### 일반 객체의 key값들을 상수로 쓰고 싶을 때
```js
// 상수 타입 구성을 위해서 타입 단언을 한다.
const obj = { game: "LOL", sports: "baseball", food: "pizza" } as const;

type Hobby = keyof typeof obj; // 객체의 key들만 가져와 상수 타입으로쓴다.
// type Hobby = "game" | "sports" | "food"

let hb1: Hobby = "game";
let bb2: Hobby = "sports";
let hb3: Hobby = "food";
```

### 일반 객체의 value들을 상수로 쓰고 싶을 때
```js
const obj = { game: "LOL", sports: "baseball", food: "pizza" } as const;

type Hobby = tupof obj[keyof typeof obj];
// type Color = "LOL" | "baseball" | "pizza"

let hb1: Hobby = "LOL";
let bb2: Hobby = "baseball";
let hb3: Hobby = "pizza";
```
