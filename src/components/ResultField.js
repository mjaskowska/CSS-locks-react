import React from 'react'
import './ResultField.css'

const ResultField = (props) => {
    return (
        <>
    {/* //     <div>
    // <p>font-size: ${fontMinRem}rem;</p>
    // <p>(min-width: ${minWidth}px) font-size: calc(${fontMinRem}rem + ${mFontvw}vw + ${bFont}px)</p>
    // <p>(min-width: ${maxWidth}px) font-size: calc(${fontMinRem}rem + ${fontDiffPx}px)</p>
    //   </div> */}

    <h4>Paste into your project: </h4>
    <div className = "result-container">
        <p> first line</p>
        <p> first line</p>
        <p> first line</p>

    </div>
        </>
    )
}

export default ResultField