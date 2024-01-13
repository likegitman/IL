# useState
React에서 기본으로 제공해주는 hooks중 하나로 컴포넌트에 상태 변수를 추가할 수 있도록 해주는 함수이다.

2개의 요소를 갖는 배열을 반환하고 첫 번째 원소에는 상태 값이 반환되며 두 번째 원소에는 이 상태를 변경할 수 있게 해주는

setter 함수가 반환된다. 보통 구조 분해 할당을 사용해 선언한다.
`const [state, setState] = useState(initialState);`

useState에서 반환된 setter 함수를 호출하면 state를 변경할 수 있고 렌더링이 발생한다. 여기서 state를 변경할 때

setter함수는 비동기적으로 동작한다. 그렇기에 만약 setter 함수를 호출한 후에 바로 다음 줄에서 state 값을 참조하면

아직 바뀌기 전인 state가 참조되게 된다. setter 함수가 비동기적으로 동작하기 때문인데 인자로 새로운 값이나

업데이터 함수를 전달하게 되면 바로 상태가 업데이트 되는게 아니라 그 값이나 업데이터 함수는 대기열에 들어가게 된다.

그리고 렌더링이 진행될 때 대기열에 들어가 있던 값으로 상태가 업데이트 되거나 업데이터 함수가 호출되어

상태가 업데이트 된다. 여기서 업데이터 함수라는 얘기를 했는데 업데이터 함수는 어떤 경우에 필요할까?

업데이터 함수란 인자에 prev 즉, 이전 값이 넘어오면서 next state 값이 반환되게 되어있도록 정의된 함수이다.

따라서 업데이터 함수를 사용해야할 때는 이전 값을 참조해야하는 경우이다.

```js
const [number, setNumber] = useState(0);

useEffect(() => {
  setNumber((prev) => prev + 1);
  setNumber((prev) => prev + 1);
  setNumber((prev) => prev + 1);
  setNumber((prev) => prev + 1);
  setNumber((prev) => prev + 1);
}, []);
```
업데이터 함수 자체도 인자에 이전 상태 값을 받아올 수 있지만 업데이터 함수들끼리도 이전에 호출된

업데이터 함수에서 반환된 상태 값을 이전 상태 값으로 참조할 수 있다. 만약 업데이터가 아니라 새로운 값을 넣는다면

```js
const [number, setNumber] = useState(0);

useEffect(() => {
  setNumber(number+ 1);
  setNumber(number+ 1);
  setNumber(number+ 1);
  setNumber(number+ 1);
  setNumber(number+ 1);
}, []);
```
첫 번째 코드에서 number는 5가 되겠지만 위 코드에서 number는 1이된다.

## 동작원리

### react module
useState 함수가 선언되어 있는 node_modules/cjs/react.development.js 코드를 살펴보자

```js
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
```
위 코드처럼 useState는 dispatcher라는 인스턴스를 생성하고 initialState라는 초깃값을 인자로 받아서

dispatcher.useState에 전달한 후 반환값을 return한다. dispatcher의 method인 useState에 initialState를 전달하면

배열을 반환하고 이 배열안에 state와 setter 함수가 있다.

그럼 dispatcher를 반환하는 resolveDispatcher를 살펴보자.

```js
function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
```

이 함수에서도 dispatcher를 어디선가 가져오고 error를 처리한다.

```js
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};
```
위 ReactCurrentDispatcher라는 객체는 전역에 선언된 객체이고 속성으로 current를 가진다. 바로 이 current가

dispatcher가 담길 공간이다. 따라서 useState는 실행될 때마다 dispatcher를 선언하고 useState method를 실행해서

그 값을 반환하고 할당부를 거슬러 올라가니 dispatcher는 전역 변수 ReactCurrentDispatcher로부터 가져온다.

### setter 함수는 상태를 어떻게 변경시킬까?
```jsx
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  const onClick = () => {
    console.log("clicked");

    setState(1);

    if (state === 1) console.log("실행되는가?");
  };

  return <button onClick={onClick}>click!</button>;
}
```
App 컴포넌트 함수는 실행되면 useState를 호출해서 반환값을 비구조화 할당을 통해 변수에 저장한다.

여기서 중요한것은 App도 함수라는 것인데 jsx를 반환하는 함수일 뿐이다. 렌더링이 시작되면 이 함수가 호출되어

새로운 jsx를 반환한다.

```jsx
let _value;

export useState(initialValue) {
  if (_value === undefined) {
    _value = initialValue;
  }

  const setState = (newValue) => {
    _value = newValue;
  }

  return [_value, setState];
}
```
위 코드는 간단하게 작성한 react module 코드이다. useState가 이렇게 동작한다는 것만 알아두면 좋다.

보이는 것처럼 useState 밖에 전역으로 선언된 _value 변수가 있고 우리가 useState를 통해 관리하는 상태는

바로 이 _value이다. setState는 App 함수에 선언된 state가 아니라 자신이 선언된 위치에서 접근할 수 있는

_value를 변경하는 것이다. 

### 순서

#### 웹이 로딩되고 최초로 App 함수 호출
1. App은 인수로 0을 전달하며 useState를 호출한다.
2. useState는 실행될 때마다 초기값을 전달받지만 내부적으로 _value가 undefined인지 확인해서
   최초 호출에만 초값을 _value에 할당하고 그 후에 초기값은 사용되지 않는다.
3. 이후 _value와 그 값을 재할당하는 setState 함수를 배열에 담아 반환한다.

#### setState 호출
1. 전달받은 값 1을 _value에 할당한다.
2. 컴포넌트 리렌더링을 트리거한다.

#### setState가 실행돼 리렌더링이 발생
리렌더링 과정에서 해당 컴포넌트 함수가 실행되고 새로운 jsx를 반환한다. setState가 리렌더링을 트리거하여

App 함수가 2번째로 실행됐을 때
1. 다시 인수 0을 useState에 전달하며 호출한다.
2. useState는 내부적으로 _value를 확인하고 undefined가 아닌 값이 할당되어 있기 때문에 초기값 할당문을 실행하지않는다.
3. 두 번재로 실행된 App 함수 내부에서 useState가 반환한 값을 비구조화 할당으로 추출해 변수에 할당한다.

setState 함수는 자신과 함께 반환된 변수를 변경시키는게 아니라 (const로 선언된) 다음 useState가 반환할

react module의 _value를 변경시키고 컴포넌트를 리렌더링 시키는 역할을 한다. 변경된 값은 useState가 가져온다.
