import { useState } from 'react';
import axios from 'axios';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForeCast from './components/ForeCast';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      );
      console.log("Weather Data:", weatherResponse.data); // Log the weather data
      setWeatherData(weatherResponse.data);
  
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      );
      console.log("Forecast Data:", forecastResponse.data); // Log the forecast data
      setForecastData(forecastResponse.data);
    } catch (err) {
      console.error(err); // Log the error
      setError('City not found or API error');
      setWeatherData(null);
      setForecastData(null);
    }
  };
  

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
      />
      <button onClick={fetchWeather}>Search</button>
      {error && <p>{error}</p>}
      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <ForeCast data={forecastData} />}
    </div>
  );
};

export default App;
