import React, {useContext} from 'react'
import { CalcContext } from "./CalcContext";
import './ResultField.css'

const ResultField = (props) => {
    
    const {minWidth, maxWidth, minValueRem, valueDifference, bValue, mValuevw } = useContext(CalcContext)

    
    return (
     <>
        <h4>Paste into your project: </h4>
        <div className = "result-container">
            <p>font-size: {minValueRem}rem;</p>
            <p>@media (min-width: {minWidth}px) font-size: calc({minValueRem}rem + {mValuevw}vw + {bValue}px);</p>
            <p>@media (min-width: {maxWidth}px) font-size: calc({minValueRem}rem + {valueDifference}px);</p>

        </div>
    </>
    )
}

export default ResultField
