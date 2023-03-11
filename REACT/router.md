# Route
1. 리액트에서 페이지 이동을 할 수 있게 해주는 기능이다.(주소에 따라)
2. React Router v6에서는 v5의 Switch기능을 Routes가 해준다.

# Installation
`yarn add react-router-dom`

# USE
```
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
```



# Link
> 리액트에서 페이지 이동을면하고싶다면 a 태그가 아닌 Link 컴포넌트를 사용한다.  
> a 태그는 페이지를 이동시키면서 페이지를 새로고침한다.  
> 이렇게 되면 원래 리액트 앱의 상태들이 초기화되고 새로 렌더링을 하게 된다.  
> 반면 Link 컴포넌트는 브라우저의 주소만 바꾸고 페이지가 새로고침 되지 않는다.

## App.js
```
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;

```

## Home.js

```
import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <h2>가장 먼저 보여지는 페이지입니다.</h2>
            <li><Link to="/about">소개 사이트</Link></li>
        </div>
    );
}

export default Home;
```

# useParams
> URL parameter를 조회할 때 사용하는 React Hooks  
> 사용할 때 Route의 주소설정은 /:keyword를 입력한다.

## App.js
```
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />}/>
      </Routes>
    </Router>
  );
};

export default App;
```

## Movie.js
```
import React from 'react';
import { Link } from 'react-router-dom';

const IMG_BASE_URL="https://image.tmdb.org/t/p/w1280/";

function Movie({id , title, img, star }) {
    return (
        <div className='movie-container'>
            <img src={IMG_BASE_URL + img} alt="영화 포스터" />
            <div className='movie-info'>
                {/*id값을 넘겨줌*/}
                <Link to={`/${id}`}><h4>{title}</h4></Link>
                <span>{star}</span>
            </div>
        </div>
    );
}

export default Movie;
```

## Detail.js
```
import React from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../movieDummy";
import Overview from "../components/Overview";

function Detail() {
  // 받은 id값 조회
  const { id } = useParams();
  const movieList = dummy.results.filter((movie) => movie.id === Number(id));
  console.log(movieList);
  return (
    <div>
      {movieList.map((movie) => (
        <Overview
          key={movie.id}
          title={movie.title}
          star={movie.vote_average}
          img={movie.poster_path}
          introduce={movie.overview}
        />
      )
      )}
    </div>
  );
}
export default Detail;

```

# Outlet
> Route의 chidren으로 들어가는 JSX element를 보여주는 역할을 한다.

## App.js
```
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Profiles from "./components/Profiles";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/profiles/:username" element={<Profiles />} />
      <Route path="/articles" element={<Articles />}>
        {/* Route children */}
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;

```

## Articles.js
```
import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Articles() {
    return (
        <div>
            {/*Article 컴포넌트의 JSX사용*/}
            <h1><Outlet /></h1>
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Articles;
```

# NavLink
1. 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우  
   특정 스타일을 적용하는 컴포넌트이다.
2. 이 컴포넌트는 style과 className은 { isActive: boolean }을 파라미터로  
   전달받는 함수타입의 값을 전달한다.
```
<NavLink
  style={({isActive}) => isActive ? activeStyle : undefined}
/>

<NavLink
  className={({isActive}) => isActive ? 'active' : undefined}
/>
```

## USE
```
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function Articles() {
    return (
        <div>
            {/*Article 컴포넌트의 JSX사용*/}
            <h1><Outlet /></h1>
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
}

function ArticleItem({ id }) {

    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                게시물 {id}
            </NavLink>
        </li>
    )
}

export default Articles;
```
