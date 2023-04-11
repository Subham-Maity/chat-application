import React from "react";
import Mirrorfly from "mirrorfly";

class App extends React.Component {
  componentDidMount() {
    Mirrorfly.init("<your-app-id>");
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default App;
