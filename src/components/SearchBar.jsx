
import { useState } from "react";
import { searchCity, getWeather } from "../services/weatherApi";

function SearchBar({ onWeatherFound }) {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e) {

    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name!");
      return;
    }

    try {

      setLoading(true);
      setError("");

      const cityData = await searchCity(city.trim());

      const weatherData = await getWeather(
        cityData.latitude,
        cityData.longitude
      );

      onWeatherFound({
        city: cityData,
        weather: weatherData
      });

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  }

  return (
    <div className="search-container">

      <h2>Find your city</h2>

      <p>Search for weather anywhere in the world</p>

      <form className="search-box" onSubmit={handleSearch}>

        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

      </form>

      {loading && (
        <p className="loading-message">
          Fetching weather data...
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

    </div>
  );
}

export default SearchBar;
