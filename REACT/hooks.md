# React Hooks
React 공식문서에서는 React 16.8 버전부터 React 요소로 새로이 추가됐다. Hooks을 이용하여 기존 Class 바탕의 코드를 

작성할 필요없이 state와 여러 React의 기능을 사용할 수 있다고 말한다.

## 등장배경
React의 컴포넌트는 클래스형과 함수형으로 나뉜다. hooks가 등장하기 전에는 state를 만들고 접근하거나 Life Cycle같은

기능을 사용하기 위해 클래스형 컴포넌트 선언을 해줘야했다. 함수형 컴포넌트는 주로 간단한 표시용 컴포넌트로 사용되었다.

함수형 컴포넌트는 한 번 호출되고 메모리상에서 사라지기 때문에 state 접근과 Life Cycle 구현이 불가능했다.

하지만 클래스형 컴포넌트를 사용하다보니 여러가지 문제가 발생했다.

#### 컴포넌트간에 로직의 재사용이 불가능하다.
render props나 HOC와 같은 패턴을 통해 문제를 해결할 수 있지만 이러한 패턴은 코드를 추적하는 것을 어렵게한다.

즉, 코드가 복잡해진다. 이런 불편함이 있어도 상태와 생명주기를 다룰 수 있는건 클래스형 컴포넌트밖에 없었기에

계속해서 클래스형 컴포넌트를 사용해왔다. **React Hooks**가 등장하기 전까지는.

### 등장
Hook은 React 16.8 버전부터 새로 추가된 기능으로 함수형 컴포넌트에서 state와 Life Cycle을 연동할 수 있게해준다.

Hook은 함수형 컴포넌트에서만 동작하고 클래스형 컴포넌트에서는 동작하지 않는다. 이전에 React가 겪던 문제들을

해결해주며 클래스형 컴포넌트를 사용하지 않고도 함수형 컴포넌트에서 state 접근과 자식 요소에 접근이 가능해졌다.

로직을 재사용하기 위해 자신이 직접 Hook을 만드는 것도 가능해졌다.

### 상태

### 클래스형 컴포넌트
```jsx
import React from "react";

class Example extends React.Component {
  state = {
    count: 0,
  };

  setCount = (num) => {
    this.setState({
      count: num,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => this.setCount(count + 1)}>+1</button>
      </div>
    );
  }
}

export default Example;
```

### 함수형 컴포넌트
```jsx
import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Example;
```

간단한 예시인데도 한눈에 봐도 함수형 컴포넌트가 훨씬 코드도 적고 가독성있다.

### 생명주기

### 클래스형 컴포넌트트
```jsx
import React from "react";

class Example extends React.Component {
  state = {
    message: "hello, world!",
  };

  componentDidMount() {
    console.log("Mount!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Update!", prevState.message, this.state.message);
  }

  componentWillUnmount() {
    console.log("Unmount!");
  }

  handleButtonClick = () => {
    this.setState({ message: 'updated message!' });
  };

  render() {

    console.log('render!');

    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleButtonClick}>Update Message</button>
      </div>
    );
  }
}

export default Example;
```

### 함수형 컴포넌트
```jsx
import React, { useState, useEffect } from 'react';

const ExampleFunctional = () => {
  const [message, setMessage] = useState('hello, world!');

  useEffect(() => {
    console.log('Mount!');

    return () => {
      console.log('Unmount!');
    };
  }, []);

  useEffect(() => {
    console.log('Update!', message);

    return () => {
      console.log('cleanup Update');
    };
  }, [message]);

  const handleButtonClick = () => {
    setMessage('updated message!');
  };

  console.log('render!');

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleButtonClick}>Update Message</button>
    </div>
  );
};

export default ExampleFunctional;
```
생명주기를 다루는 코드에서도 여러가지로 쪼개진 생명주기 메서드를 사용하는 것보단 useEffect라는 hooks를 사용해

작은 함수의 묶음으로 컴포넌트를 나누는 함수형 컴포넌트 코드가 더 깔끔하고 눈에 더 잘들어온다.

## 규칙

### 1. 최상위에서만 Hook을 호출해야한다. 훅을 호출하는 순서는 항상 같아야한다.
- 반복문이나 조건문, 중첨된 함수 내에서 Hook을 사용하면 안 된다.
- Hook의 호출 순서가 같아야하는 이유
  - React가 상태값을 구분할 수 있는 유일한 정보는 Hook이 사용된 순서이다.
  - 반복문 안에서 Hook을 호출했을 때 반복문이 true라면 괜찮지만 값이 falsf라면 건너뛰게된다.
    이렇게 되면 실행순서가 바뀌게돼서 오류가 발생한다.
  - 조건문이나 반복문을 사용하고 싶을 때는 useEffect 안에 넣어 사용하면 된다.
### 2. React 함수형 컴포넌트 내에서만 Hook을 호출해야 된다.
일반 js함수에서는 Hook을 호출하면 안 된다. 즉, React 함수형 컴포넌트 바깥에서 Hook은 사용하면 안 된다.
