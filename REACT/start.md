# Start


## 바닐라JS
> html을 만들고 js로 가져와서 다시 html을 수정하는 

```
<!DOCTYPE html>
<html>
    <body>
        <span>Total clicks: 0</span>
        <button id="btn">Click me</button>
    </body>

    <script>
        let cnt=0;
        const button=document.getElementById("btn");
        const span=document.querySelector("span");
        function handleClick(){
            cnt=cnt+1;
            span.innerText=`Total clicks: ${cnt}`;
        }
        button.addEventListener("click", handleClick)
    </script>
</html>
```

## React
> 모든것이 js로 시작해 그 다음에 html을 수정

```
<!DOCTYPE html>
<html>

<body>
    <div id="root"></div>
</body>

<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    // element를 만들고 event를 넣고 값을 넣는것을 한 번에 함
    const root = document.getElementById("root");
    const h3 = React.createElement("h3", {
        onMouseEnter: () => console.log("mouse enter"),
    }, "Hello I'm a span");
    const btn = React.createElement("button", {
        onClick: () => console.log("im clicked"),
    }, "Click me");
    const container = React.createElement("div", null, [h3, btn]);
    ReactDOM.render(container, root);
</script>

</html>
```
