import React, { useContext, useState } from "react";
import { CalcContext } from "./CalcContext";
import Buttons from "./Buttons";

const Inputs = (props) => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [minWidth, setMinWidth] = useState("");
  const [maxWidth, setMaxWidth] = useState("");

  const [calculateLock, setAllInfo = useContext(CalcContext);

    const updateAllInfo = e => {
      setAllInfo(prevInfo => [...prevInfo, {minValue: minValue, maxValue: maxValue, minWidth: minWidth, maxWidth: maxWidth}])
    }
  

  return (
    <div className="container">
      <h3 className="breakpoint-title">Lower breakpoint</h3>
      <div className="input-container">
        <label htmlFor="minValue">font-size (px)</label>
        <input
          type="text"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
          placeholder="value (px)"
        ></input>
        <label htmlFor="minWidth">at width (px)</label>
        <input
          type="text"
          value={minWidth}
          onChange={(e) => setMinWidth(e.target.value)}
          placeholder="at width (px)"
        ></input>
      </div>
      <h3 className="breakpoint-title">Higher breakpoint</h3>
      <div className="input-container">
        <label htmlFor="maxValue">font-size (px)</label>
        <input
          type="text"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          placeholder="value (px)"
        ></input>
        <label htmlFor="maxWidth">at width (px)</label>
        <input
          type="text"
          value={maxWidth}
          onChange={(e) => setMaxWidth(e.target.value)}
          placeholder="at width (px)"
        ></input>
      </div>
      <Buttons
        passInfo={passInfo}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setMinWidth={setMinWidth}
        setMaxWidth={setMaxWidth}
      />
    </div>
  );
};

export default Inputs;
// const passInfo = (e) => {
  //   e.preventDefault();

  //   const passedInfo = {
  //     minValue,
  //     maxValue,
  //     minWidth,
  //     maxWidth,
  //   };
  //   console.log(passedInfo, "from passInfo in inputs");
  //   calculateLock(passedInfo);
  // };