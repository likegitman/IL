# React_Style
> React의 다양한 스타일링 기법

# Inline styling

## App.js
> style 우선순위가 높음

```javascript
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
```javascript
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
```css
.hello {
  color: red;
}
```

# CSS module
> 클래스명이 충돌하지 않는 방법

## App.js
```javascript
import styles from "./style.module.css";

function App() {
    return (
        <div>
            <h1 className={styles.hello}>Hello React!!</h1>
        </div>
    );
}

export default App;
```

## style.module.css
```css
.hello {
  color: red;
}
```

# SCSS
> 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 가독성을 높여주어 유지보수를 쉽게해준다.

## Installation
`yarn add scss`

## App.js
```javascript
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
```css
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

# Styled-Component
> JS 안에 CSS 를 작성하는 것을 말한다. style을 적용하고자 하는 태그나 컴포넌트를
> styled-components로 감싸면 style이 적용된다.  

### Installation
`yarn add styled-components`

### App.js
```javascript
import styled from 'styled-components';

// 백틱으로 감싸줘야 함
const StyleBox = styled.div`
  color: red;
`;

function App() {
  return (
    <div>
      <StyleBox>
        <h1 className={style.hello}>Hello React!!</h1>
      </StyleBox>
    </div>
  );
}

export default App;
```

## 특정 값을 props로 넘겨줘 다양한 기능을 구현할 수도 있다.
> props를 대문자로 쓰면 오류가 발생한다. ( props는 소문자로 )
### App.js
```js
import styled from 'styled-components';

// 백틱으로 감싸줘야 함
const StyleBox = styled.div`
  color: ${(props)=>};
`;

function App() {

  const [clicked, setClicked] = useState(false);
  
  return (
    <div>
      <StyleBox >
        <h1 className={style.hello}>Hello React!!</h1>
      </StyleBox>
    </div>
  );
}

export default App;
```

## Caution
> styled-components를 함수 컴포넌트 안에 선언하면 console에 warning들이 잔뜩 뜨니까 조심해야된다.
