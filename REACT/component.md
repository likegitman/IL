# Component
> `JSX` 태그를 `return`하는 함수나 클래스를 `component`라고 한다. component를 통해 명시적으로 layout을
> 구성하고 반복되는 내용들을 효율적으로 관리해 코드를 많이 줄일 수 있다. 리액트에서 UI 요소를 구분할 때
> 사용하는 기본 단위이기도하다. 만약 장난감 블록으로 집을 쌓는다고하면 집을 구성하는 블록 하나하나가
> 컴포넌트라고 할 수 있다. 리액트에서 컴포넌트는 2가지로 나뉜다.

## 1. 함수형 컴포넌트
### 1. 클래스형 컴포넌트보다 선언하기 편하고 메모리 자원을 더 사용한다.
### 2. React Hooks로 Class에서만 사용할 수 있던 state 및 LifeCycle API 등을 사용할 수 있다.
### 3. 일반적인 함수 선언 방식이 있고 arrow function선언 방식이 있다.
```javascript
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

## JSX
> `JavaScript`에서 `HTML`의 태그를 사용해 `component`를 구성하는 것을 도와주는 문법이다.
> 특히 `React`에서 이 문법이 유용하다. 다음과 같은 예시를 살펴보면 왜 유용한지 알 수 있다.
```js
<div>
  <h1>
    Hello <strong>World!</strong>
  </h1>
</div>

// createElement
function App () {
  return React.createElement('div', null, 'Hello ', React.createElement('strong', null, 'World!'));
}

// JSX
function App() {
  return (
    <div>
      <h1>
        Hello <strong>World!</strong>
      </h1>
    </div>
  )
}

export default App;
```
> 한눈에 봐도 `JSX`가 `createElement`보다 가독성이 좋고 개발자들에게도 익숙한 코드가 된다. 이러한 `JSX`는  
> `Babel`이란 것을 통해 `createElement`를 사용한 코드로 변환된다. `HTML`과 몇가지 차이점이 있는데 간단하게 보면  
> **부모 태그가 2개 이상**일 수 없고 **`JavaScript` 표현식을 태그내에서 사용** 할 수 있다.

```js
// Vanilla
<div>
	<h1 id="hello">Hello,</h1>
</div>

<script>
  const text = 'World!';
  const hello = document.getElementById('hello');

  hello.innerText = `Hello, ${text}!`;
</script>

// React
function App() {
	const hello = 'World!';

	return (
		<div>
			<h1>Hello, {hello}!</h1>
		</div>
	)
}

// 삼항 연산자
function App() {
  const text = 'Woonrin!';
  const age = 18;

	return (
		<div>
			<h1>Hello, {!text ? 'World' : text}!</h1>
      <h2>{age && `I'm ${age}`}</h2>
		</div>
	)
}
```
