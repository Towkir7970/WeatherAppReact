import { useContext } from "react";
import CloudImage from "../../assets/icons/cloud.svg";
import HumidityImage from "../../assets/icons/humidity.svg";
import MaxTempImage from "../../assets/icons/temp-max.svg";
import MinTempImage from "../../assets/icons/temp-min.svg";
import WindImage from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";

export default function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);

  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate,
  } = weatherData;

  return (
    <>
      <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">
          The climate is <u>{climate}</u>
        </p>
        <ul className="space-y-6 lg:space-y-6">
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
              <p>{maxTemperature}°</p>
              <img src={MaxTempImage} alt="temp-max" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-4">
              <p>{minTemperature}°</p>
              <img src={MinTempImage} alt="temp-min" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Humadity</span>
            <div className="inline-flex space-x-4">
              <p>{humidity}%</p>
              <img src={HumidityImage} alt="humidity" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
              <p>{cloudPercentage}%</p>
              <img src={CloudImage} alt="cloudy" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>{wind}km/h</p>
              <img src={WindImage} alt="wind" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}