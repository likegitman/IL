# Next.js
> React는 라이브러리이고 Next는 프레임워크이다. 라이브러리는 어플리케이션을 만들 때  
> 필요한 자원의 모임이라고 할 수 있고 프레임워크는 개발 코드를 작성하는 기본적인 틀을 제공하여  
> 효율적으로 개발을 할 수 있는 소프트웨어 환경이다. React에서 내가 모든 것을 직접 생성하고 설정했지만  
> Next에는 이것들이 이미 만들어져있다. 또, Next는 CSR(Client Side Rendering)인 React와 다르게  
> SEO(Search Engine Optimization)를 위한 SSR(Server Side Rendering)이 가능한 프레임워크이다.  
> 그렇기에 서버로부터 미리 완성된 HTML파일을 미리 렌더링( pre-rendering )을 한다.   
> #### [참고](../REACT/csr-ssr.md)

## 기능
### 1. hot Code Reloading
### 2. code splitting
### 3. automatic routing
### 4. single file components
### 5. server landing
### 6. typescript

## 폴더 구조
> React에서 있던 src폴더는 없어지고 pages 폴더 안에 index, _app, _document파일들을 추가하고  
> 페이지 관련 js파일들은 전부 pages안에 보관해야한다. 그리고 pages안에 보관된 파일들은  
> 파일명 그대로 route가 되는 특징이있다. (/pages/index.js => "/") (/pages/detail/description.js => "/detail/description")  
> 파일명은 중요하지만 그 파일안의 함수의 이름은 중요치 않다. 중요한건 함수에 export default가 붙어야된다는 것이다.

* public  
이미지나 동영상같은 assets파일들을 보관한다.

* pages  
페이지 관련 js 파일들을 보관한다.

* pages/_app.js  
서버 요청시 가장 먼저 실행되는 파일이다. 모든 페이지에 적용할 공통적인 레이아웃의 역할을 한다.

* pages/_document.js  
위의 _app.js 파일 다음에 실행되는 파일이다. 기존 React public폴더에있던 index.html 역할을 대신하는 역할을 한다.  

* pages/index.js  
기본 경로에 해당하는 파일(페이지), 이 말은 맨 처음화면에 뜨는 페이지라고 할 수 있다.

## version 13

### app 디렉토리 도입
> 기존의 `NextJS`는 파일 시스템 라우터 기능을 통해 디렉토리 폴더 내부에 파일 생성만으로 애플리케이션 경로를  
> 설정할 수 있다. `/app` 디렉토리를 라우팅 및 레이아웃 경험을 개선했다고 한다. 크게 4가지 기능을 제공한다.

#### 1. Layout
> 리렌더링 성능을 개선하며 경로 간에 UI를 쉽게 공유할 수 있다. 여러 페이지들이 공유하는 공통 UI 기능을  
> 제공하며 불필요한 리렌더링을 방지하고 서로 상호작용할 수 있는 기능을 제공한다. Root 디렉토리에 기존의  
> `pages` 대신에 `app` 디렉토리를 생성하고 하위에 `page.js`를 생성한다. `index.js`와 같이 해당 경로에  
> 표시될 페이지를 의미한다.
```js
export default function Page() {
  return <div>Hello World</div>
}
```
> 또 `layout.js`가 생성되는데 페이지 영역은 `children`를 통해서 주입 및 배치되며
> 나머지 변경이 불필요한 부분들은 내부 컴포넌트가 변경되어도 리렌더링이 발생하지 않는다.
```js
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <h2>커스텀 레이아웃</h2>
        {children}
      </body>
    </html>
  )
}
```
> 이렇게 `children` 이외의 태그를 추가하면 `page.js`에서 `layout.js`가 혼합되어 보여진다.  
> `app/page2/page.js` 같이 하위에 새로운 페이지를 생성해도 `layout.js`가 공통으로 보여진다. 그렇기에  
> 페이지 단위로 컴포넌트가 변경되어도 `layout.js`의 컴포넌트는 리렌더링이 발생하지 않아 성능을 향상시킨다.

#### 2. Server Component
> `server component` 기능을 손쉽게 제공하여 성능 향상에 도움을 줄 수 있게된다. `app` 디렉토리에
> `server component`를 사용한다면 말 그대로 `server`에서만 컴포넌트를 렌더링한다. `React Server Component`는
> `React 18`에 도입되는 최신 기술이며 서버에서 동작하는 리액트 컴포넌트를 의미한다. 즉, `server`에서 `data fetching`
> 등을 수행하여 `client`에서 연속된 API 호출을 방지할 수 있게된다. 이러면 `client`에 전송되는 `javascript`의 양이
> 줄어들며 초기 페이지 로딩을 더 빠르게 진행할 수 있다. `server component`가 `app` 디렉토리에서 사용되는 컴포넌트이다.

#### 3. 스트리밍
> 로딩 상태를 표시하고 렌더링되는 UI 단위로 스트리밍을 제공하고 있다. `server side`에서 고정적인 레이아웃들은 `data fetching`이  
> 필요없기 때문에 먼저 `client`에게 전송하여 렌더링을 진행하게 된다. `data fetching`이 필요한 부분은 별도로 `data fetching`이
> 끝난 후에 `client`에게 전송하여 렌더링을 마무리한다. 이 과정에서 `app` 디렉토리 내부에 `loading.js`라는 예약 파일을 만들게 될 경우
> 해당 컴포넌트는 loading 상태를 표현해주는 UI 컴포넌트로 활용된다.
![image](https://github.com/likegitman/TIL/assets/105215297/def4d841-501f-4c31-b78d-0225d444bf18)


4. data fetching
> 새로운 `data fetching` 기능을 제공한다. 원래는 `getStaticProps`와 `getServerSideProps` 함수를 사용하지 않고 `Server Side`로직을
> 구현할 수 있다. `use`훅을 사용하여 간편하게 `data fetching`을 구현할 수 있게 됐다.
```js
import { use } from "react";

export default function Page() {
  const name = use(getData());

  return <div>Hello World!</div>;
}

async function getData() {
  const res = await fetch("API url");
  const data = await res.json();
  return data;
}
```
> 또한 `cache` 기능을 옵션으로 사용할 수 있다.
```js
// default 설정이며 기존의 getStaticProps 와 동일하게 동작다.
fetch(URL, { cache: 'force-cache' })

// 캐시 기능을 사용하지 않는다.
// getServerSideProps 와 동일하게 동작한다.
fetch(URL, { cache: 'no-store' })

// revalidate 단위로 설정된 시간을 주기로 캐시한다.
// getStaticProps에서 revalidate 옵션을 사용한 것과 동일하다.
fetch(URL, { next: { revalidate: 10 } })
``` 



