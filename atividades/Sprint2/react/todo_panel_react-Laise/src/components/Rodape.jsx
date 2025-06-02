import React from "react";
import { BarraProgresso } from './BarraProgresso';

export function Rodape(props) {

  return (
    <footer aria-label="Acompanhar Tarefas">
      <div id="container-progresso">
        <BarraProgresso progresso={props.progresso.toFixed(1)} />
      </div>
      <button id="alternar-concluidas" onClick={props.alternarMostrarConcluidas}>
        {props.mostrarConcluidas ? 'Ocultar concluídas' : 'Mostrar concluídas'}
      </button>
    </footer>
  );
}