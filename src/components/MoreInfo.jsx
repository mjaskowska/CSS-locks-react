import React from "react";

const MoreInfo = ({showMoreInfo, setShowMoreInfo}) => {
  return (
      <section className="message">    
        
    <div className="message-field">
    <button onClick={()=>setShowMoreInfo(!showMoreInfo)} className="btn close-btn">X</button>
      <p>
        Have you always wanted to implement responsive font sizes in your
        projects but never knew how to calculate CSS locks?
      </p>
      <p>
        Fear no more! This app will handle all that complicated math for you!
        <i className="fas fa-smile-wink"></i>
      </p>
      <p>
        Simply specify values of minimum and maximum font-size property that you
        want to have on two breakpoints (media queries) and paste generated calc() functions
        straight into your CSS or SASS file.
      </p>
      <p><b>Easy!</b></p>
    </div>
    
    </section>
  );
};

export default MoreInfo;
