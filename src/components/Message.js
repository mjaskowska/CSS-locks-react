import React from 'react'
import './description.css';

const Message = () => {
    return (
        
        <div className="message-field">
            <p>Have you always wanted to implement responsive font sizes in your projects but never knew how to calculate CSS locks?</p>
            
            <p>Fear no more! This app will handle all that complicated math for you! <i className="fas fa-smile-wink"></i> </p>
            
            <p>Simply specify values of minimum and maximum font-size property that you want on your two breakpoints (media queries) and paste the code below straight into your SASS/CSS file. </p>
            <p className="bold">Easy!</p>
        </div>
        
    )
}

export default Message
