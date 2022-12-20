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
2. shouldComponentUpdate
* 컴포넌트가 리렌더링을 해야할지 말아야 할지를 결정하는 메서드,
  true 혹은 false를 반환해야하고 true를 반환한다면 다음 라이프사이클 메서드를 계속 실행하고
  false를 반환한다면 작업을 중지 => 리렌더링이 되지 않음
3. render
* 컴포넌트를 리렌더링
4. getSnapshotBeforeUpdat
* 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
5. componentDidUpdate
* 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

## UnMount
> 마운트의 반대, 컴포넌트를 DOM에서 제거하는 것

> 언마운트가 호출하는 메서드
1. componentWillUnmount
> 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
