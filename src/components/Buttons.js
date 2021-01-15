import React, {useContext} from "react";
import { CalcContext } from "./CalcContext";

const Buttons = () => {

  const {setMinValue, setMinWidth, setMaxValue, setMaxWidth} = useContext(CalcContext)
 

  const resetLock = (e) => {
    e.preventDefault();
    console.log("resets Locks");
    setMinValue("");
    setMaxValue("");
    setMinWidth("");
    setMaxWidth("");
  };

  const generateLock = (e) => {
    e.preventDefault();
    console.log('lock generated from context')
    
  };

  return (
    <div className="button-container">
      <button onClick={generateLock}>Calculate</button>
      <button onClick={resetLock}>Reset</button>
    </div>
  );
};

export default Buttons;
