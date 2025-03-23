import { useCalculator } from './components/CalculatorProvider';
import { evaluate } from 'mathjs';

const Result = () => {
    const { numbers } = useCalculator();
    const expression = numbers.join('');

    const calculateResult = (expr) => {
        return evaluate(expr)
    };

    return (
        <div className="calculator">
            <h1>Result</h1>
            <p>Expression: {expression}</p>
            <p>Result: {calculateResult(expression)}</p>
        </div>
    );
};

export default Result;