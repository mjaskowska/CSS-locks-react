import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {

  

  const [minValue, setMinValue] = useState("")
  const [minWidth, setMinWidth] = useState("")
  const [maxValue, setMaxValue] = useState("")
  const [maxWidth, setMaxWidth] = useState("")


  const allInfo = {
    minValue,
    setMinValue,
    minWidth,
    setMinWidth,
    maxValue,
    setMaxValue,
    maxWidth,
    setMaxWidth,
  }
 
  console.log(minValue, minWidth, maxValue, maxWidth, 'from context')

  return (
    <CalcContext.Provider value={allInfo} >
      {children}
    </CalcContext.Provider>
  );
}; 
