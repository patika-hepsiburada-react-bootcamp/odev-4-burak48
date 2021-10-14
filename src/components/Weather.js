import React from "react";

import { useLazyQuery } from "@apollo/client";
import { WEATHER_QUERY } from "./queries";

function Weather() {
  const [getWeather, { loading, error, data }] = useLazyQuery(WEATHER_QUERY, {
    variables: { name: "Istanbul" },
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

  return (
    <div>
      <h1>Weathers</h1>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" autoFocus />
            <button onClick={() => getWeather()}>SUBMIT</button>
          </form>
        </div>
      </section>
      <section className="ajax-section">
        <div className="container">
          <ul className="cities"></ul>
        </div>
      </section>
    </div>
  );
}

export default Weather;
