# XSS
> `Cross-site scripting`의 약자로 `CSS`와 혼동을 고려해 `XSS`로 변경 했다. 웹 애프리케이션에서 많이 나타나는  
> 공격 중 하나로 웹 사이트 관리자가 아닌 제 3자가 웹 페이지에 **악성 스크립트**를 삽입할 수 있는 취약점을 말한다.  
> 주로 블로그나 게시판에 악성 스크립트가 담긴 글을 올리는 형태로 이루어지는데 사용자로부터 입력 받은 값을 제대로  
> 검사하지 않고 사용할 경우 나타난다. 예시로 `dangerouslySetInnerHTML`을 사용하면 `XSS`에 공격당할 위험이 있다.

## Reflected XSS
> 대표적으로 `url`에 `query parameter` 값으로 `html`태그를 넣어 `server`로 요청 -> `query parameter`가 있는 상태  
> 그대로 브라우저로 응답되어 `script`를 실행 -> 웹 앱 내에 `script`가 저장되지 않고 1개의 요청에 대해 1개의 응답으로  
> 공격이 진행된다. `ex) http://127.0.0.1:8080/hello?username=<script>alert("XSS";);</script>;` `url`이 아니라  
> 사용자 계정, `credential`, 민감한 데이터, `cookie`와 `session`, 다른 `client` 컴퓨터에 빠르게 `access`등의  
> 방식이 있다.
![image](https://github.com/likegitman/TIL/assets/105215297/0117d474-db81-41c5-8a2e-8c2616fbf933a)


## Stored XSS
> 블로그, 게시판 등에 `script`를 심어두어 연관이 없는 사용자가 해당 `script`가 있는 페이지를 방문함녀 자동으로
> `script`가 실행되는 방식으로 공격이 진행된다.

```js
<iframe ID="showFrame" SRC="javascript:document.write('
<script> 
alert(3);
function show() {
alert(5);
}
alert(4);
</script>
');" width="0" height="0" frameborder="0"></iframe>
<button id="button" onClick='document.getElementById
("showFrame").contenWindow.show()'>버튼</button>
```

## DOM based XSS
> 사용자가 제공한 데이터가 적절한 삭제 없이 DOM 객체에 제공될 때 발생한다.

## XSS 방지
> 사용자의 입력에 대해 `client` 측과 `server` 측이 모두 검증을 해야한다. `HTML`태그나 `JavaScript`에 사용되는
> 특수 문자들에 대한 `filltering`, `encoding`을 해 꼭 필요한 태그를 사용할 수 있게할 수 있다. `cookie`에
> `HttpOnly`를 설정하면 `script`로 `cookie`를 로드할 수 없다. 또한 `cookie`에 `secure`를 설정하면 `cookie`가
> 암호화 되어 전송되므로 `network`를 통한 `cookie` 가로채기도 막을 수 있다.

# CSRF
> `Cross-Site Request Forgery` 웹 사이트 취약점 공격의 하나로 사용자가 자신의 의지와는 무관하게 공격자가 의도한  
> 행위 수정, 삭제, 게시 등을 특정 웹 사이트에 요청하게 하는 공격을 말한다. `XSS`가 **사용자가 특정 웹 사이트를  
> 신용하는 점을 이용**한거라면 `CSRF`는 **서버가 특정 사용자의 웹 브라우저를 신용**하는 상태를 노린것이다.  
> 사용자가 웹 사이트에 로그인한 상태에서 `CSRF` 공격 코드가 삽입된 페이지를 열면 공격 대상이 되는 웹사이트는  
> 위조된 공격 명령이 믿을 수 있는 사용자로부터 보내진 것으로 판단하여 공격에 노출된다. `XSS`와 달리 `javascript`  
> 가 필요하지 않는 공격이다. `img, form` 태그 등 다양한 `HTML`태그를 활용한다.

## CSRF 방지
### 1. 다른 사이트에서 요청을 보내는 공격이므로 다른 사이트에서 온 요청을 막거나 `origin`을 확인하는 작업이 필요하다.
### 2. CORS를 적용해 사이트 간 요청을 불가능하게 한다.
### 3. referer 헤더를 설정하여 어디에서 요청이 왔는지 확인할 수 있다.
### 4. token을 검증한다.
