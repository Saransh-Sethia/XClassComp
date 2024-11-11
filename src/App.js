import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this)
  };

  increment(){
    this.setState(prev=>({
      count: prev.count + 1
    }))
  }

  decrement(){
    this.setState(prev=>({
      count: prev.count - 1
    }))
  }

  render(){
    return(
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;
