import React from "react";
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiCloud,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiCloudy,
  WiFog,
  WiDayRain,
  WiDayCloudy,
} from "react-icons/wi";

const weatherIcons = {
  "clear sky": <WiDaySunny size={40} className="text-yellow-500" />,
  "few clouds": <WiDayCloudy size={40} className="text-gray-500" />,
  "scattered clouds": <WiCloud size={40} className="text-gray-500" />,
  "broken clouds": <WiCloudy size={40} className="text-gray-500" />,
  "shower rain": <WiDayRain size={40} className="text-blue-500" />,
  "light rain": <WiRain size={40} className="text-blue-500" />,
  "moderate rain": <WiRain size={40} className="text-blue-500" />,
  rain: <WiRain size={40} className="text-blue-500" />,
  thunderstorm: <WiRain size={40} className="text-blue-500" />,
  snow: <WiSnow size={40} className="text-blue-500" />,
  mist: <WiFog size={40} className="text-gray-500" />,
};

const WeatherIcons = ({ description }) => {
  return (
    weatherIcons[description] || <WiCloud size={40} className="text-gray-500" />
  );
};

export default WeatherIcons;
