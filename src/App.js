import './App.css';
import React, { useState } from 'react';
import DailyWeather from './Components/DailyWeather/DailyWeather';
import Forecast from './Components/Forecast/Forecast';
import Fade from 'react-reveal/Fade';

function App() {

  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState();
  const [error, setError] = useState(null);
  const [dailyWeather, setDailyWeather] = useState()

  const changeCityHandler = (e) => {
    setCity(e.target.value);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lang=null&units=metric`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "79ebcce9f2msha728e38c8b1275cp1c8ff4jsn21f7258d4408",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      }
    })
      .then(response => response.json()
        .then(data => {
          if (data.cod === 200) {
            setError(null);
            setDailyWeather(data);
          } else {
            setError(data.message)
          }
        }))
      .catch(err => {
        console.error(err);
      });

    await fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${city}&units=metric`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "79ebcce9f2msha728e38c8b1275cp1c8ff4jsn21f7258d4408",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
      .then(response => response.json()
        .then(data => {
          if (data.cod === "200") {
            setError(null);
            setForecast(data);
          } else {
            setError(data.message)
          }
        }))
      .catch(err => {
        console.error(err)
      });
  }

  return (
    <div className="app">
      <header>
        <h1>WeatherApp</h1>
      </header>
      <main className="main">
        <div>
          <form onSubmit={submitHandler}>
            <input className="input-city" type="text" id="city" name="city" placeholder="Enter City" onChange={changeCityHandler} />
          </form>
          {error && (
            <h2 className="txt-red">{error}</h2>
          )}
          {!error && (
            <>
              <div>
                {dailyWeather && (
                  <Fade left>
                    <DailyWeather data={dailyWeather} />
                  </Fade>
                )}
              </div>
              {forecast && (
                <>
                  <Forecast data={forecast} />
                </>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
