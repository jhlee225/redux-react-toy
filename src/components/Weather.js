import React, { useEffect, useState } from "react";
function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=18869f4f01a37ac87f4c23f6fc1c6a21"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.list[0]);
        setWeather(result.list[0].weather[0].main);
      });
  });
  return (
    <div>
      <span>날씨 : {weather}</span>
    </div>
  );
}

export default Weather;
