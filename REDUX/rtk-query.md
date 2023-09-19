# rtk-query (redux toolkit query)
> 서버와 데이터를 주고 받는 과정에서 클라이언트 사이드 즉 프론트에서는 웹 애플리케이션에 데이터를  
> 로드하는 경우를 `API`에 맞게 `CRUD` 작업과 캐싱 처리를 하는 로직을 직접 설계하는 경우들이 많다.  
> 하지만 `rtk-query`를 사용하게 되면 공식 문서에서는 **강력한 데이터 가져오기**, **캐싱 도구**로  
> 내가 직접 설계할 필요없이 쉽게 데이터 처리 및 캐싱을 할 수 있도록 도와준다고 언급한다. 일반적인  
> 데이터 처리 로직은 화면에 데이터를 표시하기 위해서 서버에서 데이터를 가져오고 프론트에서 사용자의  
> 조작에 의하여 데이터가 업데이트 되고 업데이트한 데이터를 서버로 보내고 프론트에 캐시된 데이터를  
> 서버의 데이터와 동기화 상태로 유지해야 한다. 이러한 방식은 꽤 복잡할 수 있다.

## createAPI()
### 1. 데이터를 가져오고 변환하는 방법에 대한 정의
### 2. 서버와 직접적으로 통신하게 되는 지점인 endPoints에 대한 정의
### 3. redux-toolkit의 createSlice()와 같이 유니크한 reducerPath를 정의
### Example
```js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const potatoApi = createApi({
  reducerPath: 'potatoApi',
  baseQuery: fetchBaseQuery({baseUrl : 'https://potato.co/api/v2/'}),
  endPoints: (builder) => ({
    getPotatoByName : builder.query({
      query: (name) => `potato/${name}`,
    }),
  },
})

export const { useGetPotatoByNameQuery } = potato;
```
> `fetchBaseQuery()`는 데이터 요청 헤더와 응답을 `axios`와 같은 라이브러리와 유사한 방식으로  
> 자동 파싱을 해주는 가벼운 `fetch wrapper`로 별도로 `axios`와 같은 라이브러리를 설치하고  
> 사용할 필요가 없다. 단 공식문서에서는 `fetch`를 사용하는 경우에 폴리필이 필요할 수 있다고 언급한다.  
### 1. reducerPath
> `redux-toolkit`에서 고유한 `slice` 이름을 설정해야 하는 `createSlice`와 같이 사용하는 고유한 이름과 같다.

### 2. endPoints
> 서버와 직접적으로 맞닿는 지점으로 서버에 대응해서 행동하려는 `action`의 모음이라고 생각하면 된다.
> `builder` 구문을 사용하여 객체로 정의한다. 기본 유형은 `builder.query` 그리고 `builder.mutation`이 있다.
> 또한, `createSlice`에서 원하는 해당 `action`이 `dispatch` 될 때 실행될 `reducer`에 정의해주는 것처럼 해당
> `createApi`의 특정 행동(action)의 이름을 정의해주는 곳이라고 생각하면 된다.

### 3. useGetPotatoByNameQuery
> `getPotatoByName`을 실행하는 `hook` 함수라고 생각하면 쉽다.  `builder.query`가 실행돼 `baseUrl`뒤에
> `name`이라는 `string`을 덧붙여 주어 이러한 `https://potato.co/api/v2/potato/woonrin` url이 되면
> 해당 `API(url)`로 데이터를 요청해서 가져오는, 서버와 통신이 이루어지는 접점이라고 생각하면 된다.

## configureStore에 해당 API slice와 미들웨어 추가
```js
import {configureStore} from '@reduxjs/toolkit';
import {setUpListeners} from '@reduxjs/toolkit/query';
import {potatoApi} from './api/potatoApi';

export const store = configureStore({
  	reducer :{
      [potatoApi.reducerPath] : potatoApi.reducer;
    },
  middleware: (getDefaultMiddleware) => {
    	getDefaultMiddleware().concat(potatoApi.middleware)
  }
})

setupListeners(store.dispatch);
```
