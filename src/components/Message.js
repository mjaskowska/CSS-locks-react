import React, {useRef, useEffect} from 'react'
import './description.css';
import gsap from 'gsap'

const Message = () => {
    const messageField = useRef(null)

    useEffect(()=> {

        const message = messageField.current.children
    
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})
    
        tl.fromTo(message, {autoAlpha: 0.2, y: '-=10'}, {duration: 1, autoAlpha: 1, y: '+=10'})
      })

    return (
        
        <div className="message-field" ref={messageField}>
            <p>Have you always wanted to implement responsive font sizes in your projects but never knew how to calculate CSS locks?</p>
            
            <p>Fear no more! This app will handle all that complicated math for you! <i className="fas fa-smile-wink"></i> </p>
            
            <p>Simply specify values of minimum and maximum font-size property that you want on your two breakpoints (media queries) and paste the code below straight into your SASS/CSS file. </p>
            <p className="bold">Easy!</p>
        </div>
        
    )
}

export default Message
