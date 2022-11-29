# JSX
> JAVASCRIPT의 확장 문법이며 XML과 비슷하게 생겼음  
  JSX형식으로 작성한 코드는 브라우저가 실행되기 전에 
  번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트로 변환된다.
  
## JSX -> Babel
```
// JSX
function App(){
    return (
        <div>
            Hello <b>react</b>
        </div>
    );
}

// Babel
function App(){
    return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}
```

> 기본적으로 JSX는 JAVASCRIPT만 사용한 코드보다 익숙함  
  결국 HTML코드를 작성하는 것과 비슷해서 가독성과 편리함이라는 장점 때문에  
  JSX를 사용한다.

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
        // JSX 문법
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
