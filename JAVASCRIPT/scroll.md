# Scroll Event
> 브라우저에서 스크롤바를 조작하면 scroll 이벤트가 발생하게 된다. 그래서 scroll 이벤트리스너를 전체 페이지에 달면
> 전체 페이지를 스크롤할 때마다 내가 원하는 코드를 실행할 수 있다.
```js
window.addEventListener("scroll", () => {
  console.log("Scroll!");
})
```
> 이렇게 코드를 작성하면 내가 스크롤을 할 때마다 console창에 Scroll!이 표시된다.

## Scroll Event function

## scrollY, scrollX
> window.scrollY를 사용하면 현재 페이지를 위에서부터 얼마나 스크롤 했는지 px 단위로 알려준다.  
> window.scrollX도 마찬가지로 만약 가로 스크롤바가 있다면 가로로 얼마나 스크롤을 했는지 알려준다.

### Example
```js
const btn = document.getElementById("#scBtn");

btn.addEventListener("click", () => {
  console.log(window.scrollY, window.scrollX);
});
```

## ScrollTo
> window.scrollTo(x, y)를 사용하면 내가 원하는 지점으로 스크롤바를 __강제로__ 움직일 수 있다.

### Example
```js
const btn = document.getElementById("#scBtn");

btn.addEventListener("click", () => {
  window.scrollTo(0, 200);
});
```

## ScrollBy
> window.scrollBy(x, y)를 사용하면 __현재 위치__ 에서부터 내가 원하는 지점으로 스크롤을 해준다.

### Example
```js
const btn = document.getElementById("#scBtn");

btn.addEventListener("click", () => {
  window.scrooBy(0, 200);
});
```
> 위 코드를 실행하면 스크롤 위치가 천천히 내려가지않고 바로 그 위치로 이동되는데  
> 천천히 스크롤되게 하고싶다면 css에 `scroll-behavior : smooth;`를 추가하면 된다.
