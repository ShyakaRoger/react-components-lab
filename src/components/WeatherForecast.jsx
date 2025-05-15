import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

function WeatherForecast({ forecast }) {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <WeatherIcon src={forecast.img} alt={forecast.imgAlt} />
      <WeatherData conditions={forecast.conditions} time={forecast.time} />
    </div>
  );
}

export default WeatherForecast;
