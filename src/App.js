import './App.css';
import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import Description from './components/Description';
import Calculator from './components/Calculator';


function App() {

  const wrapper = useRef(null)

  useEffect(()=> {

    const sections = wrapper.current.children

    const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

    tl.fromTo([sections], {autoAlpha: 0, y: '-=20'}, {duration: 1, autoAlpha: 1, y: '0'})
  })

  return (
    <div className="App" ref={wrapper}>
      <h1 className="title"> CSS Locks Generator</h1>
      <Description />
      <Calculator />
    </div>
  );
}

export default App;
