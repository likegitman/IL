# MSW (Mock Service Worker)
Service Worker를 사용하여 네트워크 호출을 가로채는 API Mocking 라이브러리이다.

MSW는 마치 백엔드의 API인 척 프론트엔드 요청에 대해서 가짜 데이터를 반환해주는 아주 유용한 라이브러리이다.

보통 백엔드의 API 개발이 늦어지면 프론트엔드는 아무것도 할 수 없는 상태가 된다. 

그러면 당연히 프로젝트 진행에 문제가 생기고 프로젝트의 기간도 늘어질 수 있다. 이때 백엔드에서 개발이 완료될 때 까지

**임시로** 사용하기 위해 Mock 즉, 가짜 API를 Service Worker로 돌리기 위해 많이 사용된다.

## 특징
Mocking이 네트워크 단에서 일어나서 실제 백엔드 API와 통신하는 것과 크게 다르지 않게 코드를 작성할 수 있다.

실제 API 통신과 차이가 거의 없기에 테스트로 사용 중이던 Mock API를 실제 API로 변경하는 작업도 어렵지 않다.

개발용, 브라우저 환경, 테스트용, Node.js 환경, Jest 같은 다양한 환경에서도 동일한 요청 handler코드를 공유할 수 있다.

## Example