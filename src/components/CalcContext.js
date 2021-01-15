import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {

  const [minValue, setMinValue] = useState("")
  const [minWidth, setMinWidth] = useState("")
  const [maxValue, setMaxValue] = useState("")
  const [maxWidth, setMaxWidth] = useState("")

  const [minValueRem, setMinValueRem] = useState("");
  const [valueDifference, setValueDifference] = useState("");
  const [bValue, setBValue] = useState("");
  const [mValuevw, setMValuevw] = useState("");

  const calculateLock = (minValue, minWidth, maxValue, maxWidth) => {
    const minValueRem = minValue / 16
    const mValue = (maxValue - minValue) / (maxWidth - minWidth)
    const valueDifference = maxValue - minValue;
    const bValue = Math.round((0 - mValue * minWidth + Number.EPSILON) * 1000) / 1000;
    const mValuevw = Math.round((mValue * 100 + Number.EPSILON) * 1000) / 1000;

    setMinValueRem(minValueRem)
    setValueDifference(valueDifference)
    setBValue(bValue)
    setMValuevw(mValuevw)
  }
  //  console.log(minValueRem, valueDifference, bValue, mValuevw, 'from context locks vars')


  const allInfo = {
    minValue,
    setMinValue,
    minWidth,
    setMinWidth,
    maxValue,
    setMaxValue,
    maxWidth,
    setMaxWidth,
    calculateLock,
    minValueRem,
    valueDifference, 
    bValue,
    mValuevw,
  }
 
  // console.log(minValue, minWidth, maxValue, maxWidth, 'from context')

  return (
    <CalcContext.Provider value={allInfo} >
      {children}
    </CalcContext.Provider>
  );
}; 
