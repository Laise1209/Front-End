import React, { useState } from 'react';

export function FormularioTarefa(props) {
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const adicionarTarefa = props.adicionarTarefa;

  function lidarComEnvio(evento) {
    evento.preventDefault();
    adicionarTarefa(descricaoTarefa.trim());
    setDescricaoTarefa('');
  }

  function lidarComMudanca(evento) {
    setDescricaoTarefa(evento.target.value);
  }

  return (
    <form id="formulario-tarefa" aria-label="Adicionar nova tarefa" onSubmit={lidarComEnvio}>
      <input
        type="text"
        id="entrada-tarefa"
        aria-label="Descrição da Tarefa"
        placeholder="Digite a descrição da tarefa..."
        onChange={lidarComMudanca}
        required
      />
      <button type="submit">+</button>
    </form>
  );
}