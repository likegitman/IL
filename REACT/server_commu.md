# 서버 통신

# fetch()

## fetch/server/app.js
```
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/api/todo", (req, res) => {
    res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send('success');
});

app.listen(4000, () => {
  console.log("server start!!");
});
```

## fetch/client/src/App.js
```
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(null);
  const [value, setValue]=useState("");
  const [checked, setChecked]=useState(false);

  const fetchData = () => {
    fetch("http://localhost:4000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange=(e)=>{
    setValue(e.target.value);
  };

  const onClick=()=>{
    setChecked(!checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch('http://localhost:4000/api/todo',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        done
      }),
    }).then(()=>{
      fetchData();
    });
    setValue("");
    setChecked(false);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} name="text" />
        <input checked={checked} onClick={onClick} name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>

      {todoList?.map((todo) => (
        <div key={todo.id}  style={{display: 'flex'}}>
          <div style={{margin: '10px'}}>{todo.id}</div>
          <div style={{margin: '10px'}}>{todo.text}</div>
          <div style={{margin: '10px'}}>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
```

# axios

## fetch/server/app.js
```

```

## fetch/client/src/App.js
```
import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_ADDRESS="http://localhost:4000/api/todo";

function App() {
  const [todoList, setTodoList] = useState(null);
  const [value, setValue]=useState("");
  const [checked, setChecked]=useState(false);

  const fetchData = async () => {
    const response=await axios.get(SERVER_ADDRESS);
    setTodoList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange=(e)=>{
    setValue(e.target.value);
  };

  const onClick=()=>{
    setChecked(!checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_ADDRESS, {text, done});
    fetchData();
    setValue("");
    setChecked(false);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} name="text" />
        <input checked={checked} onClick={onClick} name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>

      {todoList?.map((todo) => (
        <div key={todo.id}  style={{display: 'flex'}}>
          <div style={{margin: '10px'}}>{todo.id}</div>
          <div style={{margin: '10px'}}>{todo.text}</div>
          <div style={{margin: '10px'}}>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

```
