import React, { createContext } from "react";



const initialState = {
    minValue: 0,
    
}

export const CalcContext = createContext(initialState);

export const CalcProvider = ({children}) => {

//   const [minValue, setMinValue] = useState(0);  
//   const [maxValue, setMaxValue] = useState(0);
//   const [minWidth, setMinWidth] = useState(0);
//   const [maxWidth, setMaxWidth] = useState(0);

//   const updateMinValue = e => {
//     setMinValue(e.target.value)
    
// }
// const updateMaxValue = e => {
//     setMaxValue(e.target.value)
//     console.log(maxValue)
// }
// const updateMinWidth = e => {
//     setMinWidth(e.target.value)
//     console.log(minWidth)
// }
// const updateMaxWidth = e => {
//     setMaxWidth(e.target.value)
//     console.log(maxWidth)
// }    
    const getInfo = (passedInfo) => {
        console.log('from getInfo')
        console.log(passedInfo)
    }
    

  return (
    <CalcContext.Provider
       value={getInfo}
    >
      {children}
    </CalcContext.Provider>
  );
};
