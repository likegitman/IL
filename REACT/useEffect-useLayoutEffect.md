> useEffect와 useLayoutEffect의 차이를 알기 전에 알아야 될 개념들이 있다.
> 첫 번째로 Render인데 Render란 DOM tree를 구성하기 위해서 각 element의 style 속성을 계산하는 과정이다.
> 두 번째는 Paint라는 개념이다. Paint란 실제 스크린에 Layout을 표시하고 업데이트하는 과정이다.

# useEffect
component들이 render와 paint 된 후 실행된다. 또 비동기적으로 실행되는데 paint가 된 후에 실행되기 때문에

useEffect 내부에 DOM에 영향을 주는 코드가 있을 경우 사용자 입장에서는 화면의 깜빡임을 보게된다.

data를 가져오거나 이벤트 핸들러, state 초기화 등의 작업에서는 useEffect를 사용하는 것이 권장된다.

## useLayoutEffect
컴포넌트들이 render 된 후에 실행되며 그 이후에 paint가 된다. useEffect와 다르게 동기적으로 실행된다.

paint가 되기전에 실행되기 때문에 DOM을 조작하는 코드가 존재하더라도 사용자에게 깜빡임을 보여주지않는다.
```jsx
const Component = () => {
  const [number, number] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 200 + 4);
    }
  }, [value]);

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => setValue(0)}>reset</button>
    </div>
  );
}
```
위 코드는 useEffect를 사용하면 처음에 사용자에게 0이 보여지고 난 후 리렌더링 돼 화면이 깜빡이게된다.

따라서 위의 상황에서는 useLayoutEffect를 사용하는 것이 낫다.
