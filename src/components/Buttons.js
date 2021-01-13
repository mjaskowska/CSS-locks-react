import React from 'react'

const Buttons = ({passInfo}) => {
    
    const resetLock = e => {
        e.preventDefault();
        console.log('reset Locks')
    }
    return (
       
    <div className="button-container">
        <button onClick={passInfo}>Calculate</button>
        <button onClick={resetLock}>Reset</button>
    </div>
       
    )
}

export default Buttons
