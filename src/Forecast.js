import React from "react";
import "./App.css";
import "./App";

export default function Forecast(props) {
  return (
    <div className="weather-forecast col-2" id="forecast">
      <div className="weather-forecast-date">{props.day}</div>
      <img src={props.condition} alt="" width="42" />
      <span className="weather-forecast-temperatures">
        <span className="weather-forecast-temperatures-max">
          {props.dtemp}°
          <span className="weather-forecast-temperatures-min">
            {props.ntemp}°
          </span>
        </span>
      </span>
    </div>
  );
}
