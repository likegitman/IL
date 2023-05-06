# Props Type

# Basic

## App.tsx
```
import React from 'react';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status;
import Heading from './components/Heading';
import Oscar from './components/Oscar';

function App() {
  
  const name = "Unrin";
  const status = false;
  
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clack",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    }
  ];

  return (
    <div className='App'>
      <Greet name={name} messageCnt={20} isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status={status} />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>           
          Oscar goes to Leonardo Dicpario!
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
```

## Greet.tsx (Simple)
```
import React from 'react';

type GreetProps = {
    name: string;
    messageCnt: number;
    isLoggedIn: boolean;
}

function Greet(props: GreetProps) {
    const { name, messageCnt, isLoggedIn } = props;
    return (
        <div>
            <h2>
                {
                    isLoggedIn ? `Welcome ${name}! You have ${messageCnt} unread messages`
                    :
                    "Welcome guest"
                }
            </h2>
        </div>
    );
}

export default Greet;
```

## Person.tsx (Object)
```
import React from 'react';

type PersonProps = {
    name: {
        first: string;
        last: string;
    }
}

function Person(props:PersonProps) {
    const { name } = props;

    return (
        <div>
            {name.first} {name.last}
        </div>
    );
}

export default Person;
```

## PersonList.tsx (Array Object)
```
import React from 'react';

type PersonListProps = {
    names: {
        first: string,
        last: string,
    }[]
}

function PersonList(props:PersonListProps) {
    const { names } = props;
    return (
        <div>
            {names.map((nameList)=>(
                <h2 key={nameList.first}>
                    {nameList.first} {nameList.last}
                </h2>
            ))}
        </div>
    );
}

export default PersonList;
```

# Advanced

## Status.tsx (String Literal)
```
import React, { useEffect, useState } from 'react';

type StatusProps = {
    status: "loading" | "success" | "error"
}

function Status(props: StatusProps) {
    const { status } = props;
    const [message, setMessage] = useState("");

    // setMessage 무한로딩 방지
    useEffect(() => {
        if (status === "loading") {
            setMessage("Loading");
        } else if (status === "success") {
            setMessage("Data fetched successfully!")
        } else if (status === "error") {
            setMessage("Error fetching data");
        }
    }, [status]);

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
}

export default Status;
```

## Heading.tsx (Children)
```
import React from 'react';

type HeadingProps={
    children: string
}

function Heading(props: HeadingProps) {
    const {children}=props;
    return (
        <div>
            <h2>{children}</h2>
        </div>
    );
}

export default Heading;
```

## Oscar.tsx (ReactNode)
```
import React from 'react';

type OscarProps = {
    children: React.ReactNode
}

function Oscar(props: OscarProps) {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    );
}

export default Oscar;
```

# Event

## Button.tsx (React.MouseEvent<HTMLButtonElement>)
```
import React from 'react';

type ButtonProps = {
    handleClick: (evnet: React.MouseEvent<HTMLButtonElement>, id:number) => void
}

function Button(props: ButtonProps) {
    const { handleClick } = props;
    return (
        <div>
            <button onClick={(event)=>handleClick(event, 1)}>Click!</button>
        </div>
    );
}

export default Button;
```
  
## Input.tsx (React.ChangeEvent<HTMLInputElement>)
```
import React from 'react';

type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
    const { value, handleChange } = props;

    return (
        <div>
            <input type="text" value={value} onChange={(event) => handleChange(event)} />
        </div>
    );
}

export default Input;
```

# Styles

## Container.tsx (React.CSSProperties)
```
import React from 'react';

type ContainerProps = {
    styles: React.CSSProperties;
}

function Container(props: ContainerProps) {
    const { styles } = props;
    return (
        <div style={styles}>
            Text content goes here
        </div>
    );
}

export default Container;
```
