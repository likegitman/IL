# SWR
> 서버에서 데이터를 가져오기 위한 React Hooks이다. `Stale-While-Revalidate`의 줄임말로 background에서 캐시를  
> 재검증 하는 동안에 기존의 캐시 데이터를 사용하여 화면을 그린다. 도중에 error를 반환하더라도 캐시된 데이터를  
> 활용할 수 있게 함으로써 불필요한 데이터 호출과 렌더링에 시간을 쓰지 않고 효율적으로 동작한다는 장점이 있으며  
> Typescript와 잘 호환된다.

## Example
```js
import useSWR from 'swr'
 
function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```
> useSWR은 `key(API URL)`문자열과 `fetcher` 함수를 받는다. `key`는 데이터의 고유한 식별자로 `fetcher`로
> 전달된다 `fetcher`는 데이터를 반환하는 어떠한 비동기 함수도 될 수 있다. `fetch`나 `axios`와 같은
> 비동기를 도와주는 기능을 사용할 수 있다. 이 `useSWR`은 3개의 값을 반환하는데 요청으로 받아온
> `data`와 로딩상태를 나타내는 `isLoading`과 통신의 오류를 담고있는 `error`가 있다.
