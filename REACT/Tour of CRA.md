# CRA

## App.js
```
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome bacadsfsafsk!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
```

## App.module.css
```
.title{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
    font-size: 18px;
}
```

## Button.js
```
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.title}>{text}</button>;
}
Button.propTypes={
    text:PropTypes.string.isRequired,
};
export default Button;
```

## Button.module.css
```
.title {
    color: white;
    background-color: tomato;
}
```

## index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from "./App.module.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
