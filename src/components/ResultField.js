import React, {useContext} from 'react'
import { CalcContext } from "./CalcContext";

import './ResultField.css'

const ResultField = () => {
    
    const { showResult} = useContext(CalcContext)
    const { minWidth, maxWidth, minValueRem, valueDifference, bValue, mValuevw} = useContext(CalcContext)

    const resultStyle = {
        display: showResult ? "inherit" : "none"
    }
    
 console.log(showResult)
    return (
        <>
        <h4>Paste into your project: </h4>
        <div className = "result-container" >
            <div style={resultStyle}>
                <p>font-size: {minValueRem}rem;</p> 
                <p>@media (min-width: {minWidth}px) font-size: calc({minValueRem}rem + {mValuevw}vw + {bValue}px);</p>
                <p>@media (min-width: {maxWidth}px) font-size: calc({minValueRem}rem + {valueDifference}px);</p>

            </div>
        </div>
        </>
       
    
    )
}

export default ResultField
