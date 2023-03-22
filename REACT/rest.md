# REST
> Representational State Transfer(자원 행위 표현)의 약자로 자원을 이름으로 구분하여  
> 해당 자원의 상태를 주고받는 모든 것을 의미한다.
## 요약
1. HTTP URI을 통해 자원을 명시한다.
2. HTTP Method(POST, GET, PUT, DELETE, PATCH)를 통해 해당 자원에 대한 CRUD Operation을 적용한다.

## CRUD
> 기본적인 데이터 처리 기능이다.
1. Create(생성) - POST
2. Read(조회) - GET
3. Update(수정) - PUT
4. Delete(삭제) - DELETE

## 구성요소
1. 자원 : HTTP URL
2. 자원에 대한 행위 : HTTP Method
3. 자원에 대한 행위의 내용 : HTTP Message Pay Load

## 특징
1. Server-Client (서버-클라이언트 구조)
2. Stateless (무상태)
3. Cacheable (캐시 처리 가능)
4. Layered System(계층화)
5. Uniform Interface(인터페이스 일관성)

## 장점
1. HTTP 프로토콜의 인프라를 그대로 사용하기 때문에 REST API사용을 위한 별도의 인프라를 구축할 필요가 없다.
2. HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해 준다.
3. HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다.
4. Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.
5. REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있다.
6. 여러가지 서비스 디자인에서 생길 수 있는 문제를 최소화한다.
7. 서버와 클라이언트의 역할을 명확하게 분리한다.

## 단점
1. 표준 자체가 정해지지 않아 정의가 필요하다.
2. HTTP Method 형태가 제한적이다.
3. 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header정보의 값을 처리해야하므로  
   전문성이 요구될 수 있다.
4. 구형 브라우저에서 호환이 되지 않아 지원해주지 못하는 동작이 많다. ex) Explorer

# REST API
> 말그대로 REST의 원리를 따르는 API이다.

## 규칙
1. URI는 동사보다 명사를쓰고 대문자보다는 소문자를 사용하여야한다.
2. URI의 끝부분에 /(슬래시)를 포함하면 안 된다.
3. 언더바 _ (언더바)대신에 - (하이폰)을 사용한다.
4. 파일확장자는 URI에 포함하지 않는다.
5. 행위를 포함하지 않는다.

# RESTful
> REST API가 REST의 원리를 따르는 API라면 RESTful은 REST의 원리를 따르는 시스템이다.
> 단, REST API의 설계 규칙을 올바르게 지키지 않았다면 RESTful하다고 말할 수 없다.
> 예를들어 CRUD 기능을 모두 POST로 처리하는 API나 URI규칙을 지키지 않은 API는  
> REST API를 사용했으나 RESTful하다고는 말할 수 없다.

# RESTful API
> HTTP 프로토콜을 기반으로하는 웹 서비스 아키텍처이다.  
> 자원, 메소드, 메시지 등을 정의하여 클라이언트-서버 간의 통신을 가능하게 하고  
> RESTful API는 표준 HTTP 메소드(GET, POST, PUT, DELETE)를 사용하여 서버와 통신한다.
