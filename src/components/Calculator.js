import React from "react";
import { CalcProvider } from "./CalcContext";

import Inputs from "./Inputs";
import ResultField from "./ResultField";
import Buttons from "./Buttons";

import "./styles/Calculator.css";

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
