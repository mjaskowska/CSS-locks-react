import React, {useState} from 'react'
import Message from './Message'
import './description.css';



const Description = () => {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => setShowMessage(!showMessage)

    
    return (
        <div className="description-container">
            
            <button onClick={toggleMessage} className="message-btn">How does it work?</button>
            <div>{showMessage &&  <Message />}</div>
            
        </div>
    )

    
}

export default Description
