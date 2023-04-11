# 활용

# Basic
## Greeting.tsx
```
import React from 'react';

type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onGreeting: (name:string) => void;
}

function Greeting({name, mark, optional,onGreeting}:GreetingProps) {

    const handleClick = () => onGreeting(name);
    
    return (
        <div>
            Hello, {name} {mark}
            <h1>{optional}</h1>
            <button onClick={handleClick}>
                Click me!
            </button>
        </div>
    );
}

Greeting.defaultProps = {
    mark: "!"
};


export default Greeting;
```

## App.tsx
```
import React from 'react';
import Greeting from './components/Greeting';

function App() {

  const onGreeting = (name:string) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <div>
      <Greeting name='mike' onGreeting={onGreeting} />
    </div>
  );
}

export default App;
```

# useState

## Counter.tsx
```
import React, { useState } from 'react';

function Counter() {
    // Generics를 안 써도 알아서 타입을 알아봐서 안 써도 되지만
    // 값이 null일수도 있을 때는 써 주어야한다.
    // const [count, setCount] = useState<number | null>(0);
    
    const [count, setCount] = useState<number>(0);
    const onAdd = () => setCount(count + 1);
    const onMinus = () => setCount(count - 1);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onAdd}>더하기</button>
            <button onClick={onMinus}>빼기</button>
        </div>
    );
}

export default Counter;
```

# Input

## MyForm.tsx
```
import React, { useState } from 'react';

type MyFormProps = {
    onSubmit: (form: {name: string; description: string}) => void;
}

function MyForm({onSubmit}:MyFormProps) {

    const [form, setForm] = useState({
        name: "",
        description: "",
    });

    const {name, description} = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: "",
            description: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type='submit'>등록</button>
        </form>
    );
}

export default MyForm;
```

## App.tsx
```
import React from 'react';
import MyForm from './components/MyForm';

function App() {

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  };

  return (
    <div>
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
```

# useReducer (Counter)

## ReducerCounter.tsx
```
import React, { useReducer } from 'react';

type Action = {type: "ADD"} | {type: "MINUS"};

function reducer(state:number, action:Action):number {
    switch(action.type) {
        case "ADD":
            return state + 1;

        case "MINUS":
            return state - 1;
        default:
            return state;
    }
}

function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, 0);
    
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>dispatch({type: "ADD"})}>더하기</button>
            <button onClick={()=>dispatch({type: "MINUS"})}>빼기</button>
        </div>
    );
}

export default ReducerCounter;
```

# Reducer (object)

## ReducerSample.tsx
```
import React, { useReducer } from 'react';

type Color = "red" | "orange" | "yellow";

type StateTypes = {
    count: number,
    text: string,
    color: Color,
    isGood: boolean,
}

type Action =
    | { type: "SET_COUNT"; count: number }
    | { type: "SET_TEXT"; text: string }
    | { type: "SET_COLOR"; color: Color }
    | { type: "TOGGLE_GOOD" };

function reducer(state: StateTypes, action: Action) {
    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            };
        case "SET_COLOR":
            return {
                ...state,
                color: action.color
            };
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood: !state.isGood
            };
    }
}

function ReducerSample() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: "hello",
        color: "red",
        isGood: true,
    });

    const setCount = () => dispatch({ type: "SET_COUNT", count: 5 });
    const setText = () => dispatch({type: "SET_TEXT", text: "bye"});
    const setColor = () => dispatch({type: "SET_COLOR", color: "orange"});
    const toggleIsGood = () => dispatch({type: "TOGGLE_GOOD"});

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? "행복" : "뻑업"}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleIsGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    );
}

export default ReducerSample;
```
