# Route
> 리액트에서 페이지 이동을 할 수 있게 해주는 기능

## USE
```
// route v6에서는 Switch의 기능을 Routes가 해준다

import { Routes } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
```
