# next-redux-wrapper
> `React`에 `Redux`를 사용하는 것과 `NextJs`에 `Redux`를 사용하는 것은 다르다. 왜냐하면 리액트는 단 하나의 스토어만  
> 존재하지만 `NextJs`는 사용자가 요청할 때마다 새로운 `redux store`만 생성하기 때문이다. 그리고 `getServerSideProps`와
> `getStaticProps`등에서 `store`에 접근해야하는데 접근하지 못한다. 이럴 때 사용하는 것이 `next-redux-wrapper`이다.

## Install

### npm
`npm install next-redux-wrapper`

### yarn
`yarn add next-redux-wrapper`

## Example
### store/index.ts
```js
import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit'

import { createWrapper, HYDRATE } from 'next-redux-wrapper'

const NODE_ENV = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers({
  // redux slice || reducer...
})

const reducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload, user: { ...state?.user } }
    default:
      return rootReducer(state, action)
  }
}

const makeStore = () => {
  return configureStore({
    reducer,
    devTools: NODE_ENV,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export const store = makeStore()

const wrapper = createWrapper(makeStore, { debug: NODE_ENV })
export default wrapper
```

### Hydration
> 사전적으로는 수분 공급이란 뜻을 가지고 있지만 `NextJS`에서는 서버사이드에서 `pre-rendering`된 데이터를 가지고  
> 먼저 `HTML`을 그려내는것을 뜻한다. 그래서 기존의 `React`가 `SPA`로서 가지고 있는 단점인 **초기 렌더링 속도**와
> **검색 엔진 최적화**를 개선해낸것이다. 따라서 `HYDRATE`가 뜻하는 것은 전역 상태를 서버사이드에 활용해 화면에
> 그려낸다는 의미로 해석할 수 있다.

### createWrapper
> 기존 `getServerSideProps`, `getStaticProps`와 같은 기능들에 `Redux`를 결합하는 역할을 한다.
