# Event Handling
> 이벤트는 마우스 클릭이나 키보드 입력과 같이 사용자가 행하는 모든 동작을 말하는데 이벤트를 원하는대로  
> 처리하는 것을 이벤트 핸들링이라고한다.
```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  alert("Clicked!");
}
```
> `addEventListner(event, function, useCapture)`에서 세번째 인자 useCapture와 관련된 개념이  
> Event Bubbling과 EventCapturing이다. 기본값은 false이며 true로 변경하면 Capturing을 통해 이벤트를 전파한다.

# Event Bubbling
> 하위요소에서 상위 요소로 이벤트를 전파하는 방식으로 HTML구조상 자식요소에 발생한 이벤트가 상위의  
> 부모요소까지 영향을 미치는 것을 말한다.
### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="first">
      <div class="second">
        <div class="third">
            push
        </div>
      </div>
    </div>
  </body>
</html>
```

### JavaScript
가장 하위요소에 해당하는 push요소를 클릭하면 third, second, first 순으로  
alert()이 실행된다. 이렇게 Event Handler가 등록된 중첨된 요소들에서 이벤트가 발생하였을 때  
하위요소에서 상위요소로 Event가 전파된다.
```javascript
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

// useCapturing false
first.addEventListner("click", function() {
  alert("first");
});

// useCapturing false
second.addEventListner("click", function() {
  alert("second");
});

// useCapturing false
third.addEventListner("click", function() {
  alert("third");
});
```

# Event Captuing
> Event Bubbling과 반대로 상위요소에서 하위요소로 이벤트를 전파하는 방식이다.

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="first">
      <div class="second">
        <div class="third">
            push
        </div>
      </div>
    </div>
  </body>
</html>
```

### JavaScript
가장 상위요소 class가 first인 div를 누르면 first, second, third 순으로  
alert()이 실행된다.
```javascript
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

// useCapturing true
first.addEventListner("click", function() {
  alert("first");
}, true);

// useCapturing true
second.addEventListner("click", function() {
  alert("second");
}, true);

// useCapturing true
third.addEventListner("click", function() {
  alert("third");
}, true);
```

# Event Block
> Event Bubbling은 특정요소에서 상위로 올라가 html 태그, document, window까지 전달되기  
> 때문에 브라우저에서 예상치 못한 동작이 발생할 수 있다. 그럴 때는 stopPropagation()메소드를 사용하면 된다.  
> Event Capturing에서 stopPropagation() 메소드를 사용하면 특정 요소의 최상위 요소의 Event만 동작시키고  
> 하위 요소들로 Event를 전달하지 않는다.

### Event Bubbling
```javascript
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

first.addEventListner("click", function() {
  alert("first");
});

second.addEventListner("click", function() {
  alert("second");
});

third.addEventListner("click", function(event) {
  // third에서 상위 요소로 Event가 전달되지 않는다.
  event.stopPropagation();
  alert("third");
});
```

### Event Capturing
```javascript
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

first.addEventListner("click", function() {
  alert("first");
}, true);

second.addEventListner("click", function() {
  alert("second");
}, true);

third.addEventListner("click", function(event) {
  // third의 최상위 요소 first의 이벤트만 작동한다.
  event.stopPropagation();
  alert("third");
}, true);
```
