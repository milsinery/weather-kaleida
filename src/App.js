import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url =
    "http://api.weatherunlocked.com/api/current/59.57,30.19?app_id=d536a447&app_key=77e3b5ed9de2fd82880ec3f20873273d";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = (url) => {
    if(loading) {
      fetch(url)
      .then((response) => response.json())
      .then((content) => {
        setData(content);
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
    }
  };

  useEffect(() => {
    getData(url);
  });

  return <div>Coming Soon</div>;
}

export default App;


// cloudtotal_pct: 100

// temp_c: 9 — оттенок ячеек

// winddir_deg: 270 - направление анимации ветра

// windspd_ms: 9.72 — сила анимации ветра

// wx_code — модификатор ячейки

// 0	Sunny skies/Clear skies
// 1	Partly cloudy skies
// 2	Cloudy skies
// 3	Overcast skies
// 10	Mist
// 21	Patchy rain possible
// 22	Patchy snow possible
// 23	Patchy sleet possible
// 24	Patchy freezing drizzle possible
// 29	Thundery outbreaks possible
// 38	Blowing snow
// 39	Blizzard
// 45	Fog
// 49	Freezing fog
// 50	Patchy light drizzle
// 51	Light drizzle
// 56	Freezing drizzle
// 57	Heavy freezing drizzle
// 60	Patchy light rain
// 61	Light rain
// 62	Moderate rain at times
// 63	Moderate rain
// 64	Heavy rain at times
// 65	Heavy rain
// 66	Light freezing rain
// 67	Moderate or heavy freezing rain
// 68	Light sleet
// 69	Moderate or heavy sleet
// 70	Patchy light snow
// 71	Light snow
// 72	Patchy moderate snow
// 73	Moderate snow
// 74	Patchy heavy snow
// 75	Heavy snow
// 79	Ice pellets
// 80	Light rain shower
// 81	Moderate or heavy rain shower
// 82	Torrential rain shower
// 83	Light sleet showers
// 84	Moderate or heavy sleet showers
// 85	Light snow showers
// 86	Moderate or heavy snow showers
// 87	Light showers of ice pellets
// 88	Moderate or heavy showers of ice pellets
// 91	Patchy light rain with thunder
// 92	Moderate or heavy rain with thunder
// 93	Patchy light snow with thunder
// 94	Moderate or heavy snow with thunder