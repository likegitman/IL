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
