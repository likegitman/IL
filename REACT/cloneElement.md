# cloneElement
element를 기준으로 새로운 React Element를 만들 수 있게 해줍니다.

`const clonedElement = cloneElement(element, props, ...children)`

- element
유효한 React Element. JSX shem, createElement, cloneElement로를 호출해 얻은 결과물 등이 해당한다.

- props
객체 또는 null이어야 한다. null을 전달받으면 복제된 element는 원본 element.props를 모두 유지한다.
하지만 객체로 전달하면 element.props보다 전달한 props가 우선순위가 더 높다. 나머지 props는 원본 element.props로
채워진다.

- ...children (선택사항)
0개 이상의 자식 노드가 필요하다. React Element 또는 문자열, 숫자, null, undefined 등을 포함한 모든 React 노드가 해당한다.
...children을 전달하지 않으면 원본 element.children이 유지된다.

새로운 React Element를 만들기 위해 element를 기준으로하며 props와 children을 다르게 하여
cloneElemnet를 호출한다.

## Example
```js
import { cloneElement } from 'react';

const clonedElement = cloneElement(
  <Row title="Cabbage">
    Hello
  </Row>,
  { isHighlighted: true },
  'Goodbye'
);

console.log(clonedElement); // <Row title="Cabbage" isHighlighted={true}>Goodbye</Row>
```
