# queryString
> 쿼리스트링은 URL의 한 부분이며 요청하고자 하는 URL에 부가적인 정보를 포함하고 싶을 때 사용한다.

# useLocation
> location 객체를 반환, 사용자가 현재 보고있는 페이지의 정보를 담고있다.

## location 객체의 속성
* pathname
> 현재 주소의 경로 (쿼리스트링 제외)
* search
> 맨 앞의 ? 문자를 포함한 쿼리스트링 값
* hash
> 주소의 # 문자열 뒤의 값
* state
> 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
* key
> location 객체의 고유값, 초기에는 default이며 페이지가 변경될 때마다  
> 고유의 값이 생성 됨
```
// 주소: http://localhost:3000/about?detail=true&mode=1
import React from 'react';
import { useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    console.log(location.search);
    return (
        <div>
            <h1>소개</h1>
            <h2>리액트 라우터를 사용해보는 프로젝트입니다.</h2>
            <h2>쿼리스트링: {location.search}</h2>
            // location.search의 값: ?detail=true&mode=1
        </div>
    );
}

export default About;
```
# useSearchParams
1. 쿼리스트링을 더욱 쉽게 다루게해주는 React Hooks이다.
2. 첫번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환,  
   get 메서드를 통하여 쿼리파라미터를 조회할 수 있고 set 메서드를 통하여 특정 쿼리파라미터를  
   업데이트 할 수 있다.
3. 두번째 원소는 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수를 반환한다.
```
// 주소: http://localhost:3000/about?detail=true3&mode=1
    
import React from 'react';
import { useLocation, useSearchParams } from "react-router-dom";

function About() {
    // const location = useLocation();
    // console.log(location.search);
    const [searchParams, setSerchParams]=useSearchParams();
    console.log(searchParams);

    // 쿼리파라미터 조회
    const detail=searchParams.get("detail");
    const mode=searchParams.get("mode");
   
    const onToggleDetail = () => {
        // detail boolean 상태변환
        setSerchParams({mode, detail: detail === "true" ? false : true});
    };

    const onIncreaseMode = () => {
        // mode 값 
        const nextMode=mode===null ? 1 : parseInt(mode)+1;
        setSerchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>소개</h1>
            <h2>리액트 라우터를 사용해보는 프로젝트입니다.</h2>
            {/* <h2>쿼리스트링: {location.search}</h2> */}
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>IncreaseMode</button>
        </div>
    );
}

export default About;
```
