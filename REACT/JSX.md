# JSX

## JSX part_1 (JSX 기초)
```
<!DOCTYPE html>
<html>

<body>
    <div id="root"></div>
</body>

<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// type="text/babel" == 브라우저가 읽을 수 있는 코드로 변환
<script type="text/babel">
    const root = document.getElementById("root");
    const Title = (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
            Hello I'm a title
        </h3>
    );
    const Button = (
        <button style={{
            backgroundColor: "tomato",
        }} onClick={() => console.log("im clicked")}>
            Click me
        </button>
    );
    const container = React.createElement("div", null, [Title, Button]);
    ReactDOM.render(container, root);
</script>

</html>
```

## JSX part_2(함수, 컴포넌트)
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
    const Title = () => (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
            Hello I'm a title
        </h3>
    );
    const Button = ()=> (
        <button style={{
            backgroundColor: "tomato",
        }} onClick={() => console.log("im clicked")}>
            Click me
        </button>
    );
    const Container = () => (
        <div>
            <Title />
            <Button />
        </div>
    );
    ReactDOM.render(<Container />, root);
</script>

</html>
```
