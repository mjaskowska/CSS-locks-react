import React, { useContext } from "react";

import { CalcContext } from "./CalcContext";

const Inputs = () => {
  const {
    minValue,
    setMinValue,
    minWidth,
    setMinWidth,
    maxValue,
    setMaxValue,
    maxWidth,
    setMaxWidth,
  } = useContext(CalcContext);

  const updateMinValue = (e) => {
    setMinValue(e.target.value);
  };
  const updateMinWidth = (e) => {
    setMinWidth(e.target.value);
  };
  const updateMaxValue = (e) => {
    setMaxValue(e.target.value);
  };
  const updateMaxWidth = (e) => {
    setMaxWidth(e.target.value);
  };

  return (
    <div className="container">
      <h3 className="breakpoint-title">Lower breakpoint</h3>
      <div className="input-container">
        <label>Enter font size (px)</label>
        <input
          placeholder="value(px)"
          type="text"
          value={minValue}
          onChange={updateMinValue}
          required
        ></input>
        <label>Enter breakpoint width (px)</label>
        <input
          placeholder="at width(px)"
          type="text"
          value={minWidth}
          onChange={updateMinWidth}
          required
        ></input>
      </div>
      <h3 className="breakpoint-title">Higher breakpoint</h3>
      <div className="input-container">
        <label>Enter font size (px)</label>
        <input
          placeholder="value(px)"
          type="text"
          value={maxValue}
          onChange={updateMaxValue}
          required
        ></input>
        <label>Enter breakpoint width (px)</label>
        <input
          placeholder="at width(px)"
          type="text"
          value={maxWidth}
          onChange={updateMaxWidth}
          required
        ></input>
      </div>
    </div>
  );
};

export default Inputs;
