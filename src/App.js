import './App.css';

import Description from './components/Description';
import Calculator from './components/Calculator';


function App(props) {
  return (
    <div className="App">
      <h1 className="title"> CSS Locks Generator</h1>
      <Description />
      <Calculator />
    </div>
  );
}

export default App;
