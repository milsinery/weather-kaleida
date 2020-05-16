import React from "react";
import "./Scene.css";

const Scene = ({ data }) => {
  const { temp_c, wx_code, winddir_deg, windspd_ms } = data;
  const arr = [...new Array(225)].map(() => ({temp_c, wx_code, winddir_deg, windspd_ms}));

  console.log(arr);

  return (
    <div className="scene">
      {arr.map((item, key) => (
        <div key={key} className="scene__cell effect-in">
          <div
            style={{ backgroundColor: `hsl(${item.temp_c - 100}, 80%, 50%)` }}
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
