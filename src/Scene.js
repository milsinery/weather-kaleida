import React from "react";
import "./Scene.css";

const Scene = ({ data }) => {
  const { temp_c, wx_code, winddir_deg, windspd_ms } = data;
  const arr = [...new Array(225)].map(() => ({temp_c, wx_code, winddir_deg, windspd_ms}));

  // const changer = (num) => {
  //   arr[num];
  // }

  console.log(arr);

  return (
    <div className="scene effect-scene-in">
      {arr.map((item, key) => (
        <div key={key} className={key % 2 === 0 ? "scene__cell effect-max-min-ok" : "scene__cell effect-min-max-ok" } >
          <div
            style={{ backgroundColor: `hsl(${temp_c * Math.random() * Math.floor(10)}, 80%, 50%)` }}
            className="scene__item"
          ></div>
        </div>
      ))}
    </div>
  );
};

const Cell = (props) => {
  return (
    <div className="scene__cell">
      <div className="scene__item"></div>
    </div>
  );
};

export default Scene;
