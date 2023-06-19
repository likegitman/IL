# React lazy

## 코드 분할
> 대부분 React 앱들은 Webpack, Rollup또는 Browserify 같은 툴을 사용하여 여러 파일을 하나로 병합한 __번들__ 된 파일을
> 웹페이지에 포함하여 한 번에 전체 앱을 로드할 수 있다.

### App.js
```js
import { add } from './math.js';

console.log(add(10, 20)); // output: 30
```

### Math.js
```js
export function add(a + b) {
  return a + b;
}
```

### Bundle
```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20)) // output: 30
```

> 번들링은 좋지만 개발하는 Application이 커지면 번들도 따라서 커지게 된다. 번들이 커지는 것을 방지하기 위한 방법은
> 번들을 __나누는__ 것이다. 코드 분할은 런타임에 여러 번들을 동적으로 만들고 불러오는것으로 번들러가 지원하는 기능이다.
> 코드분할은 우리의 Application을 __지연 로딩__ 을 할 수 있게 도와주고 사용자에게 성능향상을 제공한다.  또힌, 코드의 양을
> 줄이지 않고도 사용자가 필요하지 않은 코드를 불러오지않게 하며 초기화 로딩에 필요한 비용을 줄인다.

## import()
> 코드 분할을 도입하는 가장 좋은 방법이다.

### App.js
```js
import("./math").then((math)=> {
  console.log(math.add(10, 20))
})
```

## React.lazy()
> 동적 import를 사용해서 컴포넌트를 렌더링 시킬 수 있다.
> App이 처음 렌더링 될 때 About 컴포넌트를 포함한 번들을 자동으로 불러온다.
> React.lazy()는 동적 import()를 호출하는 함수를 인자로 가지고 이 함수는 React 컴포넌트를
> default export로 가진 모듈 객체가 실행되는 Promise를 반환해야 한다.
> lazy는 `Suspense`라는 컴포넌트의 하위에서 렌더링 되어야하며 Suspense 컴포넌트는 lazy 컴포넌트가
> 로드되길 기다리는 동안 loading화면과 같은 예비 콘텐츠를 볼 수 있게 한다.

### App.js
```js
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./About'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </>
  );
}
```
> fallback props는 컴포넌트가 로드될 때까지 기다리는 동안 렌더링하려는 React Element를 받아들인다.  
> Susoense 컴포넌트는 lazy 컴포넌트를 감싸고 하나의 Suspense 컴포넌트로 여러 lazy 컴포넌트를 감쌀 수 있다.
