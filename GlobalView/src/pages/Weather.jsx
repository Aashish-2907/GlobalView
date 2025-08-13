import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Weather = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchWeather = async () => {
      setError("");
      setWeather(null);
      try {
        // const res = await fetch(`http://localhost:5000/api/weather/${city}`);
        

        const res = await fetch(`${apiBaseUrl}/api/weather/${city}`);

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Error fetching weather");
          return;
        }
        setWeather(data);
      } catch (err) {
        setError("Network error or invalid city name");
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div className="weather-card">
          <h2>Weather Report for {city}</h2>
          <h3 className="card-description">{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};
