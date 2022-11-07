import React from "react";
import "./styles.css";

export default function Card() {
  return (
    <div>
      <div className="card_today">
        <div className="row">
          <div className="col-4">
            <div className="card mb-3 bg-transparent border-primary width">
              <div className="card-body">
                <h5 className="card-title">Wind</h5>
                <p className="card-text">
                  <span id="wind_card">2</span> m/s
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card mb-3 bg-transparent border-primary width">
              <div className="card-body">
                <h5 className="card-title">Pressure</h5>
                <p className="card-text">
                  <span id="pressure_card">1018</span> hPa
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card mb-3 bg-transparent border-primary width">
              <div className="card-body">
                <h5 className="card-title">Humidity</h5>
                <p className="card-text">
                  <span id="humidity_card">18</span> %
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
