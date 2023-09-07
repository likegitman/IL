# SWR
> 서버에서 데이터를 가져오기 위한 React Hooks이다. `Stale-While-Revalidate`의 줄임말로 background에서 캐시를  
> 재검증 하는 동안에 기존의 캐시 데이터를 사용하여 화면을 그린다. 도중에 error를 반환하더라도 캐시된 데이터를  
> 활용할 수 있게 함으로써 불필요한 데이터 호출과 렌더링에 시간을 쓰지 않고 효율적으로 동작한다는 장점이 있으며  
> Typescript와 잘 호환된다.

## Example
```js
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url:string) => axios.get(url)

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

## useSWR
> useSWR은 `key`와 `fetcher`를 받는다. `key`는 SWR의 키로, 요청을 보낼 `URL`에 해당하고  
> `fetcher`는 데이터를 반환하는 어떠한 비동기 함수도 될 수 있다. `key`값을 이용해 데이터를 가져오는 함수이기 때문에  
> `fetch`나 `axios`와 같은 비동기를 도와주는 기능을 사용할 수 있다. 이 `useSWR`은 3개의 값을 반환하는데 요청으로  
> 요청에 오류가 없는 경우에 가져오는 데이터인 `data`, 요청에 오류가 있는 경우 해당 오류를 가져오는 `error`가 있다.

## SWRConfig
> 보통 `fetcher` 함수는 어디에서 `SWR`을 사용하든 동일하게 사용될 것인데 이때마다 동일한 fetcher 함수를  
> 선언하는 것은 귀찮고 불필요한 작업이다. 이때 `SWRConfig`를 이용해 전역적인 설정을 해줄 수 있다.
```js
import type {AppProps} from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <SWRConfig value={{
      fetcher: (url: string) => axios.get(url).then((res) => res.data),
    }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
```
> 이렇게 전역적으로 fetcher를 설정해주면 `useSWR`을 사용할 때 2번째 파라미터로 `fetcher` 함수를 넣어주지 않아도 된다.
