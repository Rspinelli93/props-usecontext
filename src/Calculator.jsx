import { Link } from 'react-router-dom';
import { useCalculator } from './components/CalculatorProvider';

const Calculator = () => {
    const { resetCalculator, numbers, addNumber } = useCalculator();

    const handleNumberClick = (num) => {
        addNumber(num);
    };

    //* Handle adding operators to the numbers array 
    const handleOperatorClick = (op) => {
        if (numbers.length === 0 || typeof numbers[numbers.length - 1] === 'string') return; //* Prevent adding an operator without a number
        addNumber(op);
    };

    const handleReset = () => {
        resetCalculator();
    };

    return (
        <>
            <div className="calculator">
                <h1>Calculadora</h1>
                <input 
                    type="text" 
                    value={numbers.join('')}
                    readOnly 
                />

                <div className="buttons">
                    <button onClick={() => handleNumberClick(1)}>1</button>
                    <button onClick={() => handleNumberClick(2)}>2</button>
                    <button onClick={() => handleNumberClick(3)}>3</button>
                    <button onClick={() => handleNumberClick(4)}>4</button>
                    <button onClick={() => handleNumberClick(5)}>5</button>
                    <button onClick={() => handleNumberClick(6)}>6</button>
                    <button onClick={() => handleNumberClick(7)}>7</button>
                    <button onClick={() => handleNumberClick(8)}>8</button>
                    <button onClick={() => handleNumberClick(9)}>9</button>
                    <button onClick={() => handleNumberClick(0)}>0</button>
                    <button onClick={() => handleOperatorClick('+')}>+</button>
                    <button onClick={() => handleOperatorClick('-')}>-</button>
                    <button onClick={() => handleOperatorClick('*')}>*</button>
                    <button onClick={() => handleOperatorClick('/')}>/</button>
                    <Link to="/result"><button>=</button></Link>
                    <button onClick={handleReset}>C</button>
                </div>
            </div>
        </>
    );
};

export default Calculator;
