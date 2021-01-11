import React from 'react'
import './inputs.css'

const HigherBreakpoint = () => {
    return (
        <div className="container">
           <h3 className="breakpoint-title">Higher breakpoint</h3>
           <div className="input-container">
            <input type="text" placeholder="value (px)"></input>
            <input type="text" placeholder="at width (px)"></input>
           </div>
           
        </div>
    )
}

export default HigherBreakpoint
