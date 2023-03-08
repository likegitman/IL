# Props_Type

# Basic
## App.tsx
```
import React from 'react';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status;

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
