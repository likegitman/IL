# React.lazy
> `React`에서 `component` 파일을 코드의 최상단에 `import`로 정의하고 동적으로 불러오기를 사용하면 에러가 발생한다. 만약 이 오류를
> 생기게 하고 싶지않다면 `React.lazy()`를 사용해야한다. `React.lazy method`를 사용하면 동적 가져오기를 사용하여 구성 요소 수준에서
> `React Application`을 쉽게 코드 분할을 할 수 있다. `Code Splitting`(분할)을 간단히 말하자면 코드에서 당장 사용하는 부분만을 로드하고
> 현재 필요하지 않은 코드 부분은 따로 분리시켜 나중에 로드함으로써 로딩시간을 개선하는것이다.

## 사용하는 이유
> 일반적으로 규모가 큰 `React Application`은 많은 요소, 라이브러리 등으로 구성된다. 필요할 때만 `Application`의 다른 부분을 로드하려고
> 하지 않으면 `CSR`의 특성상 첫 페이지를 로드하는 때에 대규모 `Javascript bundle`이 사용자에게 전송된다. 이것은 페이지 성능에 큰 영향을
> 줄 수 있는데 `React.lazy`를 사용하면 이러한 문제를 쉽게 해결할 수 있다.

## Example
### LazyComponent
```js
const LazyComponent = () => {
  return <div>Learn React.lazy!</div>
}
```

### App
```js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } form 'react-router-dom'

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <Router>
      <h1>Hello, React.lazy!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/lazy' element={<LazyComponent />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
```
> `React.lazy()`는 `import()` 구분을 반환하는 `callback` 함수를 인자로 받는다. `React component`를 포함해야하고
> `default export`를 가진 `component`여야 한다.  
> [Suspense 참고](/REACT/suspense.md)
> 공식문서에서는 `react-router-dom`과 `Suspense`를 함께 사용하는 것을 권장한다.
