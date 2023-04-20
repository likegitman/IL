# Next.js
> React는 라이브러리이고 Next는 프레임워크이다. 라이브러리는 어플리케이션을 만들 때  
> 필요한 자원의 모임이라고 할 수 있고 프레임워크는 개발 코드를 작성하는 기본적인 틀을 제공하여  
> 효율적으로 개발을 할 수 있는 소프트웨어 환경이다. React에서 내가 모든 것을 직접 생성하고 설정했지만  
> Next에는 이것들이 이미 만들어져있다. 또, Next는 CSR(Client Side Rendering)인 React와 다르게  
> SEO(Search Engine Optimization)를 위한 SSR(Server Side Rendering)이 가능한 프레임워크이다.

# 폴더
> React에서 있던 src폴더를 없애고 pages 폴더 안에 index, _app, _document를 추가하고  
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
