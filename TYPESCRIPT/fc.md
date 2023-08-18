# FC
> `Function Component`의 줄임말로 React와 Typescript를 이용하여 개발할 때 사용하는 type이다.  
> 함수형 컴포넌트(화살표 함수)로 개발하는 경우에 사용할 수 있다. 일반 함수에 경우에는 사용할 필요가 없다.

## Example
```js
import React from 'react'

interface Props {
  props: React.ReactNode
}

const Home:React.FC<Props> = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.age}</span>
    </div>
  )
} 
```

## 장점
#### 1. 함수 컴포넌트 규칙 일치
> 함수 컴포넌트를 작성할 때 React의 규칙과 일관성을 유지할 수 있다. 컴포넌트의 반환값이 JSX를 반환한다는  
> 사실을 명시적으로 나타내어 컴포넌트가 `JSX`를 렌더링하는 목적임을 분명하게 표현할 수 있다.

#### 2. Props 타입 추론
>  컴포넌트의 props에 대한 타입 추론이 더욱 정확하게 이루어진다.  
> 이는 타입 관련 버그를 줄이고 코드의 안정성을 향상시킬 수 있습니다.

## 단점
#### 1. children
> `FC`를 사용하면 함수 컴포넌트의 `children props`를 암시적으로 포함하게 된다. 이는 장점일 수도 있지만  
> `type`을 정확히 지정하며 js의 코드의 안정성을 향상시키는 `TypeScript`의 목적과 다르다. 따라서 children이라는  
> `prop`이 있다면 얼마든지 타입을 지정하지 않고 보낼 수 있기 때문에 type이 명확하지 않다.

#### 2. PropTypes
> FC를 사용하면 `PropTypes`를 정의할 수 없다. `PropTypes`는 컴포넌트의 `prop`에 대해 런타임 유형을
> 체크를 제공하는데에 도움을 주는 도구인데 이를 사용할 수 없게된다.
