import React from "react";

export default function BmiResult({ result }) {
  if (!result) {
    return null;
  }
  return (
    <div className="resultado">
      <h2>Seu IMC: {result.bmi}</h2>
      <p>
        <strong>Classificação:</strong> {result.classification}
      </p>
    </div>
  );
}
