// Tabela de classificação do IMC
const bmiClassification = [
  { min: 0, max: 18.5, description: "Abaixo do peso" },
  { min: 18.5, max: 24.9, description: "Peso normal" },
  { min: 25, max: 29.9, description: "Sobrepeso" },
  { min: 30, max: Infinity, description: "Obesidade" }
];

/**
 * Calcula o IMC
 * @param {number} weight - Peso em quilogramas
 * @param {number} height - Altura em centímetros
 * @returns {number|null} - Valor do IMC ou null se os parâmetros forem inválidos
 */
export function calculateBMI(weight, height) {
  if (height <= 0 || weight <= 0) {
    return null;
  }
  const heightInMeters = height / 100;
  return parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(2));
}

/**
 * Retorna classificação de acordo com o IMC
 * @param {number} bmiValue - Valor do IMC
 * @returns {string} - Descrição da classificação do IMC
 */
export function getBMIClassification(bmiValue) {
  const category = bmiClassification.find(range => bmiValue < range.max);
  return category ? category.description : "Classificação desconhecida";
}
