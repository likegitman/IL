# Component
> 리액트에서 UI 요소를 구분할 때 사용하는 단위이다.  
> 만약 장난감 블록으로 집을 쌓는다고하면 집을 구성하는 블록 하나하나가  
> 컴포넌트라고 할 수 있다. 
> 리액트에서 컴포넌트는 2가지로 나뉜다.

## 1. 함수형 컴포넌트
1. 클래스형 컴포넌트보다 선언하기 편하고 메모리 자원을 더 사용한다.
2. React Hooks로 state 및 라이프사이클 API 등을 사용할 수 있다.
3. 일반적인 함수 선언 방식이 있고 arrow function선언 방식이 있다. (arrow function은 함수를 파라미터로 전달할 때 유용함)
```javscript
function Component(){
  return(
    ...
  );
}

export default Component;
```

```javascript
const Component = () => {
  return(
    ...
  );
}

export default Component;
```

## 2. 클래스헝 컴포넌트
1. state기능 및 라이프 사이클 기능을 사용할 수 있고 임의 메서드를 정의할 수 있다.
2. render() 함수가 꼭 있어야하고 그 안에서 return()으로 JSX문법을 반환해야한다.
```javascript
import { Component } from "react";
class ClassComponent extends Component {
  render(
    return(
      ...
    );
  )
}

export default ClassComponent;
```

## 구성요소
1. property(props)
> 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터이다. property값은  
> 자식 컴포넌트에서 수정이 불가하고 부모 컴포넌트에서만 수정이 가능하다.
2. state
> 컴포넌트의 상태를 저장하고 수정 가능한 데이터이다.
3. context
> 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터이다.
> 주로 컴포넌트가 아주 많은데 전달하는 props는 같을 때 사용한다.
