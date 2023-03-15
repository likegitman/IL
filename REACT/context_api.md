# Context Api

# New Component

## color.js
> 새로운 Context를 만들고 createContext로 설정한 기본값은  
> Provider를 사용하지 않을 때만 적용된다.
```
import { createContext } from "react";

const ColorContext = createContext({color: "black"});

export default ColorContext;
```

# Consumer
> Consumer사이에 중괄호로 감싸 그 안에 함수를 넣는 방식을 Function as a child  
> 혹은 React Props라고 한다. 

## ColorBox.js
> ColorContext안에 들어 있는 색상을 보여 줌 이때,  
> 색상은 props가 아닌 Consumer라는 컴포넌트를 통해 색상을 조회한다.

```
import React from 'react';
import ColorContext from '../contexts/color';

function ColorBox() {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{
            width: '100px',
            height: '100px',
            background: value.color,
          }}
        ></div>
      )}

    </ColorContext.Consumer>
  );
}

export default ColorBox;
```

# Provider
> Context의 value를 변경할 수 있다.
> 사용할 때 꼭 value를 명시해주어야한다.

## Error Code
> value를 명시해주지 않음
```
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider> 
  );
}
```

## App.js
```
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{color: 'red'}}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider> 
  );
}

export default App;
```

# 동적 Context
> Context의 고정적인 값을 쓰는게 아닌 Context의 값을 업데이트한다.

# Correction Context
> Context 수정

## color.js
```
import { createContext, useState } from "react";

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubColor: () => {},
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor]=useState('black');
    const [subcolor, setSubColor]=useState('red');
    
    const value = {
        state: {color, subcolor},
        actions: {setColor, setSubColor}
    };

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const {Consumer: ColorConsumer} = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer};


export default ColorContext;
```

# color의 ColorProvider 사용하기
## App.js
```
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';

function App() {
  return (
    // <ColorContext.Provider value={{color: 'red'}}>
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
    // </ColorContext.Provider> 
  );
}

export default App;
```

# color의 ColorConsumer 사용하기
## ColorBox.js
```
import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

function ColorBox() {
  return (
    // <ColorContext.Consumer>
    <ColorConsumer>
      {({state}) => (
        <>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: state.color,
          }}
        ></div>

        <div
          style={{
            width: '80px',
            height: '80px',
            background: state.subcolor,
          }}
        ></div>
        </>
      )}

    </ColorConsumer>
    // </ColorContext.Consumer>
  );
}

export default ColorBox;
```
