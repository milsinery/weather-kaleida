import React, { useState, useEffect } from 'react';
import './App.css';
import Scene from './Scene';
import Informer from './Informer';

function App() {
  const url =
    'http://api.weatherunlocked.com/api/current/59.57,30.19?app_id=d536a447&app_key=77e3b5ed9de2fd82880ec3f20873273d';

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className="wrapper">
      <Scene data={isLoaded && items}></Scene>
      <Informer data={isLoaded && items}></Informer>
      {/* <div className="copyright">
        <small className="copyright">Designed by <a href="mailto:milsinery@icloud.com" target="_blank" rel="noreferrer noopener">Milsinery</a></small>
        <small className="copyright">Powered by <a href="https://developer.weatherunlocked.com" target="_blank" rel="noreferrer noopener">Weather Unlocked</a></small>
      </div> */}
    </div>
  );
}

export default App;
