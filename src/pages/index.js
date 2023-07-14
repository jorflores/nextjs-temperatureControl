import React, { useState } from "react";

export default function Home() {
  let temperatureColor = "cold";
  let temperatureValue = 10;

  return (
    <div className="app_container">
      <div className="temperature_display_container">
        <div className={`temperature_display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
