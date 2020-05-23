import React from "react";
import "./Scene.css";

const Scene = ({ data }) => {
  const {
    wx_code: code,
    temp_c: temp,
    winddir_compass: windDirection,
    windspd_ms: windSpeed,
  } = data;

  const arr = [...new Array(225)].map(() => ({
    temp,
    code,
    windDirection,
    windSpeed,
  }));

  console.log(arr);

  return <Cell data={arr}></Cell>;
};

const Cell = ({ data }) => {

  return (
    <div className="scene effect-scene-in">
      {data.map((item, key) => (
        <div
          key={key}
          className={
            key % Math.floor(Math.random() * 10) === 0
              ? "scene__cell effect-max-min-ok"
              : "scene__cell effect-min-max-ok"
          }
        >
          <div
            style={{
              backgroundColor: `hsl(${item.temp * (Math.random() * 2)}, 80%, 50%)`,
            }}
            className={
              key % Math.floor(Math.random() * 10) === 0
                ? "scene__item effect-wind"
                : "scene__item"
            }
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Scene;
