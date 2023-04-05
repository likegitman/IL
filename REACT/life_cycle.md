# Life Cycle
### 라이프 사이클은 3가지의 카테고리인 마운트, 업데이트, 언마운트로 나뉜다.

# Mount
### DOM이 생성되고 웹 브라우저상에 나타나는 것

## 마운트가 호출하는 메서드
1. constructor
* 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드.
2. getDerivedStateFromProps
* props에 있는 값을 state에 넣을 때 사용하는 메서드
3. render
* 내가 준비한 UI를 렌더링하는 메서드
4. componentDidMount
* 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

# Update
### 컴포넌트가 업데이트되는 4가지의 경우
1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거 할 때

## 업데이트가 호출하는 메서드
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

# UnMount
### 마운트의 반대, 컴포넌트를 DOM에서 제거하는 것

## 언마운트가 호출하는 메서드
1. componentWillUnmount
> 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

# render()
1. 컴포넌트의 모양새를 정의한다.  
2. 이 메서드 안에서 this.props와 this.state에 접근할 수 있고 리액트 요소를 반환한다.  
3. 요소는 태그가 될 수도있고 컴포넌트가 될 수도 있다.  
4. 이벤트 설정이 아닌곳에는 setState를 사용하면 안되고 브라으저의 DOM에도 접근해서는 안 된다.
5. DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 한다.

# constructor()
`constructo(props) {...}`
1. 이 메서드는 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행된다.  
2. 이 메서드에서는 초기 state를 정의할 수 있다.

# getDerivedStateFromProps()
1. 이 메서드는 리액트 v16.3 이후에 새로 만든 라이프사이클 메서드이다.
2. props로 받아온 값을 state에 동기화시키는 용도로 사용하고 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.
```javascript
static getDerivedStateFromsProps(nextProps, prevState) {
  if(nextProps.value !== prevState.value) { // 조건에 따라서 특정 값 동기화
    return {value: nextProps.value};
  }
  return null; // state를 변경할 필요가 없다면 null을 반환
}
```

# componentDidMount()
`componentDidMount() {...}`
1. 이 메서드는 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행한다.
2. 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록,  
   stTimeout, setInterval, 네트워크 요청같은 비동기 작업을 처리한다
