# useParams
> 라우터 사용 시 파라미터 정보를 가져와 활용할 때 사용하는 것

## USE
```
import { useEffect } from "react";
import {useParams} from "react-router-dom";
function Detail(){
.   // 이름이 path설정과 같아야 함
    const {id}=useParams();
    const getMovie=async()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
    };
    useEffect(()=>{
        getMovie();
    }, []);
    return <h1>{id}</h1>
}

export default Detail;
```
