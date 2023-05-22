# getServerSideProps
> NextJS는 기본적으로 페이지를 `ServerSideRendering`을 이용해 `pre-rendering`을한다. SSR을 활용할 수 있는  
> 기능들 중 getSeverSideProps라는 함수가 있다.
```js
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
> 페이지를 `pre-rendering`을한다.
> 이때 함수는 페이지 요청마다 실행되고 함수가 반환하는 데이터는 해당 페이지 컴포넌트의 props로 전달된다.
> `SSR`이기 때문에 클라이언트에서는 실행되지 않고 서버 측에서만 실행이 된다. 그렇기에 API_KEY같이 중요한 정보들은  
> 보이지 않게된다.

# Example
```js
import React from 'react';
import Seo from '../components/Seo';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Home({ results }) {

    const router = useRouter();

    // URL 마스킹
    // const onClick = (id, title) => {
    //     router.push({
    //         pathname: `/movies/${id}`,
    //         query: {
    //             title,
    //         }
    //     }, `movies/${id}`);
    // };

    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    };

    return (
        <div className='container'>
            <Seo title="Home" />
            {results?.map((movie) => (
                <div onClick={() => onClick(movie.id, movie.title)} key={movie.id} className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="이미지" />
                    <h4>
                       
                        <Link href={`/movies/${movie.original_title}/${movie.id}`} legacyBehavior>
                            <a>{movie.original_title}</a>
                        </Link>
                    </h4>
                </div>
            ))}
            // style 생략
        </div>
    );
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
