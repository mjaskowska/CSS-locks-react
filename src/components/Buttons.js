import React from "react";

const Buttons = ({
  updateAllInfo,
  setMinValue,
  setMaxValue,
  setMinWidth,
  setMaxWidth,
}) => {
  const resetLock = (e) => {
    e.preventDefault();
    console.log("reset Locks");
    setMinValue("");
    setMaxValue("");
    setMinWidth("");
    setMaxWidth("");
  };
  return (
    <div className="button-container">
      <button onClick={updateAllInfo}>Calculate</button>
      <button onClick={resetLock}>Reset</button>
    </div>
  );
};

export default Buttons;
