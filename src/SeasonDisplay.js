import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};
const SeasonConfig = {
  summer: {
    icon: "sun",
    text: "Let's hit the beach"
  },
  winter: {
    icon: "snowflake",
    text: "Burr, it's chilly"
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const Icon = season === "summer" ? "sun" : "snowflake";
  const { icon, text } = SeasonConfig[season];
  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${icon} icon massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${icon} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
