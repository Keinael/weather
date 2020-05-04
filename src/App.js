import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  render() {
    return(
      <div>
        <Info />
        <Form />        
        <Weather />
      </div>
    )
  }
}


export default App;