# Redirect URI
> redirect는 re(다시) + direct(지시하다) 라는 뜻으로 브라우저가 `www.test.com/pageA`URL을 웹 서버에 요청 했을 때 서버는  
> HTTP 응답 메시지를 통하여 `www.test.com/pageB` 로 다시 요청하세요 라고 브라우저에게 다른 URL을 지시할 수 있는 것을 redirect라고 한다. 
> 예시로 내가 만든 페이지에서 카카오 로그인을 요청하면 카카오 로그인 페이지에서 아이디와 패스워드를 입력하고
> 로그인에 성공하면 다시 내가 만든 페이지로 돌아가야 되는데 그 때 돌아가는 페이지의 주소가 `redirect uri`다.

![스크린샷 2023-06-21 094127](https://github.com/likegitman/TIL/assets/105215297/5d24f7d4-f5d9-4e31-a4e9-83269cb89774)

> redirect는 HTTP 표준으로 정의되어 있고 최초 요청을 받은 웹 서버는 HTTP 응답 상태코드로 `302`를 보내고 응답 메시지  
> 헤더 중 Location 값으로 redirect 돼야 할 주소를 설정해 return 한다. 클라이언트는 서버로부터 받은 응답 값 `302`를 보고  
> 서버가 redirect시킨 것을 알고 Location에 설정되어있는 URL로 다시 재요청한다.  
> 여기서 상태코드 302는 __클라이언트가 요청한 리소스가 Location 헤더에 주어진 URL에 일시적으로 이동되었음__ 을 가리킨다.
