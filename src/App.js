import React from "react";

import Calculator from "./components/Calculator.jsx"
import { CalcProvider } from "./components/CalcContext";

function App() {
  return (
    <CalcProvider>
      <Calculator />    
    </CalcProvider>
  );
}

export default App;


  // const wrapper = useRef(null);
  // useEffect(()=> {
  //   const sections = wrapper.current.children
  //   const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})
  //   tl.fromTo([sections], {autoAlpha: 0, scale: 0.97 }, {duration: 1, autoAlpha: 1, scale: 1})
  // })