import React from "react";
import "./Calculator.css";
import Inputs from "./Inputs";
import ResultField from "./ResultField";
import { CalcProvider } from "./CalcContext";

const Calculator = (props) => {

  return (
    <CalcProvider>
      <Inputs/>
      <ResultField />
    </CalcProvider>
  );
};

export default Calculator;
