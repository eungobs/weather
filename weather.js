import React from "react";
export default function Weather(props) {
  if (props.show) {
    return (
      <div>
        <ul>
          {Object.entries(props.weatherInfo).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
