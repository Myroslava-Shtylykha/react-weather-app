import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div>
      <form id="city_search">
        <label>
          <input
            type="text"
            placeholder="Enter a city"
            autoComplete="off"
            id="city"
          />
          <input type="submit" value="Go" className="search" />
          <input type="submit" value="Current" className="searchGeo" />
        </label>
      </form>
    </div>
  );
}
