# Component
> 리액트에서 컴포넌트는 2가지로 나뉜다.

## 1. 함수형 컴포넌트
1. 클래스형 컴포넌트보다 선언하기 편하고 메모리 자원을 더 사용한다.
2. 리액트 훅으로 state 및 라이프사이클 API 등을 사용할 수 있다.
3. 일반적인 함수 선언 방식이 있고 arrow function선언 방식이 있다. (arrow function은 함수를 파라미터로 전달할 때 유용함)
```
function Component(){
  return(
    ...
  );
}

export default Component;
```

```
const Component = () => {
  return(
    ...
  );
}

export default Component;
```

## 2. 클래스헝 컴포넌트
1. state기능 및 라이프 사이클 기능을 사용할 수 있고 임의 메서드를 정의할 수 있다.
2. render() 함수가 곡 있어야하고 그 안에서 return()으로 JSX문법을 반환해야한다.
```
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
