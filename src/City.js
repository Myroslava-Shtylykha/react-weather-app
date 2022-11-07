import React from "react";
import "./styles.css";

export default function City() {
  return (
    <div className="current">
      <div className="current_data">
        <div className="current_city">
          <h1>Lisbon</h1>
        </div>
        <div className="degrees_now">29</div>
        <div className="degree_icon">°C</div>

        <p className="day_time">Sunday 21:02</p>
        <div className="description"></div>
      </div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="Clouds"
        id="icon"
      />
    </div>
  );
}
