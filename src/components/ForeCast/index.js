const ForeCast = ({ data }) => {
    if (!data || !data.list) {
      return <p>Forecast data is unavailable</p>;
    }
  
    const dailyForecasts = data.list.filter((reading) =>
      reading.dt_txt.includes('12:00:00')
    );
  
    return (
      <div>
        <h2>5-Day Forecast</h2>
        <div className="forecast-container">
          {dailyForecasts.map((day) => (
            <div key={day.dt} className="forecast-day">
              <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
              })}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <p>High: {day.main.temp_max}°C</p>
              <p>Low: {day.main.temp_min}°C</p>
              <p>{day.weather[0]?.description || 'N/A'}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ForeCast;
  
