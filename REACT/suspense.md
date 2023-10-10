# React Suspense
> `React v18`에서 정식 출시되었다. 이 기술을 사용하면 `component`의 `rendering`을 어떤 작업이 끝날 때까지  
> 잠시 중단시키고 다른 `component`를 `rendering`할 수 있다. 이게 꼭 어떠한 작업이 돼야한다는 제약은 없지만  
> `Rest API`나 `GraphQL`을 호출해 `network`를 통해 비동기로 데이터를 가져오는 작업을 가장 먼저 떠오르게 된다.  
> 비동기로 데이터를 읽어오는 것은 `React`에서 많이 하던 작업이지만 여전히 구현하기에는 까다로운 일이기도 하다.  
> 그래서 일반적으로 `data loading`을 전문으로 하는 `library`나 `framework`에서 제공하는 `data loader`에 의존하는  
> 경우가 많다.

## Example
### no suspense
```js
<Component />
```
> 만약 어떠한 `component`를 사용하고 `rendering`이 발생하면 바로 호출될 것이다.

### suspense
```js
<Suspense fallback={<Loading />}>
  <Component />
</Suspense>
```
> 하지만 Suspense로 감싸주면 해당 `component`의 `rendering`을 특정 작업 이후로 미루고 그 작업이 끝날 때 까지  
> `fallback` 속성으로 넘겨준 `component`를 보여준다. `suspense`를 사용하지 않을 때는 `waterfall` 현상이 나타나고  
> `suspense`를 사용하면 비동기 작업을 마칠 때 `component`를 같이 보여주기 때문에 `waterfall` 현상이 나타나지 않는다.
