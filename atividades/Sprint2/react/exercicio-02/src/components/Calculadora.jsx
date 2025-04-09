import React, { useState } from 'react';

export function Calculadora() {
  const [resultado, setResultado] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operacao, setOperacao] = useState('SOMAR');

  const calcular = () => {
    if (operacao == 'SOMAR') {
      setResultado(Number(num1) + Number(num2));
    } else if (operacao == 'SUBTRAIR') {
      setResultado(Number(num1) - Number(num2));
    } else if (operacao == 'MULTIPLICAR') {
      setResultado(Number(num1) * Number(num2));
    } else if (operacao == 'DIVIDIR') {
      setResultado(Number(num1) / Number(num2));
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <select
        value={operacao}
        onChange={(e) => setOperacao(e.target.value)}
      >
        <option value="SOMAR">SOMAR</option>
        <option value="SUBTRAIR">SUBTRAIR</option>
        <option value="MULTIPLICAR">MULTIPLICAR</option>
        <option value="DIVIDIR">DIVIDIR</option>
      </select>
      <button onClick={calcular}>Calcular</button>
      <div>Resultado da operação: {resultado}</div>
    </div>
  );
}
