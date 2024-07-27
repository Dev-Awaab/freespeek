import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import Loader from "./Loader";
import ErrorAlert from "./ErrorAlert";
import WeatherCard from "./WeatherCard";
import { envVar } from "../constants";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("object", import.meta.env.BASE_URL);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${envVar.apiBaseUrl}?q=${city}&appid=${envVar.apiKey}`
      );
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-4">
      <h1 className="text-5xl font-bold text-white mb-6">Weather App</h1>
      <WeatherForm city={city} setCity={setCity} handleSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorAlert message={error} />}
      {!loading && !error && weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Weather;
