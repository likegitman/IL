# React Query
> `fetching`, `caching`, 서버 데이터와의 동기화를 지원해주는 라이브러리이다. 리액트 환경에서의
> 비동기 Query 과정을 도와주는 라이브러리이다.
### kakao pay에서 말하는 장점
```
1. React Query는 React Application에서 서버 상태를 불러오고 캐싱하며 지속적으로 동기화하고
   업데이트하는 작업을 도와주는 라이브러리이다.
2. 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서
   간단하고 직관적으로 API를 사용할 수 있다.
3. 더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용해
   API 요청과 관련된 번잡한 작업 없이 핵심 로직에 집중할 수 있다.
```

## 1. 캐싱
> 캐싱이란 특정 데이터의 복사본을 저장해 이후 동일한 데이터의 재접근 속도를 높이는 것을 말한다.
> `React Query`는 캐싱을 통해 동일한 데이터에 대한 반복적인 비동기 데이터 호출을 방지하고 API 호출을
> 줄여 서버에 대한 부하를 줄일 수 있다.

### 데이터 갱신
> 만약 서버에서 데이터를 불러오고 캐싱한 후 서버의 데이터를 확인 했을 때 데이터가 바뀌어있다면
> 사용자는 서버에 있는 실제 데이터가 아닌 캐싱된 즉 업데이트 이전의 값을 보게된다.
> 하지만 `React Query`는 이런 에러를 발생시키지 않는 캐싱을 제공하기 위해 필요한 때에 데이터를 갱신한다.
1. 화면을 보고 있을 때
2. 페이지의 전환이 일어났을 때
3. 페이지 전환 없이 이벤트가 발생해 데이터를 요청할 때

### 데이터 갱신 옵션
> 적절한 상황에 갱신해야 될 때 이를 도와주는 옵션들이 존재한다.
```js
refetchOnWindowFocus // default: true / 브라우저에 포커스가 들어온 경우
refetchOnMount  // default: true / 새로운 컴포넌트에 마운트가 발생한 경우
refetchOnReconnect // default: true / 네트워크 재연결이 발생한 경
staleTime // default: 0
cacheTime // default: 5분 (60 * 5 * 1000)
```

#### staleTime
> staleTime은 데이터가 fresh -> stale 상태로 변경되는데 걸리는 시간이다.  
> fresh 는 최신 데이터이기에 이 상태일 때는 Refetch Trigger가 발생해도 Refetch가 일어나지 않는다.  
> 기본값이 0이므로 따로 설정해주지 않는다면 Trigger가 발생했을 때 무조건 Refetch가 일어난다.

#### cacheTime
> `cacheTime`은 데이터가 `inactive`한 상태일 때 캐싱된 상태로 남아있는 시간이다.  
> 컴포넌트가 `unmount`되면 사용된 데이터는 `inactive` 상태로 바뀌고 이때 데이터는  
> `cacheTime`만큼 유지된다. 만약 `cacheTime`이 지나지 않았는데 해당 데이터를 사용하는  
> 컴포넌트가 다시 `mount`되면 새로운 데이터를 fetch 해오는 동안 캐싱된 데이터를 보여준다.  
> 캐싱된 데이터를 계속보여주는 게 아니라 fetch 하는 동안 **임시로** 보여주는 것이다.

## 2. 서버와 클라이언트 간 데이터 분리
> Client 데이터는 여러 전역관리 라이브러리들로 관리가 잘 되지만 이런 라이브러리들이  
> Server 데이터까지 관리해야 될 상황이 발생하는데 당연히 이런 라이브러리들은 비동기 함수 처리를  
> 할 수 있고 서드 파티도 지원하는 것들이 많다. 그렇지만 이것이 두 데이터를 분리하여 관리하는데에  
> 유용하지않다. 당연히 기본적으로 Client 데이터를 관리하기 위한 라이브러리들이기 때문이다.
> 하지만 `React Query`를 사용하면 이러한 문제 또한 해결할 수 있다.
```js
const { data, isLoading } = useQueries(
	['unique-key'],
	() => {
		return api({ // axios instance
			url: URL,
			method: 'GET',
		});
	},
	{
		onSuccess: (data) => {
			// 요청 성공 시 data를 다루는 로직
		}
	},
	{
		onError: (error) => {
			// 요청 실패 시 error를 다루는 로직
 		}
	}
)
```
> 위 코드는 Server 데이터 요청에 대한 성공과 실패를 다룰 수 있다. 이렇게 하면 Client 데이터는
> 상태관리 라이브러리가, Server 데이터는 React-Query가 관리하도록 할 수 있다. 띠리서 두 데이터는
> 온전히 분리되어 관리된다.

