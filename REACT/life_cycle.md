# Life Cycle
> 라이프 사이클은 3가지의 카테고리인 마운트, 업데이트, 언마운트로 나뉜다.

## Mount
> DOM이 생성되고 웹 브라우저상에 나타나는 것

> 마운트가 호출하는 메서드
1. constructor
* 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드.
2. getDerivedStateFromProps
* props에 있는 값을 state에 넣을 때 사용하는 메서드
3. render
* 내가 준비한 UI를 렌더링하는 메서드
4. componentDidMount
* 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

## Update
> 컴포넌트가 업데이트되는 4가지의 경우
1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거 할 때

> 업데이트가 호출하는 메서드
1. getDerivedStateFormProps
* 마운트 과정에서도 호출되며 업데이트가 시작되기 전에도 호출 됨  
  props의 변화에 따라 state에도 변화를 주고싶을 때 사용
