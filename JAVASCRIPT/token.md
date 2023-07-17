# Token
> 클라이언트에서 인증 정보를 보관하는 방법, 세션 기반의 인증은 클라이언트에서 유저 정보를  
> 요청할 때마다 해당 정보를 보내도 되는지에 대해서 세션 값 일치 여부를 확인했었는데 요청마다  
> 확인하는 것이 불편하고 부담이었기 때문에 토큰이 생겨났다. 토큰은 유저의 정보를 __암호화__ 하여  
> 클라이언트에 담을 수 있다.

## Access Token
> `access token`은 권한 부여에 사용되는데 만약 로그인을 하였을 때 유저는 `access token`, `refresh token`을  
> 받지만 권한을 얻는데에 사용되는 것은 `access token`뿐이다. 하지만 이 토큰이 해킹당한다면 안 되기 때문에  
> `access token`의 만료기한을 짧게 하여 `access token`이 만료될 때마다 `refresh token`을 통하여 토큰을  
> `refresh`한다.

## Refresh Token
> 만료기한을 짧게하면서 편리한 방법을 생각하다 나온 방법이다. `access token`과 똑같은 형태의 JWT이다.
> 처음 로그인을 완료했을 때 `access token`과 동시에 발급되고 만료기한을 가지면서 `access token`이
> 만료 됐을 때 새로 토큰을 발급해주는 토큰이다. refresh token이 만료되지 않았다면 클라이언트는
> 계속 `access token`을 발급받을 수 있고 `refresh token`이 만료 된다면 새로 로그인을 해야한다.

## Login Procedure
1. id, password로 로그인.
2. 서버의 회원 데이터베이스에서 값을 비교.
3.  로그인이 완료되면 access token과 refresh token을 발급.  
4. 클라이언트에서 refresh token을 안전한 저장소에 저장한 후에 access token을 header에 실어서 요청.  
5. access token을 검사하여 맞는 데이터를 전송.   
6. access token 만료.
7. 클라이언트는 이전과 동일하게 access token을 header에 실어서 요청.
8. 서버가 access token이 만료됐을을 확인하고 권한이 없다고 신호를 보냄.
9. 클라이언트는 refresh token과 access token을 서버로 보냄.
10. 서버가 받은 access token이 조작 되었는지 확인하고 refresh token과 사용자의 데이터베이스에
    저장되어있었던 refresh token을 비교하고 token이 동일하고 만료되지 않았다면 새로운 access token을 발급함.
11. 서버가 새로운 access token을 heander에 실어 다시 API 요청 응답을 진행.
