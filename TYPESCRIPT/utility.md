# Utility
> 일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 `utility` 타입을 제공한다.

## Partial<Type>
`Type` 집합의 모든 프로퍼티를 선택적으로 타입을 생성한다. 이 유틸리티는 주어진 타입의 

모든 하위 타입 집합을 나타내는 타입을 반환한다.
```js
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## Required<Type>
`Type` 집합의 모든 프로퍼티를 필수로 설정한 타입을 생성한다. Partial<Type>의 반대라고 생각하면 된다.
```js
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 }; // error
```

## Readonly<Type>
type 집합의 모든 프로퍼티를 읽기 전용으로 설정한 타입을 생성한다. 그렇기에 생성된 

타입의 프로퍼티는 재할당 될 수 없다.
```js
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello"; // error
```

## Record<Keys, Types>
> `type`의 프로퍼티와 `key`의 집합으로 타입을 생성한다. 이 유틸리티는 타입의 프로퍼티를 다른 타입에
> 매핑 시키는데 사용될 수 있다.
```js
interface PageInfo {
  title: string;
}
 
type Page = "home" | "about" | "contact";
 
const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
 
nav.about;
```

## Pick<Type, Keys>
> `type`에서 프로퍼티 `keys`의 집합을 선택해 타입을 생성한다.
```js
interface Todo {
  title: string
  description: string
  completed: boolean
}

tyep TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
```

## Omit<Type, Keys>
`type`에서 모든 프로퍼티를 선택하고 `key`를 제거한 타입을 생성한다.
```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
todo;
 
const todo: TodoPreview
```

## Exclude<Type, ExcludedUnion>
`ExcludedUnion`에 할당할 수 있는 모든 union 멤버를 `Type`에서 제외하여 타입을 생성한다.
```ts
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a", "b">; // type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string| number
```

## Extract<Type, Union>
`Union`에 할당할 수 있는 모든 union 멤버를 `Type`에서 가져와 타입을 생성한다.
```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // type T0 = "a"
type T1 - Extract<string | number | (() => void), Function>; // type T1 = () => void
```

## NonNullable<Type>
`Type`에서 null과 정의되지 않은 것을 제외하고 타입을 생성한다.
```ts
type T0 = NonNullable<string | number | undefined>; // type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>; // type T1 = string[]
```

## Parameters<Type>
함수 타입 `Type`의 매개변수에 사용된 타입에서 튜플 타입을 생성한다.
```ts
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>; // type T0 = []
type T1 = Parameters<(s: string) => void>; // type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>; // type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>; // type T3 = [arg: {a: number;b: string;}]
type T4 = Parameters<any>; // type T4 = unknown[]
type T5 = Parameters<never>; // type T5 = never
type T6 = PArameters<string>; // error: string 유형은 (...args: any) => any의 제약조건을 충족하지 않습니다. type T6 = never;
```

## ConstructorParameters<Type>
생성자 함수 타입의 타입에서 튜플 또는 배열 타입을 생성한다. 모든 매개변수 타입을 가지는 튜플 타입을 생성한다.

Parameters와 마찬가지로 제약조건에 맞지 않으면 오류를 발생시킨다.
```ts
type T0 = ConstructorParameters<ErrorConstructor>; // type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>; // type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>; // type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParamters<any>; // type T3 = unknown
```

## ReturnType<Type>
함수 `Type`의 반환 타입으로 구성된 타입을 생성한다.
```ts
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>; // type T0 = string

type T1 = ReturnType<(s: string) => void>; // type T1 = void

type T2 = ReturnType<<T>() => T>; // type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // type T3 = number[]

type T4 = ReturnType<typeof f1>; // type T4 = { a: number; b: string; }

type T5 = ReturnType<any>; // type T5 = any
```

## InstanceType<Type>
`Type`의 생성자 함수와 인스턴스 타입으로 구성된 타입을 생성한다.
```ts
class C { // ts의 class 선언방식
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // type T0 = C
type T1 = InstanceType<any>; // type T1 = any
type T2 = InstanceType<never>; // type T2 = never
```
