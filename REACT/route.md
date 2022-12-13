# Route
> 리액트에서 페이지 이동을 할 수 있게 해주는 기능(주소에 따라)

## USE
```
// route v6에서는 Switch의 기능을 Routes가 해준다

import { Routes } from "react-router";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Link
> 리액트에서는 a 태그가 아닌 Link 컴포넌트를 사용한다.  
> a 태그는 페이지를 이동시키면서 페이지를 새로고침한다.  
> 이렇게 되면 원래 리액트 앱의 상태들이 초기화되고 새로 렌더링을 하게 된다.  
> 반면 Link 컴포넌트는 브라우저의 주소만 바꾸고 페이지가 새로고침 되지 않는다.
```
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, year,genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <h2 className={styles.movie__title}>
                {/*to={`/movie/${id}}` 의 주소로 이동한다.*/}
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`:summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}
Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
```
