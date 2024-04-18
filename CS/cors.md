# CORS
흔히 CORS 오류라고 부르는데 CORS는 오류의 종류가 아닌 **개념**이다.
Cross-Origin Resource Sharing의 약자로 다른 출처에 있는 자원을 요청한다고 했을 때 이를 교차 출처 요청이라고 부른다.

> HTTP 헤더를 사용해서 한 출처에서 실행 중인 애플리케이션이 다른 출처의 리소스에 접근할 수 있는 권한을 부여하도록
> 브라우저에 알려주는 보안 정책이자 체제이다.

교차 출처가 일어나는 때는 웹 애플리케이션이 리소스가 자신의 출처인 도메인, 프로토콜, 포트가 다를 때 교차 출처 요청을 보낸다.

<img width="1408" alt="d" src="https://github.com/likegitman/IL/assets/105215297/d66f4076-5da9-47f1-9906-cd3e75bc0245">
-uri에서 도메인, 프로토콜 등의 개념-

그럼 동일한 출처는 어떤 기준으로 판단할까?
바로 위 사진에서 프로토콜, 호스트, 포트 3가지만 같으면 동일한 출처라고 인식한다.
(단, 포트는 생략이 가능하다.)

```
http://Example.com:8080/ex1/index.html
http://example.com/ex2/index.html
```
프로토콜인 http, 호스트 example.com Port는 생략할 수 있고 패스부터 다르니 동일한 출처라고 할 수 있다.

## 문제
> 음 그런데 다른 출처에 접근하면 왜 안돼?

사실 애초에 다른 출처에 접근하는 것부터 불안하긴 하다.
가상의 A 사이트의 스크립트가 B 사이트의 데이터에 접근한다고 해보자. 별로 중요한 내용이 없다면
괜찮을 수 있지만 은행, 개인정보 등의 내용이 들어가있는 사이트라면? 악의적인 스크립트를 보낼 수 있으니 
반드시 보안을 신경써서 막아야한다.

## SOP
Same-Origin-Policy의 약자로 동일 출처 정책이라는 뜻이다. 
웹에서는 크게 SOP, CORS 2개의 정책이 있는데 CORS는 교차 출처에 접근할 수 있게한다.
당연히 SOP는 같은 출처에서만 리소스를 공유할 수 있게 한다.

특히, Postman같은 가상의 요청을 날릴 수 있는 것에서는 잘 요청되다가 웹에서 요청만 하면 CORS가 발생하는 문제가 생겼을 것이다.
이는 브라우저가 SOP를 지키고 있기 때문에 헤더에서 CORS 설정을 하지 않으면 정책을 지키라는 문구가 나타나게 되는 것이다.

## 교차 출처 요청 정책
### 단순 요청 ( Simple Request )
- GET, HEAD, POST 의 method만 요청해야 한다.
- `Accpet`, `Accept-Language`, `Content-Language`, `Content-Type` 같은 CORS 헤더를 가진다.
- `Content-Type`은 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`만 가능하다.
- ReadableStrean 객체는 사용되지 않는다.
- XMLHttpRequest 객체를 사용해 요청하면 요청에서 사용된 XMLHttpRequest.upload에 의해서 반환되는 객체에
  어떠한 EventListner도 등록되지 않는다.

브라우저는 다른 출처에 현재 자신의 출처를 origin에 담아서 보낸다.
이때 이 다른 출처가 서버라면 origin의 출처에 접근이 가능하다는 것을 알려주기 위해
`Access-Control-Arrow-Origin`에 주소를 담아서 return한다.

`Access-Control-Arrow-Origin`은 CORS 헤더의 요소 중 하나로 어떤 요청을 허용할지 결정하는데
하나의 출처를 허용할 수도 있고 '*'로 모든 출처도 허용할 수 있다.

서버가 헤더에 응답하지 않거나, 헤더 값이 요청의 출처와 일치하지 않는 도메인일 경우에는 브라우저가 응답을 차단한다.
당연히 `Access-Control-Allow-Origin`에 포함되어 있는 경우도 마찬가지이다.

### 예비 요청 ( Preflight Request )
- OPTIONS 메서드로 HTTP 요청을 미리 보내서 본 요청이 전송하기 안전한지 확인한다.
  교차 출처 요청이 어떤 영향을 줄 지 모르기 때문에 미리 검사의 목적을 가지고 있다.
- 요청 헤더: `origin`, `Access-Control-Request-Method`, `Access-Control-Request-Headers`
- 응답 헤더: `Access-Control-Allow-Origin`, `Access-Aontrol-Allow-Methods`, 
           `Access-Control-Allow-Headers`, `Access-Control-Max-Age`

### 신용 요청 ( Credentialed Request )
쿠키, 인증 헤더, TLS 클라이언트 인증서같은 신용정보와 함께 요청한다. CIRS 정책은 교차 출처 요청에
인증정보를 포함하는 것을 허용하지 않는데 서버에서 `Access-Control-Allow-Credintials`가 true로 되어있다면 가능하다.
또한 클라이언트에서는 요청에 인증을 포함한다는 것을 알려주기 위해 withCredentials를 true로 해주어야한다.

서버가 `Access-Control-Allow-Credintials`를 true로 하지 않거나 `Access-Control-Allow-Origin` 값이
허용된 출처가 아니라면 오류가 발생한다.
