# non-null assertion 연산자
이 연산자는 TS에서 type checker가 늘어놓는 불평을 잠재우는 연산자다. (undefined이거나 null이 아니라고 단정짓는 연산지)  
ex) `변수 is possibly null`, `변수 is possibly undefined` 등등과 같이 말이다.  
```ts
interface AddFuncParameter {
  num1: number | undefined;
  num2: number | undefined;
}

const add = ({ num1, num2 }: AddFuncParameter) => {
  return num1 + num2;
  // 'num1' is possibly 'undefined'
  // 'num2' is possibly 'undefined'
}

add({ num1: 2, num2: 3 });
```

여기서 이 변수에 뒤에 `!`를 붙여주면 type checker가 나타내는 빨간 줄이 없어진다.  
```ts
interface AddFuncParameter {
  num1: number | undefined;
  num2: number | undefined;
}

const add = ({ num1, num2 }: AddFuncParameter) => {
  return num1! + num2!;
}

add({ num1: 2, num2: 3 });
```

물론 좋은 기능이라고 생각할 수 있지만 이런 기능은 타입 면에서 너무나 불안하다. ( 빨간줄을 안 볼 수 있다ㅏ!라는 기쁨은 느낄 수 있다. )  
그렇기에 non-null assertion 연산자는 확실히 null이나 undefined가 들어오지 않을거란 확신이 들 때 사용하고  
가급적 타입 가드나 nullish 병합 연산자를 이용하는게 좋다.

타입 가드 예시
```ts
interface AddFuncParameter {
  num1: number | undefined;
  num2: number | undefined;
}

const add = ({ num1, num2 }: AddFuncParameter) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;
  return num1! + num2!;
}

add({ num1: 2, num2: 3 });
```
