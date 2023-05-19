# App(`_app`)
> 서버로부터 요청이 들어왔을 때 __가장 먼저 실행되는__ 컴포넌트로 페이지에 적용할 공통 Layout의 역할을 한다.
```js
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

### 규칙
1. 위 코드의 props인 `Component`의 속성 값은 서버에서 요청한 페이지가 된다.
2. 위 코드의 props인 `pageProps`는 `getInitialProps`, `getStaticProps`, `getServerSideProps`중 하나를 통해  
   fetching한 초기 속성 값이 된다..
3. `getInitialProps`를 사용해 모든 페이지에서 사용할 공통 속성 값을 지정할 수는 있으나 이럴 경우에  
   자동 정적 최적화가 비활성화되어 모든 페이지가 SSR을 통해 제공된다.
4. `_app`파일에서 `getInitialProps`를 사용하려면 App객체를 불러온 후 `getInitialProps`를 통해 데이터를 불러와야 한다.
```js
import App from 'next/app'

function app({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
   
app.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}
```

# Document(`_document`)
> `_app`파일 다음에 실행되며 공통적으로 활용할 html의 태그들(html, body, meta)을 custom할 때 사용한다.
```js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ko'>
      <Head />
      <body>
        <Main />
        <div id='sidebar' />
        <div id='modal' />
        <NextScript />
      </body>
    </Html>
  )
}
```
