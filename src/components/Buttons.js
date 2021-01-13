import React from "react";

const Buttons = ({
  passInfo,
  setMinValue,
  setMaxValue,
  setMinWidth,
  setMaxWidth,
}) => {
  const resetLock = (e) => {
    e.preventDefault();
    console.log("reset Locks");
    setMinValue('');
    setMaxValue('');
    setMinWidth('');
    setMaxWidth('');
  };
  return (
    <div className="button-container">
      <button onClick={passInfo}>Calculate</button>
      <button onClick={resetLock}>Reset</button>
    </div>
  );
};

export default Buttons;
