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

## 리액트
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
    const root = document.getElementById("root");
    const span = React.createElement("span", { id: "sexy-span", style:{color:"red"} }, "Hello I'm a span");
    ReactDOM.render(span, root);
</script>

</html>
```
