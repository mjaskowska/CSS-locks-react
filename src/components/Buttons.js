import React, {useContext} from "react";
import { CalcContext } from "./CalcContext";

const Buttons = () => {

  const {minValue, maxValue, minWidth, maxWidth, setMinValue, setMinWidth, setMaxValue, setMaxWidth, calculateLock} = useContext(CalcContext)
 

  const resetLock = (e) => {
    e.preventDefault();
    setMinValue("");
    setMaxValue("");
    setMinWidth("");
    setMaxWidth("");
  };

  const generateLock = (e) => {
    e.preventDefault();
    calculateLock(minValue, minWidth, maxValue, maxWidth)
  };

  return (
    <div className="button-container">
      <button onClick={generateLock}>Calculate</button>
      <button onClick={resetLock}>Reset</button>
    </div>
  );
};

export default Buttons;
