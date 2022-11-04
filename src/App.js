import logo from "./logo.svg";
import "./App.css";
import Description from "./Description";
import Forecast from "./Forecast";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function App() {
  return (
    <Container>
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Form id="search-form" fluid="mb-3">
            <Form.Group className="mb-9" controlId="formBasicSearch" fluid="mb">
              <Row>
                <Col>
                  <Form.Control
                    type="search"
                    placeholder="Type a city"
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </Col>
                <Button variant="primary" type="submit" id="submit-button">
                  {" "}
                  Search
                </Button>
              </Row>
            </Form.Group>
          </Form>
          <Header />
          <Description />
          <div className="weather-table">
            <Row className="d-flex justify-content-around">
              <Forecast
                day="Fri"
                condition="http://openweathermap.org/img/wn/10d@2x.png"
                dtemp="18"
                ntemp="10"
              />
              <Forecast
                day="Sat"
                condition="http://openweathermap.org/img/wn/03d.png"
                dtemp="16"
                ntemp="9"
              />
              <Forecast
                day="Sun"
                condition="http://openweathermap.org/img/wn/10d.png"
                dtemp="12"
                ntemp="7"
              />
              <Forecast
                day="Mon"
                condition="http://openweathermap.org/img/wn/11d.png"
                dtemp="15"
                ntemp="5"
              />
              <Forecast
                day="Tue"
                condition="http://openweathermap.org/img/wn/01d.png"
                dtemp="14"
                ntemp="3"
              />
            </Row>
          </div>
        </div>
        <small>
          <a
            class="source-link"
            href="https://github.com/AnastasiaBokinsky/weather-react-project.git"
            ref="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>
          <span> by Anastasiia Boiko</span>
        </small>
      </div>
    </Container>
  );
}
