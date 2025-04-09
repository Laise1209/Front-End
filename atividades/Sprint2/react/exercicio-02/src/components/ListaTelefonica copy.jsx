import React from "react";

export function ListaTelefonica() {
  const [lista, setLista] = React.useState([]);
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

   function adicionar(){
    setLista([...lista, {
      nome, 
      sobrenome, 
      telefone}]);
   }

   function deletar(index){
    const listaNova = lista.filter((contato, indexContato) => indexContato != index); 
    setLista(listaNova);
   }

  return (
    <div>
      <h1>Lista Telefônica</h1>

      <input type="text" name="nome" onChange={(event) => {
        setNome(event.target.value);
      }}/>
      <input type="text" name="sobrenome" onChange={(event) =>{
        setSobrenome(event.target.value);
      }}/>
      <input type="text" name="telefone" onChange={(event) => {
        setTelefone(event.target.value);
      }}/>

      <button onClick={adicionar}>Cadastrar</button>

      <ul>
        {lista.map(contato =>(
          <li>
            Nome: {contato.nome} Sobrenome: {contato.sobrenome} Telefone: {contato.telefone}
            <button onClick={()=> deletar(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}