import { useState, createContext, useContext } from 'react'

export const CalculateContext = createContext()

export const CalculatorProvider = ({ children }) => {
    const [ numbers, setNumbers ] = useState([])
    
    const addNumber = (numb) => {
        setNumbers(prevNumbers => [...prevNumbers, numb])
    }

    const resetCalculator = () => {
        setNumbers([])
    }

    return (
        <CalculateContext.Provider value= {{addNumber, resetCalculator, numbers}}>
            { children }
        </CalculateContext.Provider>
    ) 
}

export const useCalculator = () => {
    return useContext(CalculateContext)
}