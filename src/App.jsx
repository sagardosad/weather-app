
import { useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";

import "./App.css";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>

      <Navbar />

      <SearchBar onWeatherFound={setWeatherData} />

      {weatherData && (
        <WeatherCard
          city={weatherData.city}
          weather={weatherData.weather}
        />
      )}

      {weatherData && (
  <>
    <HourlyForecast weather={weatherData.weather} />

    <WeeklyForecast weather={weatherData.weather} />
  </>
  )}

    </div>
  );
}

export default App;
