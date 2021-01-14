import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [allInfo, setAllInfo] = useState(
    {minValue: ""},
    {maxValue: ""},
    {minWidth: ""},
    {maxWidth: ""},
    {minValueRem: ""},
    {mValue: ""},
    {ValueDifference: ""},
    {bValue: ""},
    {mValuevw: ""},
  ); 


  const calculateLock = (passedInfo) => {
    const { minValue, maxValue, minWidth, maxWidth } = passedInfo;

    const minValueRem = minValue / 16;

    const mValue = (maxValue - minValue) / (maxWidth - minWidth);
    const ValueDifference = maxValue - minValue;

    const bValue =
      Math.round((0 - mValue * minWidth + Number.EPSILON) * 1000) / 1000;
    const mValuevw = Math.round((mValue * 100 + Number.EPSILON) * 1000) / 1000;

    const calculationOutput = {
      minValue,
      maxValue,
      minWidth,
      maxWidth,
      minValueRem,
      mValue,
      ValueDifference,
      bValue,
      mValuevw,
    };

    console.log(calculationOutput, 'from calculcatelock')
    return calculationOutput;
  };
  


  return (
    <CalcContext.Provider value={[allInfo, setAllInfo]}>{children}</CalcContext.Provider>
  );
};

