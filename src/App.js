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
      .then((data) => {
        setData(data);
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
