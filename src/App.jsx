import './App.css';
import AppRoutes from './routes/appRoutes'; 
import { CalculatorProvider } from './components/CalculatorProvider'

function App() {
  return (
    <>
      <CalculatorProvider>
        <AppRoutes />
      </CalculatorProvider>
    </>
  );
}

export default App;
