const CurrentWeather = ({data}) => (
  <div>
    <h2>Current Weather in {data.name}</h2>
    <p>Temperature: {data.main.temp}C</p>
    <p>Humidity: {data.main.humidity}%</p>
    <p>Wind Speed: {data.wind.speed}m/s</p>
    <p>Conditions: {data.weather[0].description}</p>
  </div>
)

export default CurrentWeather
