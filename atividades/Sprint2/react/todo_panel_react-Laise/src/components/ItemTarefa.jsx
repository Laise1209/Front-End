import React, { useState } from 'react';

export function ItemTarefa(props) {
  const tarefa = props.tarefa;

  if (!tarefa) {
    return null;
  }

  if (!props.mostrarConcluidas && tarefa.concluida) {
    return null;
  }
  return (

    <li className={`item-tarefa ${tarefa.concluida ? 'concluida' : ''}`}>

      <input type="checkbox" className={'task-checkbox'}
        onChange={function () { props.alternarTarefa(tarefa.id, event.target.checked); }}
      />

      <span className={'task-text'}>{tarefa.descricao}</span>

      <button className={'botao-editar'} onClick={() => props.editarTarefa(tarefa)}>✏️</button>
      <button className={'botao-excluir'} onClick={() => props.excluirTarefa(tarefa.id, tarefa.descricao)}>🗑️</button>

    </li>

  );
}