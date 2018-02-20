
import React, { Component } from "react";

function FunctionalComponent() {
return (
  <div>
    <h1>This is a functional component</h1>
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Good Morning Jason!</h1>
        </header>
        <FunctionalComponent />
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App; 
