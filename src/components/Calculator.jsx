import React, {useState} from 'react'

import {Formik, Form} from "formik"
import {validationSchema} from "./validation"

import MoreInfo from "./MoreInfo"

const Calculator = () => {
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    return (
        <Formik
      {...{
        initialValues: {maxFont: 0},
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: null,
        onSubmit: (values) => {
          console.log(values);         
        },
        onReset: (values)=>console.log(values),
      }}
    >
      {({
        values,
        errors,
        isValid,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (  
        <section className="calculator-container">
            <h1 className="main-title">CSS Locks Generator</h1>
            <button {...{
                type: "button",
                className: "more-info-btn",
                onClick: ()=>setShowMoreInfo(!showMoreInfo)
            }}>
                How does it work?
            </button>
            {showMoreInfo && <MoreInfo />}
            <Form className="form-container">              
                <div className="form-control">
                    <label>Max font</label>
                    <input {...{
                        id: "maxFont",
                        name: "maxFont",
                        min: 0,
                        type: "number",
                        onChange: handleChange,
                        value: values["maxFont"]
                        }}></input>
                </div>
                <button {...{type: "submit"}}>Calculate</button>
                <button {...{type: "reset"}}>Reset</button>

            </Form>

        </section>
       )}
        
        </Formik>
    )
    
}

export default Calculator
