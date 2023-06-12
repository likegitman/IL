# JWT
> JSON Web Token의 약자로 JSON 웹 토큰은 JSON을 이용해 정보를 안전하게 다루기 위한 개방형 표준인 RFC 7519방법이다.  
> JWT는 크게 헤더와 내용, 서명으로 나뉘고 dot(`.`)으로 각 부분을 구분한다. 여기서 각 부분은 전부 basw64로 인코딩되어 사용된다.

## 헤더
### example
```js
{
  "type" : "JWT",
  "algoritm" : "HSA256",
}
```

## 내용
### example
```js
{
  "sub" : "1234567890", // 등록된 claim
  "name" : "John Doe", // 공개 claim
  "admin" : true, // 비공개 claim
}
```
> 내용에 들어갈 정보들은 claim이라고 부르는데 claim은 크게 세 종류도 나뉜다고 한다.
> 첫 번재는 등록된 claim이다. 사전 정의되어 있고 필수적으로 사용할 필요는 없지만 사용이 권고되는 것들이다.
```
iss : 데이터의 발행자를 뜻한다.
sub : 토큰의 제목이다.
aud : 토큰의 대상이다.
exp : 데이터가 만료된 시간을 뜻한다.
nbf : 토큰이 처리되지 않아야 할 시점을 의미한다.
iat : 데이터가 발행된 시간을 뜻한다.
이 시점이 지나기 전엔 토큰이 처리되지 않는다.
jti : 토큰의 고유 식별자이다.
```
> 두 번째는 공개 claim이다. 사용자 마음대로 쓸 수 있으나 충돌 방지를 위해 이 [사이트](https://www.iana.org/assignments/jwt/jwt.xhtml)
> 에서 정의된대로 사용하는 것이 좋다. 만약 이런식으로 하지 않는다면 URI 형식으로 key를 정해야한다.

> 세 번째는 비공개 claim이다. 통신을 주고받는 당사자들끼리 협의해서 자유롭게 key와 값을 정할 수 있다.

## 서명
### example
```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

# 사용 목적
> 지금까지 내용을 보면 자연스레 알 수 있듯이 JWT는 주로 인증과정에서 많이 쓰이는 것이다. 인증과정에 JWT를 사용하는 이유는  
> 인터넷 환경에 SWT(Simple Web Token)과 SAML(Security Assertion Markup Lauguage Tokens)보다 JWT가 더 적합하기 때문이다.
> JSON은 XML보다 단순하기에 용량이 적고 보기 편하다. SAML은 XML기반이기 때문에 JWT보다 용량이 크다. SWT방식은 보안 측면에서  
> 대칭키 방식인 HMAC 방식으로 해싱하는데 JWT 토큰은 X.509인증서 형식의 공개키 / 개인키 방식을 쓸 수 있다. 인증과정은 확인자가  
> 데이터를 생성할 필요 없이 확인만 하면 되기 때문에 공개키 / 개인키 방식이 적합하다. 또 JSON은 구조상 대부분 언어에서 객체로  
> 바로 변환될 수 있기 때문에 대부분의 언어에서 지원하고 있어서 다양한 언어에서 JSON을 사용할 수 있다는 장점도 있다.
