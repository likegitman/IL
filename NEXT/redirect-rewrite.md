# redict, rewrite
> next.js의 기능으로 사용자가 어떤 path(경로)로 접근하는 경우에 특정 사이트로 옮겨주는 기능이다.

# redirect
> 정해진 path로 url이 변경된다.
```js
module.exports = {
  async redirects() {
    return [
      {
        source: "/main",
        destination: "/",
      },
    ]
  }
}
```
> 유저가 `/main`으로 진입하면 url이 `/`로 변한게 유저에게 보여진다.

# rewrite
> 유저가 입력한 url 그대로 유저에게 보여져 유저는 화면이 변경된지 모른다.
```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/main",
        destination: "/",
      },
    ]
  }
}
```
> source는 유저가 진입할 경로이고  
> destination은 유저가 이동할 경로다.
> url은 유저에게 `/main`으로 보이지만 실제로는 `/`으로 이동해있다.

