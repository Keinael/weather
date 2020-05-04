import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "8dc4c526e40dc58ced56d12b14590533";

class App extends React.Component {

  gettingWeather = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value;
    const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
    const DATA = await API_URL.json();
    console.log(DATA);
  }

  render() {
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>        
        <Weather />
      </div>
    )
  }
}


export default App;