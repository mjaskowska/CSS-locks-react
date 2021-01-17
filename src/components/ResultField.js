import React, {useContext, useRef, useEffect} from 'react'
import { CalcContext } from "./CalcContext";
import gsap from 'gsap'
import './ResultField.css'

const ResultField = () => {
    
    const { showResult} = useContext(CalcContext)
    const { minWidth, maxWidth, minValueRem, valueDifference, bValue, mValuevw} = useContext(CalcContext)

    const resultStyle = {
        display: showResult ? "inherit" : "none"
    }

    const resultContainer = useRef(null)
    

    useEffect(()=> {
        const resultCode = resultContainer.current.children
        

        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})


        tl.fromTo(resultCode, {autoAlpha: 0.2, scale: 0.95 }, {duration: 1, autoAlpha: 1, scale: 1, transformOrigin: '0% 50%'})
       

    })

    
    return (
        <>
        <h4>Paste into your project: </h4>
        <div className = "result-container">
            <div style={resultStyle} ref={resultContainer}>
                <p>font-size: {minValueRem}rem;</p> 
                <p>@media (min-width: {minWidth}px) font-size: calc({minValueRem}rem + {mValuevw}vw + {bValue}px);</p>
                <p>@media (min-width: {maxWidth}px) font-size: calc({minValueRem}rem + {valueDifference}px);</p>

            </div>
        </div>
        </>
       
    
    )
}

export default ResultField
