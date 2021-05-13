import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [minValueRem, setMinValueRem] = useState();
  const [valueDifference, setValueDifference] = useState();
  const [bValue, setBValue] = useState();
  const [mValuevw, setMValuevw] = useState();
  const [minWidth, setMinWidth] = useState()
  const [maxWidth, setMaxWidth] = useState()

  const [showResult, setShowResult] = useState(false)

  const calculateLock = ({minSize, minWidth, maxSize, maxWidth}) => {
    const minValueRem = minSize / 16
    const mValue = (maxSize - minSize) / (maxWidth - minWidth)
    const valueDifference = maxSize - minSize;
    const bValue = Math.round((0 - mValue * minWidth + Number.EPSILON) * 1000) / 1000;
    const mValuevw = Math.round((mValue * 100 + Number.EPSILON) * 1000) / 1000;

    setMinValueRem(minValueRem)
    setValueDifference(valueDifference)
    setBValue(bValue)
    setMValuevw(mValuevw)
    setMinWidth(minWidth)
    setMaxWidth(maxWidth)
  }

  const allInfo = {
    calculateLock,
    minValueRem,
    valueDifference, 
    bValue,
    mValuevw,
    showResult,
    setShowResult,
    minWidth,
    maxWidth
  }
 
  return (
    <CalcContext.Provider value={allInfo} >
      {children}
    </CalcContext.Provider>
  );
}; 
