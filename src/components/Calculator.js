import React from "react";
import "./Calculator.css";
import Inputs from "./Inputs";
import ResultField from "./ResultField";
import { CalcProvider } from "./CalcContext";
import Buttons from "./Buttons";

const Calculator = () => {

  return (
    <CalcProvider>
      <Inputs/>
      <Buttons />
      <ResultField />

    </CalcProvider>
  );
};

export default Calculator;
