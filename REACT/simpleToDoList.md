# ToDoList

```javascript
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 현재 배열을 갖고오고 Submit event가 실행되면 toDo를 배열에 합친다
    setToDos((toDos) => [toDo, ...toDos]);
    setToDo("");
  };
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        // map : 자바스크립트 함수
        {toDos.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
