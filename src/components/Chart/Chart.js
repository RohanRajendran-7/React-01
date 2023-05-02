import React from "react";
import './Chart.css'
import ChartBar from './ChartBar'


const Chart = (props) => {
    const datapointValues = props.dataPoints.map(datapoint => datapoint.value);
    // console.log("inside Chart", datapointValues, props.dataPoints)
    const datapointMaximum = Math.max(...datapointValues);
    return(
        <div className='chart'>
            {props.dataPoints.map(datapoint => ( 
            <ChartBar
               key={datapoint.label}
               value = {datapoint.value}
               maxValue = {datapointMaximum}
               label = {datapoint.label}
            />))}
        </div>
    );
};

export default Chart;