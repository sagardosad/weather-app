
function HourlyForecast({ weather }) {

  const hourly = weather.hourly;

  // Find the current hour in the API response
  const currentIndex = hourly.time.findIndex(
    (time) => time >= weather.current.time
  );

  // Get the next 5 hourly forecasts
  const nextHours = hourly.time.slice(
    currentIndex,
    currentIndex + 5
  );

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
    <div className="hourly-container">

      <h2>Hourly Forecast</h2>

      <div className="hourly-list">

        {nextHours.map((time, index) => {

          const actualIndex = currentIndex + index;

          return (

            <div className="hour-card" key={time}>

              <p>
                {index === 0
                  ? "Now"
                  : new Date(time).toLocaleTimeString(
                      "en-US",
                      { hour: "numeric", hour12: true }
                    )}
              </p>

              <span>
                {getWeatherIcon(
                  hourly.weather_code[actualIndex]
                )}
              </span>

              <h3>
                {Math.round(
                  hourly.temperature_2m[actualIndex]
                )}°
              </h3>

            </div>

          );
        })}

      </div>

    </div>
  );
}

export default HourlyForecast;
