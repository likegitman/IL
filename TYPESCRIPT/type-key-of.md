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
> 객체 형태의 타입을 따로 속성들만 뽑아 모아 유니온 타이ㅂ으로 만들
