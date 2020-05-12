import React from "react";
import "./Scene.css"

const Scene = ({data}) => {
    const {
        temp_c,
        wx_code,
        winddir_deg,
        windspd_ms,
    } = data;

    const createScene = (count, temp, windDir, windPower) => {
        const result = [];

        for(let i = count * count; i > 0; i--) {
            result.push({temp, windDir, windPower});
        }

        return result;
    }

    const scene = createScene(15, temp_c, winddir_deg, windspd_ms);
    console.log(scene);

    return (
        <div className="scene scene_in">
            {scene.map((item, key) => <div key={key} className="scene__cell"><div style={{backgroundColor: `hsl(${item.temp - 100}, 80%, 50%)`}} className="scene__item"></div></div>)}
        </div>
    )
}

const Cell = props => {
    return (
        <div className="scene__cell">
            <div className="scene__item"></div>
        </div>
    )
}

export default Scene;