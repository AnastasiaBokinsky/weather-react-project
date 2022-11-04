import React from "react";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Description() {
  return (
    <Row>
      <Col className=" weather-temperature">
        <div>
          <img
            src="http://openweathermap.org/img/wn/02n.png"
            alt="Partly cloudy"
            id="icon"
          />
          <strong id="temperature">9</strong>
          <span class="units">°C</span>
        </div>
      </Col>
      <Col className=" weather-temperature">
        <ul>
          <li>
            Humidity: <span id="humidity">32</span>%
          </li>
          <li>
            Wind: <span id="wind">23</span> m/h
          </li>
        </ul>
      </Col>
    </Row>
  );
}
