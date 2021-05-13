import React, { useState, useContext } from "react";

import { Formik, Form } from "formik";
import { validationSchema } from "./validation";

import MoreInfo from "./MoreInfo";
import { CalcContext } from "./CalcContext";
import { CONSTANTS, BUTTONS } from "./utils";
import ResultField from "./ResultField";

const Calculator = () => {
  const { calculateLock } = useContext(CalcContext);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showResult, setShowResult] = useState(true)
  return (
    <Formik
      {...{
        initialValues: { maxSize: 0, minSize: 0, maxWidth: 0, minWidth: 0 },
        validateOnChange: true,
        validateOnMount: true,
        validationSchema,
        onSubmit: (values) => {
          calculateLock(values);
          setShowResult(true);
        },
        onReset: (values) => values,
      }}
    >
      {({ values, errors, handleChange }) => (
        <section className="calculator-container">
          <h1 className="main-title">CSS Locks Generator</h1>
          <button
            {...{
              type: "button",
              className: "btn more-info-btn",
              onClick: () => setShowMoreInfo(!showMoreInfo),
            }}
          >
            How does it work?
          </button>
          {showMoreInfo && <MoreInfo />}
          <Form>
            <h3 className="mid-title">Lower breakpoint</h3>
            <section className="form-container">
              <div className="form-control">
                <label>Min font-size (px)</label>          
                <input
                  {...{
                    className: `input-field ${
                      errors[CONSTANTS.MIN_SIZE] && "invalid"
                    }`,
                    id: CONSTANTS.MIN_SIZE,
                    name: CONSTANTS.MIN_SIZE,
                    min: 1,
                    type: CONSTANTS.FIELD_TYPE_NUMBER,
                    onChange: handleChange,
                    placeholder: CONSTANTS.VALUE_PLACEHOLDER,
                    value: values[CONSTANTS.MIN_SIZE],
                  }}
                />
                {errors[CONSTANTS.MIN_SIZE] && (
                  <p className="validation-msg">{errors[CONSTANTS.MIN_SIZE]}</p>
                )}
              </div>
              <div className="form-control">
                <label>Breakpoint (px)</label>
                <input
                  {...{
                    className: `input-field ${
                      errors[CONSTANTS.MIN_WIDTH] && "invalid"
                    }`,
                    id: CONSTANTS.MIN_WIDTH,
                    name: CONSTANTS.MIN_WIDTH,
                    min: 1,
                    type: CONSTANTS.FIELD_TYPE_NUMBER,
                    onChange: handleChange,
                    placeholder: CONSTANTS.VALUE_PLACEHOLDER,
                    value: values[CONSTANTS.MIN_WIDTH],
                  }}
                />
                {errors[CONSTANTS.MIN_WIDTH] && (
                  <p className="validation-msg">{errors[CONSTANTS.MIN_WIDTH]}</p>
                )}
              </div>
            </section>
            <h3 className="mid-title">Higher breakpoint</h3>
            <section className="form-container">
              <div className="form-control">
                <label>Max font-size (px)</label>
                <input
                  {...{
                    className: `input-field ${
                      errors[CONSTANTS.MAX_SIZE] && "invalid"
                    }`,
                    id: CONSTANTS.MAX_SIZE,
                    placeholder: CONSTANTS.VALUE_PLACEHOLDER,
                    name: CONSTANTS.MAX_SIZE,
                    min: 1,
                    type: CONSTANTS.FIELD_TYPE_NUMBER,
                    onChange: handleChange,
                    value: values[CONSTANTS.MAX_SIZE],
                  }}
                />
                {errors[CONSTANTS.MAX_SIZE] && (
                  <p className="validation-msg">{errors[CONSTANTS.MAX_SIZE]}</p>
                )}
              </div>
              <div className="form-control">
                <label>Breakpoint (px)</label>
                <input
                  {...{
                    className: `input-field ${
                      errors[CONSTANTS.MAX_WIDTH] && "invalid"
                    }`,
                    id: CONSTANTS.MAX_WIDTH,
                    name: CONSTANTS.MAX_WIDTH,
                    min: 1,
                    type: CONSTANTS.FIELD_TYPE_NUMBER,
                    onChange: handleChange,
                    placeholder: CONSTANTS.VALUE_PLACEHOLDER,
                    value: values[CONSTANTS.MAX_WIDTH],
                  }}
                />
                {errors[CONSTANTS.MAX_WIDTH] && (
                  <p className="validation-msg">{errors[CONSTANTS.MAX_WIDTH]}</p>
                )}
              </div>
            </section>

            <button {...{ 
                className: "btn submit-btn",
                type: BUTTONS.SUBMIT }}>Calculate</button>
            <button {...{
                className: "btn reset-btn",
                type: BUTTONS.RESET }}>Reset</button>
          </Form>
          {showResult && <ResultField/>}
        </section>
      )}
    </Formik>
  );
};

export default Calculator;
