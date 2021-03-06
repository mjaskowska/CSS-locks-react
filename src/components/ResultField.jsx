import React, { useContext } from "react";

import { CalcContext } from "./CalcContext";

const ResultField = () => {
  const { minWidth, maxWidth, minValueRem, valueDifference, bValue, mValuevw } =
    useContext(CalcContext);

  return (
    <section className="result-field">
      <h3 className="mid-title">Copy and paste into your project:</h3>
      <div className="code-output">
        <code>
          element {"{"} font-size: {minValueRem}rem; {"}"}
        </code>
        <code>
          @media (min-width: {minWidth}px){"{"} font-size: calc({minValueRem}rem
          + {mValuevw}vw + {bValue}px); {"}"}
        </code>
        <code>
          @media (min-width: {maxWidth}px){"{"} font-size: calc({minValueRem}rem
          +{valueDifference}px); {"}"}
        </code>
      </div>
    </section>
  );
};

export default ResultField;
