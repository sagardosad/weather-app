
function WeatherCard({ city, weather }) {

  const current = weather.current;

  function getWeatherCondition(code) {

    if (code === 0) return "Clear Sky";
    if (code <= 3) return "Partly Cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    if (code <= 82) return "Rain Showers";
    if (code <= 86) return "Snow Showers";
    if (code <= 99) return "Thunderstorm";

    return "Unknown";
  }

  return (
    <div className="weather-card">

      <div className="weather-location">
        <div>
          <h2>{city.name}, {city.country}</h2>
          <p>Current Weather</p>
        </div>

        <span className="weather-icon">🌤️</span>
      </div>

      <div className="temperature">

        <h1>{Math.round(current.temperature_2m)}°C</h1>

        <div>
          <h3>{getWeatherCondition(current.weather_code)}</h3>

          <p>
            Feels like {Math.round(current.apparent_temperature)}°C
          </p>
        </div>

      </div>

      <div className="weather-info">

        <div>
          <span>💧</span>
          <h3>{current.relative_humidity_2m}%</h3>
          <p>Humidity</p>
        </div>

        <div>
          <span>💨</span>
          <h3>{current.wind_speed_10m} km/h</h3>
          <p>Wind Speed</p>
        </div>

        <div>
          <span>🌡️</span>
          <h3>{Math.round(current.apparent_temperature)}°C</h3>
          <p>Feels Like</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;
