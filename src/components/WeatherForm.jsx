
import React from "react";
import { FiSearch } from "react-icons/fi";

const WeatherForm = ({ city, setCity, handleSearch }) => {
  return (
    <form className="mb-6 w-full max-w-sm flex" onSubmit={handleSearch}>
      <input
        type="text"
        className="flex-grow p-3 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="p-3 rounded-r-lg bg-blue-500 text-white font-bold hover:bg-blue-700 transition duration-300"
      >
        <FiSearch size={24} />
      </button>
    </form>
  );
};

export default WeatherForm;
