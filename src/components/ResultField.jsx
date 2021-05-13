import React, {useContext} from 'react'

import {CalcContext} from "./CalcContext"

const ResultField = () => {
    const {bValue, showResult} = useContext(CalcContext)
    return (
        <div>
            <p>{bValue}</p>
        </div>
    )
}

export default ResultField
