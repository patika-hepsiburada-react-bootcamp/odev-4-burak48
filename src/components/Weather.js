import React, { useState } from "react";

import { useLazyQuery } from "@apollo/client";
import { WEATHER_QUERY } from "./queries";

function Weather() {
  const [city, setCity] = useState("");
  const [getWeather, { loading, error, data }] = useLazyQuery(WEATHER_QUERY, {
    variables: { name: city },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    console.log("DATA :", data);
  }

  const handleSubmit = (e) => {
    getWeather();
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city"
              autoFocus
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <button>SUBMIT</button>
          </form>
        </div>
      </section>
      <section className="ajax-section">
        <div className="container">
          {data && (
            <ul className="cities">
              <h2 className="city-name">
                <span>{data.getCityByName.name}</span>
                <sup>{data.getCityByName.country}</sup>
              </h2>
              <div className="city-temp">
                {Math.round(
                  data.getCityByName.weather.temperature.actual - 273
                )}
                <sup>°C</sup>
              </div>
              <figure>
                <img
                  className="city-icon"
                  src={`https://openweathermap.org/img/wn/${data.getCityByName.weather.summary.icon}@2x.png`}
                  alt={data.getCityByName.weather.summary.description}
                />
                <figcaption>
                  {data.getCityByName.weather.summary.description}
                </figcaption>
              </figure>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default Weather;
