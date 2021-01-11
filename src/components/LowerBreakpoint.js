import React from 'react'

const LowerBreakpoint = () => {
    return (
        <div className="container">
           <h3 className="breakpoint-title">Lower breakpoint</h3>
           <div className="input-container">
            <input type="text" placeholder="value (px)"></input>
            <input type="text" placeholder="at width (px)"></input>
           </div>
           
        </div>
    )
}

export default LowerBreakpoint
