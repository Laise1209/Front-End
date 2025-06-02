import React from 'react';
import '../styles/estilos.css';

export function BarraProgresso(props) {
  const progresso = props.progresso;

  return (
    <>
      <div
        id="barra-progresso"
        style={{ width: `${progresso}%` }}
      ></div>
      <span id="texto-progresso">{progresso}% concluído</span>
    </>
  );
}