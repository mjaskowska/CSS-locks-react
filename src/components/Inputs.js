import React, { useState, } from 'react'
import './inputs.css';
import ResultField from './ResultField'

const Inputs = (props) => {
    const [minValue, setMinValue] = useState (0);
    const [maxValue, setMaxValue] = useState(0);
    const [minWidth, setMinWidth] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);

    const updateMinValue = e => {
        setMinValue(e.target.value)
    }
    const updateMaxValue = e => {
        setMaxValue(e.target.value)
    }
    const updateMinWidth = e => {
        setMinWidth(e.target.value)
    }
    const updateMaxWidth = e => {
        setMaxWidth(e.target.value)
    }

    const countLock = e => {
        e.preventDefault()
        console.log(minValue, maxValue, minWidth, maxWidth)
    }
    const resetLock = e => {
        e.preventDefault();
        console.log('reset Locks')
    }

    return (
        <>
        <div className="container">
           <h3 className="breakpoint-title">Lower breakpoint</h3>
           <div className="input-container">
                <input type="text" onChange={updateMinValue} placeholder="value (px)"></input>
                <input type="text" onChange={updateMinWidth}placeholder="at width (px)"></input>
           </div>
           <h3 className="breakpoint-title">Higher breakpoint</h3>
           <div className="input-container">
                <input type="text" onChange={updateMaxValue} placeholder="value (px)"></input>
                <input type="text"  onChange={updateMaxWidth} placeholder="at width (px)"></input>
           </div>
           <div className="button-container">
                <button onClick={countLock}>Calculate</button>
                <button onClick={resetLock}>Reset</button>
            </div>
        
        </div>
        <ResultField  />
        </>
        
    )
}

export default Inputs
