import React from "react";
import './ChartBar.css'

export default function ChartBar (props) {
    let barfillHeight = '0%';
    console.log(barfillHeight, props.maxValue);
    if(props.maxValue > 0){
        barfillHeight = Math.round((props.maxValue / props.value) * 100) + '%';
        // console.log(barfillHeight);
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barfillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}
