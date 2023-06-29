# Pre-Rendering
> PreRendering이란 `SSR`을 구현하는 NextJS의 특징이라고 볼 수 있다.  
> SSR 방식은 미리 서버에서 HTML파일로 랜더링해 클라이언트로 전송해주는 방식이다.  
> 이로인해 서버> > 와 통신을 할 때 미리 만들어둔 HTML파일을 전달받아 React에서 쓰이는  
> CSR보다 랜더링 속도가 빠르다. 그래서 Pre-Rendering이라하고고 NextJS에서는 Pre-Rendering 방법을 2가지 제공한다.

## 1. Static Generation
> 정적 생성 방식이다. 블로그나 마케팅 페이지에서 사용자가 보기 전에 미리 랜더링 해야 할 때
> 유용하고 페이지에 자주 업데이트되는 데이터가 표시되고 모든 요청에 따라 페이지 콘텐츠가
> 달라지는 경우 유용하지 않다.

### getStaticProps
> 페이지에서 외부 데이터를 가져올 때 사용한다.
```js
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data
    },
  };
}
```

### getStaticPaths
> Dynamic Routes로 외부 데이터를 가져올 때 사용한다.
```js
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const datas = await response.json();

  const paths = datas.map((data) => (
    params: { id: data.id },
  ));

  // fallback: false의 의미는 이외의 다른 경로는 404페이지로 처리한다는 것을 의미한다.
  return { paths, fallback: false };
}
```

## 2. Server Side Rendering
> getStaticProps는 빌드 시에 데이터를 가져온다. 그래서 한번 빌드되고 나면 정적으로
> 움직이지 않는다. 하지만 getServerSideProps는 해당 페이지가 __요청될 때 마다__ 재요청한다.

### getServerSideProps
```js
function Home({results}) {
  // ...
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
      },
    };
}
```

> 페이지에서 `getServerSideProps`함수를 export하면 NextJS는 이 함수가 반환하는 데이터를 사용하여 
> 페이지를 `pre-rendering`한다.
> 이때 함수는 페이지 요청마다 실행되고 함수가 반환하는 데이터는 해당 페이지 컴포넌트의 props로 전달된다.
> `SSR`이기 때문에 클라이언트에서는 실행되지 않고 서버 측에서만 실행이 된다. 그렇기에 API_KEY같이 중요한
> 정보들은 보이지 않게된다.
