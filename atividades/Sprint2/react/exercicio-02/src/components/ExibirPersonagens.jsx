import React from "react";
import { useEffect, useState } from "react";

export function ExibirPersonagem() {

const [informacoes, setInformacoes] = React.useState({
    nome: "",
    imagem: ""
})

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/428")
    .then(resposta => resposta.json())
    .then(json =>  setInformacoes({
            nome: json.name,
            imagem: json.image
        }))
    .catch(error => console.log("DEU RUIM"))
  }, [])

  return (
    <div>
      <h1>Personagens</h1>
      <ul>
       <li>Nome do personagem: {informacoes.nome} Foto personagem: <img src={informacoes.imagem} alt="" /></li>
      </ul>
    </div>
  );
}