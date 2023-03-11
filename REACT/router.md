# Route
1. 리액트에서 페이지 이동을 할 수 있게 해주는 기능이다.(주소에 따라)
2. React Router v6에서는 v5의 Switch기능을 Routes가 해준다.

## installation
`yarn add react-router-dom`

## USE
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



## Link
> 리액트에서 페이지 이동을면하고싶다면 a 태그가 아닌 Link 컴포넌트를 사용한다.  
> a 태그는 페이지를 이동시키면서 페이지를 새로고침한다.  
> 이렇게 되면 원래 리액트 앱의 상태들이 초기화되고 새로 렌더링을 하게 된다.  
> 반면 Link 컴포넌트는 브라우저의 주소만 바꾸고 페이지가 새로고침 되지 않는다.

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
>

# Outlet
> Route의 chidren으로 들어가는 JSX element를 보여주는 역할을 한다.

## App.js
```
