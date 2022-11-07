import React from "react";
import "./styles.css";

export default function Link() {
  return (
    <p className="github_Link">
      This project was coded by Myroslava Shtylykha and is
      <a href="https://github.com/Myroslava-Shtylykha/react-weather-app">
        {" "}
        open-source code on GitHub
      </a>
    </p>
  );
}
