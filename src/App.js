import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/CurrentWeather'
import ForeCast from './components/ForeCast'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForeCast] = useState(null)
  const [error, setError] = useState(null)
  const fetchWeather = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`,
      )
      setWeatherData(weatherResponse.data)
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`,
      )
      setForeCast(forecastResponse.data)
      setError(null)
    } catch (err) {
      setError('City not found or API error')
      setWeatherData(null)
      setForeCast(null)
    }
  }

  // useEffect(() => {
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric",{
  //     method: "GET"
  //   }).then((response)=>response.json())
  //   .then((data) => {
  //     setWeatherData(data);
  //     console.log(data)
  //   })

  //   fetch("https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric",{
  //     method: "GET"
  //   }).then((response)=>response.json())
  //   .then((data) => {
  //     setForeCast(data);
  //     console.log(data)
  //   })
  // }, [])
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter City Name"
      />
      <button onClick={fetchWeather}>Search</button>
      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <ForeCast data={forecastData} />}
    </div>
  )
}

export default App
