# Danymic Routing
> 미리 정의된 URL로 이동, 라우팅하는 것이 아니라 사용자가 접근한 경로나 상황에 따라  
> 동적인 라우팅을 제공하고 싶을 때 사용할 수 있는 방식이다.
> NextJS에서는 페이지에 존재하는  
> 컴포넌트 파일명에 대괄호를 씌워 동적 라우팅이 가능하게 한다.  
> `/my-profile/[id]`로 파일명을 지어 경로를 구성하면 동적 라우팅이 가능하다.

# Example

### profile/[name].js
```js
import {useRouter} from "next/router";
import Seo from "../components/Seo";

function DetailName() {
  const router = useRouter();
  
  return (
    <Seo title={router.query.name}/>
    <h2>{router.query.name}</h2>  
  );
}
```

# Catch All
> catch all URL은 무엇이든지 가져오는 URL인데 dynamic routes와 달리 하나의 변수뿐만 아니라  
> 여러개의 변수들을 가지고오고싶을 때 주로 사용한다. catch all을 하는 방법
> 파일명을 `/my-prifile/[...params]`와 같이 `...`을 넣주면 catch all을 할 수 있다.
