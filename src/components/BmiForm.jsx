
import React, { useState } from "react";

export function BmiForm({ onCalculate }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weight || !height || isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      setError("Por favor, insira valores válidos para altura e peso.");
      onCalculate(null);
      return;
    }

    setError("");
    onCalculate({ weight: weightNum, height: heightNum });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Ex: 70"
          min="1"
          step="any"
          required
        />
      </div>
      <div>
        <label htmlFor="height">Altura (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Ex: 170"
          min="1"
          step="any"
          required
        />
      </div>
      <button type="submit">Calcular IMC</button>
      {error && <p className="error-message" role="alert">{error}</p>}
    </form>
  );
}
