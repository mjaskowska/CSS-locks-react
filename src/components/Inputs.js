import React, { useContext, useState} from 'react'
import {CalcContext} from './CalcContext'
import Buttons from './Buttons'

const Inputs = (props) => {
    const [minValue, setMinValue] = useState(0)
    const getInfo = useContext(CalcContext)
     
    const passInfo = e => {
       e.preventDefault();

       const passedInfo = {
        minValue
       }
       console.log(passedInfo, 'from passInfo in inputs')
       getInfo(passedInfo)
   }

    return (
        
        <div className="container">
           <h3 className="breakpoint-title">Lower breakpoint</h3>
           <div className="input-container">
                <label htmlFor="minValue">value (px)</label>
                <input type="text" value={minValue} onChange={(e)=>setMinValue(e.target.value)} placeholder="value (px)" ></input>
                {/* <label htmlFor="minWidth">at width (px)</label>
                <input type="text" placeholder="at width (px)"></input>
           </div>
           <h3 className="breakpoint-title">Higher breakpoint</h3>
           <div className="input-container">
                <label htmlFor="maxValue">value (px)</label>
                <input type="text"  placeholder="value (px)"></input>
                <label htmlFor="maxWidth">at width (px)</label>
                <input type="text"  placeholder="at width (px)"></input> */}
                
           </div>
           <Buttons passInfo={passInfo} />
        </div>
        
    )
}

export default Inputs
