
import React from "react";
import WeatherIcons from "./WeatherIcons";
import { MdLocationCity } from "react-icons/md";
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex items-center mb-4">
        <MdLocationCity size={40} className="text-blue-500" />
        <h2 className="text-3xl font-bold ml-2">{weather.name}</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <WeatherIcons description={weather.weather[0].description} />
        <p className="text-lg ml-2 capitalize ">
          {weather.weather[0].description}
        </p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <WiThermometer size={40} className="text-red-500" />
        <p className="text-lg">
          Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
        </p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <WiHumidity size={40} className="text-blue-500" />
        <p className="text-lg">Humidity: {weather.main.humidity}%</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <WiStrongWind size={40} className="text-green-500" />
        <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
