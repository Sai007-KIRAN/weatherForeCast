const ForeCast = ({data}) => {
  const dailyForeCasts = data.list.filter(reading =>
    reading.dt_txt.includes('12:00:00'),
  )
  return (
    <div>
      <h2>5-Day ForeCast</h2>
      <div>
        {dailyForeCasts.map((day) => (
          <div key={day.dt}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <p>High: {day.main.temp_max}</p>
            <p>Low: {day.main.temp_min}</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForeCast
