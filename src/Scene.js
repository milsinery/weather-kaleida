import React from "react";
import "./Scene.css"

const Scene = props => {
    return (
        <div className="scene">
            <Cell></Cell>
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