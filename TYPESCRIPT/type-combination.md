# 타입 조합

## 교차 타입
여러가지 타입을 결합하여 하나의 단일 타입으로 만들 수 있다. 기존에 존재하는 다른 타입들을 합쳐서 해당 타입의 모든 멤버를 가지는 새로운 타입을 만들어낸다.

`&`를 사용해 표기하고 이렇게 탄생한 단일 타입에는 타입 별칭을 붙일 수도 있다.
```ts
type ProductItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ProductItemWithDiscount = ProductItem & { discountAmount: number };
```

## 유니온 타입
교차타입은 `A & B`일 때 A와 B 타입 모두 갖고 있다면 유니온 타입은 A또는 B 타입 중에 하나가 될 수 있는 타입을 말하며 `|`로 표기한다.
```ts
type ProductItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CardItem = {
  id: number;
  name: string;
  price: number;
}

type PromotionEventItem = ProductItem | CardItem;

const printPromotionItem = (item: PromotionEventItem) => {
  console.log(item.name); // ok
  console.log(item.quantity); // error
};

printPromotionItem();
```
위에서 오류가 발생하는 이유는 quantity 속성은 ProductItem에만 존재하기 때문인데 PromotionEventItem은 CardItem도 참조한다.

그런데 CardItem에는 quantity 속성이 없기 때문에 오류를 발생시킨다.

## 인덱스 시그니처
특정 타입의 속성 이름은 알 수 없지만 속성값의 타입을 알고 있을 때 사용한다.
```ts
interface IndexSignature {
  [key: string]: number;
}
```
위처럼 사용하는데 interface 내부에 새로운 속성을 추가할 때 이 추가된 속성은 인덱스 시그니처에 포함되는 타입이어야한다.
```ts
interface IndexSignature {
  [key: string]: number | string;
  name: string;
  price: number;
  isValid: boolean; // error
}
```

## 인덱스드 액세스 타입
다른 타입의 특정 속성이 가지는 타입을 조회하기 위해 사용된다.
```ts
type Example = {
  a: number;
  b: string;
  c: boolean;
};

type Indexed1 = Example["a"]; // number
type Indexed2 = Example["a" | "b"]; // number | string
type Indexed3 = Example[keyof Example]; // number | string | boolean

type Alias = "b" | "c";
type Indexed4 = Example[Alias]; // string | boolean
```
이것 말고도 배열의 요소 타입을 조회하기 위해 인덱스드 액세스 타입을 사용하는 경우가 있다.
```ts
const PromotionList = [
  { type: "product", name: "pizza" },
  { type: "product", name: "chicken" },
  { type: "card", name: "cheer-up" },
];

type ElementOf<T> = typeof T[number]

type PromotionItemType = ElementOf<PromotionList>;
// type PromotionItemType = { type: string; name: string; };
```

## 맵드 타입 (Maped Type)
이름처럼 js의 map 원리랑 비슷한데 js의 map은 배열 A를 기반으로 새로운 배열인 B를 만들어내는 함수이다.

맵드 타입은 다른 타입을 기반으로 한 새로운 타입을 선언할 때 사용한다. 인덱스 시그니처를 사용해 반복을 줄일 수도 있다.
```ts
type Example = {
  a: number;
  b: string;
  c: boolean;
};

type Subset<T> = {
  [K in keyof T]?: T[K];
};

const Example1: Subset<Example> = { a: 3 };
const Example2: Subset<Example> = { b: "hello, world!" };
const Example3: Subset<Example> = { a: 4, c: true };
```
맵드 타입에서 매핑할 때는 readonly와 ?를 수식어로 적용할 수 있다. readonly는 읽기 전용으로 만들고 싶을 때 붙여주는 수식어이고 

?는 선택적 매개변수로 만들고 싶을 때 붙여준다. 맵드는 이 수식어들을 붙이는 것뿐만 아니라 제거할 수도 있다.

```ts
type ReadOnlyEx = {
  readonly a: number;
  readonly b: string;
};

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type ResultType = CreateMutable<ReadOnlyEx>; // { a: number; b: string }

type OptionalEx = {
  a?: number;
  b?: string;
  c: boolean;
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type ResultType = Concrete<OptionalEx>; // { a: number; b: string; c: boolean }
```

## 템플릿 리터럴 타입
js의 템플릿 리터럴 문자열을 사용해 문자열 리터럴 타입을 선언할 수 있게 해준다. 
```ts
type Stage =
  | "init"
  | "select-image"
  | "edit-image"
  | "decorate-card"
  | "capture-image";

type StageName = `${Stage}-stage`;
// | "init-stage"| "select-image-stage" | "edit-image-stage" | "decorate-card-stage" | "capture-image-stage"
```
Stage 타입의 모든 유니온 멤버 뒤에 `-stage`를 붙여서 새로운 유니온 타입을 만들었다. 
