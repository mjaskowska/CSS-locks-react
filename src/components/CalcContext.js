import React, { createContext } from "react";



const initialState = {
    minValue: '',
    maxValue: '',
    minWidth: '',
    maxWidth: ''
    }

export const CalcContext = createContext(initialState);

export const CalcProvider = ({children}) => {

  
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
