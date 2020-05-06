import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "8dc4c526e40dc58ced56d12b14590533";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value;

    if (CITY) {
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
      const DATA = await API_URL.json();

      let sunset_date = new Date();
      let sunrise_date = new Date();
      sunset_date.setTime(DATA.sys.sunset);
      sunrise_date.setTime(DATA.sys.sunrise);
      var sunset_date_parsed = sunset_date.getHours() + ":" + sunset_date.getMinutes() + ":" + sunset_date.getSeconds();
      var sunrise_date_parsed = sunrise_date.getHours() + ":" + sunrise_date.getMinutes() + ":" + sunrise_date.getSeconds();

      this.setState({
        temp: DATA.main.temp,
        city: DATA.name,
        country: DATA.sys.country,
        sunrise: sunrise_date_parsed,
        sunset: sunset_date_parsed,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Input city"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form
                  weatherMethod={this.gettingWeather}
                />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;