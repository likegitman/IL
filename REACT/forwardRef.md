# forwardRef
> `React` 컴포넌트에 `ref prop`을 넘겨서 그 내부에 있는 `HTML` 엘리먼트에 접근을 하게 해주는 함수이다.  
> ref란? [ref](/REACT/ref.md)
```js
import { useRef } from 'react'

function Input({ref}) {
  return <input type='text' ref={ref} />
}

export default function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return <Input ref={inputRef} />
}
```
> 위 코드는 잘 동작할 것 처럼 생겼지만 `React`에서는 다음과 같은 오류를 보여준다.
```
Warning: Input: `ref` is not a prop. Trying to access it will result in `undefined` being returned.
If you need to access the same value within the child component, you should pass it as a different prop.
(https://reactjs.org/link/special-props)
```
> `ref`는 `map` 함수를 돌릴 때 명시해야하는 `key prop`처럼 특수한 용도이기 때문에 prop을 넘길 수 없다.  
> 그래서 위 오류는 `ref`는 `prop`이 아니라서 `undefined`이기 때문에 다른 `prop`을 사용해야 한다고 경고한다.  
> 물론 다른 이름으로 prop을 넘겨줄 수 있지만 이러면 가독성에 문제가 생길 가능성이 있다. 여기서 `forwardRef`를  
> 사용한다면 다른 이름말고 그냥 `ref`라는 이름으로 `prop`을 넘길 수 있다.

## Example
```js
import { useRef } from 'react'

const Input = forwardRef((props, ref) => {
  return <input type='text' ref={ref} />
})
export default function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return <Input ref={inputRef} />
}
```
> 물론 넘겨야되는 prop의 이름이 꼭 ref여야 되는 상황이 아니면 사용하지 않아도 잘 작동한다.
