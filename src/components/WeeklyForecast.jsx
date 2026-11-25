
function WeeklyForecast({ weather }) {

  const daily = weather.daily;

  function getWeatherIcon(code) {

    if (code === 0) return "☀️";
    if (code <= 3) return "🌤️";
    if (code <= 48) return "🌫️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "❄️";
    if (code <= 82) return "🌦️";
    if (code <= 86) return "❄️";
    if (code <= 99) return "⛈️";

    return "🌤️";
  }

  return (
    <div className="weekly-container">

      <h2>7-Day Forecast</h2>

      <div className="weekly-list">

        {daily.time.map((date, index) => {

          const day = new Date(date + "T12:00:00");

          const dayName = index === 0
            ? "Today"
            : day.toLocaleDateString("en-US", {
                weekday: "long"
              });

          return (

            <div className="weekly-row" key={date}>

              <h4>{dayName}</h4>

              <span>
                {getWeatherIcon(daily.weather_code[index])}
              </span>

              <p>
                {daily.weather_code[index] === 0
                  ? "Clear"
                  : daily.weather_code[index] <= 3
                  ? "Cloudy"
                  : daily.weather_code[index] <= 48
                  ? "Foggy"
                  : daily.weather_code[index] <= 67
                  ? "Rainy"
                  : daily.weather_code[index] <= 77
                  ? "Snowy"
                  : daily.weather_code[index] <= 86
                  ? "Showers"
                  : "Thunderstorm"}
              </p>

              <div className="weekly-temp">

                <span>
                  {Math.round(daily.temperature_2m_min[index])}°
                </span>

                <strong>
                  {Math.round(daily.temperature_2m_max[index])}°
                </strong>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}

export default WeeklyForecast;
