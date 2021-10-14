import React from "react";

import { useQuery } from "@apollo/client";
import { WEATHER_QUERY } from "./queries";

function Weather() {
  const { loading, error, data } = useQuery(WEATHER_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("DATA :", data);
  return (
    <div>
      <h1>Weathers</h1>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" autoFocus />
            <button type="submit">SUBMIT</button>
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
