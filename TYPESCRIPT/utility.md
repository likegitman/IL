# Utility
> 일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 `utility` 타입을 제공한다.

## Partial
> type 집합의 모든 프로퍼티를 선택적으로 타입을 생성한다. 이 유틸리티는 주어진 타입의  
> 모든 하위 타입 집합을 나타내는 타입을 반환한다.
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

## Required
> type 집합의 모든 프로퍼티를 필수로 설정한 타입을 생성한다. Partial<Type>의 반대라고 생각하면 된다.
```js
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 }; // error
```

## Readonly
> type 집합의 모든 프로퍼티를 읽기 전용으로 설정한 타입을 생성한다. 그렇기에 생성된 타입의  
> 프로퍼티는 재할당 될 수 없다.
```js
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello"; // error
```

## Record
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

## Pick
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

## Omit
> `type`에서 모든 프로퍼티를 선택하고 `key`를 제거한 타입을 생성한다.
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

