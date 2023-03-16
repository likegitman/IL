# React_Style
> React의 다양한 스타일링 기법

# Inline styling

## App.js
> style 우선순위가 높음

```
function App() {
    return (
        <div>
            <h1
                style={{
                    color:'red',
                    // Kebab case가 아닌 Camel case 표기법으로 작성해야 됨
                    textAlign: "center"
                }}
            >Hello React!!</h1>
        </div>
    );
}

export default App;
```

# CSS Import
> 클래스명이 충돌하는 문제 발생

## App.js
```
import "./style.css";

function App() {
    return (
        <div>
            <h1 className="hello">Hello React!!</h1>
        </div>
    );
}
```

## style.css
```
.hello {
  color: red;
}
```

# CSS module
> 클래스명이 충돌하지 않는 방법

## App.js
```
import style from "./style.module.css";

function App() {
    return (
        <div>
            <h1 className={style.hello}>Hello React!!</h1>
        </div>
    );
}

export default App;
```

## style.module.css
```
.hello {
  color: red;
}
```

# SCSS

## App.js
```
import "./style.scss";

function App() {
    return (
        <div className="warp">
            <h1 className="hello">Hello React!!</h1>
            <h2 className="useScss">SCSS 사용해보기</h2>
        </div>
    );
}

export default App;
```

## style.scss
```
.warp{
    width: 100%;
    height: 100vh;
    
    .hello {
        color: red;
    }

    .useScss{
        color: blue;
        &:hover {
            cursor: pointer;
        }
    }
}
```
