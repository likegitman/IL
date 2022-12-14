# ref
> 컴포넌트 내부에서 DOM에 직접 접근해야 할 때 사용(DOM을 직접적으로 건드려야 할 때)

## DOM을 꼭 사용해야 하는 상황
* 특정 input tag에 포커스를 줘야 할 때
* 스크롤 박스를 조작해야 할 때
* Canvas 요소에 그림을 그려야 할 때 등

## USE
1. 콜백 함수를 이용한 ref 설정  
`<input ref={(ref)=>this.input=ref} />`

2. 리액트에 내장되어있는 createRef()를 이용한 ref 설정  
`input = React.createRef();`
