# useContext
> 보통 리액트로 웹을 개발할 때 props를 넘겨주는데 만약 자식 컴포넌트는 엄청많고  
> 부모에서 넘겨주는 props가 적을 떄에는 효율적으로 props를 넘겨줘야할 필요가 있다.  
> 이럴때 사용하는것이 useContext이다. useContext는 내가 넘겨줘야 할 props를 글로벌하게  
> 사용할 수 있도록 도와준다.

# Example

## ThemeContext.js
```
import { createContext } from "react";

export const ThemeContext=createContext(null);
```

## UserContext.js
```
import { createContext } from "react";

export const UserContext=createContext(null);
```

## App.js
```
import { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser]=useState('Woonrin');

  return (
    // 이렇게 감싸면 모든 하위 컴포넌트들은 context를 사용할 수 있게 됨
    
    // .Provider애 value를 전해주지 않으면 context의 기본값이 전달 됨
    <UserContext.Provider value={{ user}}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
```

## Page.js
```
import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function Page() {
    return (
        <div className='page'>
            <Header /> 
            <Content/>
            <Footer />
        </div>
    );
}

export default Page;
```

## Footer.js
```
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
    // context 사용
    const {isDark, setIsDark}=useContext(ThemeContext);

    const toggleTheme=()=>{
        setIsDark(!isDark);
    };

    return (
        <footer
         className='footer'
         style={{
            backgroundColor: isDark ? 'black':'lightgray'
         }}
        >
             <button className='button' onClick={toggleTheme}>
                {isDark?'Light Mode':'Dark Mode'}
            </button>
        </footer>
    );
}

export default Footer;
```
