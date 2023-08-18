# Token
> 클라이언트에서 인증 정보를 보관하는 방법이다. 세션 기반 인증은 클라이언트에서 유저 정보를 요청 할 때마다 해당 정보를
> 줘도 되는지에 대해 세션 값 일치여부를 확인했었다. 하지만 매 요청마다 DB를 살피는 것은 불편하고 부담이었기 때문에
> 토큰 기반 인증 개념이 생겼다. 토큰은 유저의 정보를 암호화 한 상태로 담을 수 있고, 암호화했기 때문에 클라이언트에 담을 수 있다.

## Access Token
> 보호된 정보들에 접근할 수 있는 권한부여에 사용되는 token이다. 클라이언트가 처음 인증을 받을 때 `ex)로그인`
> access token과 refresh token 둘 다 받게 되지만 실제로 권한을 얻는 데에 사용하는 토큰은 access token이다.
> 권한을 부여받는 데에는 access token만 있으면 된다. 하지만 토큰이 탈취되면 안 되기 때문에 만료기간을 짧게 설정해야한다.

## Refresh Token
access token의 만료기간을 짧게하고 이 access token이 만료될 때마다 refresh token을 통해 말 그대로 access token을 refresh한다.  
`__access token__은 로그인 정보에 접근할 수 있는 카드키, refresh token은 카드키 재발급이라고 생각하면 된다.`
