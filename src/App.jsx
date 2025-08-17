import React from "react";
import { BmiForm } from "./components/BmiForm";
import BmiResult from "./components/BmiResult";
import { calculateBMI, getBMIClassification } from "./services/bmiService";
import "./index.css";

function App() {
  const [result, setResult] = React.useState(null);

  const handleCalculate = (data) => {
    if (!data) {
      setResult(null);
      return;
    }
    const { weight, height } = data;
    const bmiValue = calculateBMI(weight, height);
    const bmiClassification = getBMIClassification(bmiValue);
    setResult({ bmi: bmiValue, classification: bmiClassification });
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <BmiForm onCalculate={handleCalculate} />
      <BmiResult result={result} />
    </div>
  );
}

export default App;
