# State
> 변하는 값

## Vanilla JS
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

## React State
```
<!DOCTYPE html>
<html>

<body>
    <div id="root"></div>
</body>

<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");

    function App() {
        const [cnt, setCnt]=React.useState(0);
        const onClick = () =>{
            setCnt(cnt+1);
        };
        return (
            <div>
                <h3>Total clicks: {cnt}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App />, root);
</script>

</html>
```

## State Function
```
<!DOCTYPE html>
<html>

<body>
    <div id="root"></div>
</body>

<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");

    function App() {
        const [cnt, setCnt]=React.useState(0);
        const onClick = () =>{
            // setCnt(cnt+1);
            setCnt((current)=>current+1);
        };
        return (
            <div>
                <h3>Total clicks: {cnt}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App />, root);
</script>

</html>
```
