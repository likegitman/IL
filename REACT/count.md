# Count

```
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };

  // setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행.
  // state가 변경되면, 컴포넌트는 리렌더링된다.

  add=()=>{
    this.setState(current => ({count: current.count + 1}));
  };

  minus=()=>{
    this.setState(currnet => ({count: currnet.count - 1}));
  };

  render(){
    return(
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  };
}

export default App;

```
