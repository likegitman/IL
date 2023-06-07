# env
> 유닉스 및 유닉스 계열 운영 체제용 셸 명령엉다. 환경 변수의 목록을 출력하거나, 현존하는  
> 환경을 수정하지 않고도 변경된 환경 내에서 다른 유틸리티를 실행하는데 사용할 수 있다.  
> env를 사용함으로써 변수를 추가하거나 제거할 수 있으며, 기존 변수는 새로운 값을 이들에  
> 할당함으로써 변경할 수 있다.

# dotenv
> 환경변수를 `.env`라는 파일에 저장하고 `process.env`로 로드하는 의존성 모듈이다.  
> 개발과정에서 사용되는 고유한 api key같은 값들의 보안을 위해서 사용한다.

# Example

### .env
```js
REACT_APP_API_KEY = ...;
```

### .env 사용
```js
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../styles/NewsList.module.css";
import NewsItem from './NewsItem';
import { useParams } from 'react-router-dom';

interface NewsArray {
    title: string;
    author: string;
    url: string;
}

function NewsList() {    
    const {category} = useParams();
    
    const [newsList, setNewsList] = useState<NewsArray[]>([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const query = category === undefined ? "" : `&category=${category}`;
        axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`)
            .then((res) => setNewsList(res.data.articles))
            .catch((error) => console.log(error));
    }, [API_KEY, category]);

    return (
        <div className={styles.newsListBox}>
            {newsList.map((news, index: number) => (
                <NewsItem key={index} title={news.title} author={news.author} url={news.url} />
            ))}
        </div>
    );
}

export default NewsList;
```

> React에서 `.env`파일을 프로젝트의 최상단에 생성해준다.  
> `.env`파일에는 api key같이 민감한 값을 넣어주면 되는데 react가 아닌 환경에서는  
> `이름=값`으로 기입하면 되지만 react에서 기입할 때는 REACT_APP을 붙여서 기입하여야한다.
> 이름과 값 사이엔 `=`말고는 띄어쓰기를 넣지 않는다.
`REACT_APP_API_KEY = ...`

> js파일에서 사용할 때는 `process.env`를 붙여 접근하여 사용한다.  
`process.env.REACT_APP_API_KEY`;

> 가장 중요한 `.env`을 숨기는 방법은 `.gitignore`파일에 `.env`글자를 추가하면 github에서  
> `.env`파일이 보이지 않게된다.
