# React Context API
> `React Component` 간에 어떠한 값을 공유할 수 있게 해주는 기능이다. `Context`는 주로 전역적으로 필요한 값을 다룰 때 사용할 수 있다.
> 주로 사용하는 것이지, 무조건 전역적일 필요는 없다. 단지 `props`가 아닌 또 다른 방식으로 `component`간에 값을 전달하는 방법이다.
> 왜 `props`가 아니고 다른 방식으로 처리하는지 의문이 들 수 있다.
```js
function App() {
  return <GrandParent value="Hello World!" />;
}

function GrandParent({ value }) {
  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <GrandChild value={value} />;
}

...

function GrandChild({ value }) {
  return <div>props drilling: {value}</div>;
}
```
> 위 코드를 보면 부모에서 자식으로 `props`를 1,2 개가 아니라 꽤 많이 거쳐서 사용하는 것을 볼 수 있는데 만약 규모가 큰 프로젝트에서
> 위 코드보다 더 많이 props를 내려줘야 될 경우가 생길 수 있는데 이렇게되면 자식의 `props`가 어느 부모에서부터 내려온 것인지 일일이
> 찾아봐야되고 나중에 props이름을 변경시키고 싶어질 때도 하나하나 props의 이름을 변경시켜줘야하는 불편함도 생기고 더불어
> props가 많다면 가독성도 좋지않다.

## Example
```js
import { createContext } from 'react'
const MyContext = createContext()

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <GrandParent />
    </MyContext.Provider>
  )
}

function GrandParent() {
  return <Parent />
}

function Parent() {
  return <Child />
}

function Child() {
  return <GrandChild />
}

function GrandChild() {
  const value = useContext(MyContext)
  return <div>context: {value}</div>
}
```
> `props drilling`을 해주던 아까 코드보다 훨씬 가독성도 좋고 유지보수하기도 좋아졌다. 이렇게 다른 경우에도 편하게 값을 전역적으로
> 가져올 수 있다. 같은 `Context API`를 많이 사용한다면 `custom hook`으로 만들어 줄 수도있다.

## Context에서 State 다루기
> `Context`에서 유동적인 값을 관리하는 경우에는 `Provider`를 새로 만들어주는것이 좋다.

### 1. Component에서 상태 변경 로직
```js
import { createContext, useState } from 'react'

const CounterContext = createContext()

function CounterProvider({ children }) {
  const counter = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  const value = useContext(CounterContext)
  if (value === undefined) return
  return value
}

function Value() {
  const [counter] = useCounterState()
  return <h1>{counter}</h1>
}

function Buttons() {
  const [, setCounter] = useCounterState()
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </div>
  )
}

function App() {
  return (
    <CounterProvider>
      <Value />
      <Buttons />
    </CounterProvider>
  )
}

export default App
```

### 2. Provider에서 상태 변경 로직
```js
import { createContext, useContext, useMemo, useState } from 'react';

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(1);
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      }
    }),
    []
  );

  const value = useMemo(() => [counter, actions], [counter, actions]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}


function useCounter() {
  const value = useContext(CounterContext);
  if (value === undefined) return
  return value;
}

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

function Value() {
  const [counter] = useCounter();
  return <h1>{counter}</h1>;
}

function Buttons() {
  const [, actions] = useCounter();

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

export default App;
```


## Context 분리
> `Context`는 보통 자주 사용되는 전역 변수를 관리하기 때문에 보통 자주 업데이트된다.
> 하지만 위의 코드는 상태가 변경되면 두 컴포넌트 모두 리렌더링이 일어난다.
```js
import { createContext, useContext, useMemo, useState } from 'react'

const CounterValueContext = createContext()
const CounterActionsContext = createContext()

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(1)
  const actions = useMemo(
    () => ({
      increase() {
        setCouter((prev) => prev + 1)
      },
      decrease() {
        setCounter((prev) => prev - 1)
      }
    }),
    []
  )

  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterValueContext.Provider value={counter}>
        {children}
      </CounterValueContext>
    </CounterActionsContext>
  )
}

function useCounterValue() {
  const value = useContext(CouterValueContext)
  if (value === undefined) return
  return value
}

function useCounterActions() {
  const value = useContext(CounterActionsContext);
  if (value === undefined) return
  return value;
}


function Value() {
  const counter = useCounterValue();
  return <h1>{counter}</h1>;
}
function Buttons() {
  const actions = useCounterActions();

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  )
}

export default App
```

## 전역적이 아닐수도
> 물론 `Context API`는 전역적으로 써도 좋지만 불필요한 코드를 줄이거나 반복되는 것을 재사용성이 좋게 바꿀수도 있다.

### Example
```js
import { useState } from 'react'

function Item({ active, children, onClick }) {

  return (
    <div
      style={{background: active ? 'red' : 'blue'}}
      onClick={onClick}
    >
      {children}
    </div>  
  )
}

function App() {
  const [activeId, setActiveId] = useState(1)

  return (
    <div>
      <Item active={activeId === 1} onClick={() => setActiveId(1)}>1</Item>
      <Item active={activeId === 2} onClick={() => setActiveId(2)}>2</Item>
      <Item active={activeId === 3} onClick={() => setActiveId(3)}>3</Item>
    </div>
  )
}
```
> 만약 `Item` 컴포넌트가 이것뿐 아니라 더 반복된다면 상당히 비효율적인 코드일 것인데 `Context`를 이용하면 더 효율적으로 리팩토링할 수 있다.
```js
const ItemGroupContext = createContext()
function ItemGroup({activeId, children, onSelect}) {
  const value = useMemo(() => ({
    activeId,
    onSelect
  }), [activeId, onSelect])

  reutrn (
    <ItemGroupContext.Provider value={value}>
      {children}
    </ItemGroupContext.Provider>
  )
}

function useItemGroup() {
  const value = useContext(ItemGroupContext)
  if (value === undefined) return
  return value
}

function Item({children, id}) {
  const { activeId, onSelect } = useItemGroup()
  const active = activeId === id

  return (
    <div
      style={{background: active ? 'red' : 'blue'}}
      onClick={() => onSelect(id)}
    >
      {children}
    </div>
  )
}

function App() {
  const [activeId, setActiveId] = useState(1)
  const [diffActiveId, setDiffActiveId] = useState(4)

  return (
    <div>
      <ItemGroup activeId={activeId} onSelect={setActiveId}>
        <Item id={1}>1</Item>
        <Item id={2}>2</Item>
        <Item id={3}>3</Item>
      </ItemGroup>
      <ItemGroup activeId={activeId} onSelect={setActiveId}>
        <Item id={4}>4</Item>
        <Item id={5}>5</Item>
        <Item id={6}>6</Item>
      </ItemGroup>
    </div>
  )
}

export default App
```
> 보기에는 코드량만 늘어난 것으로 보일 수 있지만 똑같은 여러개의 `props`를 넘겨주던 코드에서 한 컴포넌트에 `props`를 넘겨주고
> `Context`를 읽어와 값을 편하게 재사용할 수 있도록 바꾼 것을 볼 수 있다.

### [참고](https://velog.io/@velopert/react-context-tutorial)
