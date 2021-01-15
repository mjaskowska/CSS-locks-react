import React, { useContext } from "react";
import { CalcContext } from "./CalcContext";
import Buttons from "./Buttons";

const Inputs = (props) => {

 const {minValue, setMinValue, minWidth, setMinWidth, maxValue, setMaxValue, maxWidth, setMaxWidth} = useContext(CalcContext)
//  console.log(minValue, minWidth, maxValue, maxWidth, 'from inputs under all info object')
 
  const updateMinValue = (e) => {
    setMinValue(e.target.value)
  }
  const updateMinWidth = (e) => {
    setMinWidth(e.target.value)
  }
  const updateMaxValue = (e) => {
    setMaxValue(e.target.value)
  }
  const updateMaxWidth = (e) => {
    setMaxWidth(e.target.value)
  }


  return (
    <div className="container">
      <h3 className="breakpoint-title">Lower breakpoint</h3>
      <div className="input-container">
        <label>Enter font size (px)</label>
        <input placeholder="value(px)" type="text" value={minValue} onChange={updateMinValue}></input>
        <label>Enter breakpoint width (px)</label>
        <input placeholder="at width(px)" type="text" value={minWidth} onChange={updateMinWidth}></input>
      </div>
      <h3 className="breakpoint-title">Higher breakpoint</h3>
      <div className="input-container">
        <label>Enter font size (px)</label>
        <input placeholder="value(px)" type="text" value={maxValue} onChange={updateMaxValue}></input>
        <label>Enter breakpoint width (px)</label>
        <input placeholder="at width(px)" type="text" value={maxWidth} onChange={updateMaxWidth}></input>
      </div>
      <Buttons />
    </div>
  );
};

export default Inputs;
