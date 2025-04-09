import React from "react";

export function ListaTelefonica() {

  const [contatos, setContatos] = React.useState([]);
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  function deletarContato() {
    const novosContatos = contatos.filter((contato, index) => index !== 0);
    setContatos(novosContatos);
  }

  function cadastrar() {
    const novoContato = {
      nome,
      sobrenome,
      telefone
    };
    console.log(nome, sobrenome, telefone);
    console.log(novoContato);
    setContatos([...contatos, novoContato]);
    setNome("");
    setSobrenome("");
    setTelefone("");
  }

  return (
    <div>
      <h1>Lista Telefônica</h1>

      <input type="text" name="nome" placeholder="Nome" value={nome} onChange={(valor) => setNome(valor.target.value)} />
      <input type="text" name="sobrenome" placeholder="Sobrenome" value={sobrenome} onChange={(valor) => setSobrenome(valor.target.value)} />
      <input type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={(valor) => setTelefone(valor.target.value)} />

      <button onClick={cadastrar}>Cadastrar</button>

      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            Nome: {contato.nome} Sobrenome: {contato.sobrenome} Telefone: {contato.telefone}
            <button onClick={deletarContato}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}