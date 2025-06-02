import axios from 'axios'
import { useEffect } from 'react'
import './App.css'
import { Card } from './Card'  
import { Form } from './Form'  
import { Botao } from './Botao'

function App() {
  useEffect(() => {},[])
  function adicionarUsuario(){
    api.post("/usuarios",{
      nome: "Lucas",  
      dtNascimento: "2000-01-01",
      profissao: "Programador"
    })
  }

  function buscarUsuario(){
    api.get("/usuarios")
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error("Erro ao buscar usuários:", error);
    });
  }

  function atualizarUsuario(){
    api.put("/usuarios/8511",{
      nome: "Joel",
      dtNascimento: "1988-10-21",
      profissao: "Garoto"
    })
  }

  function deletarUsuario(){
    api.delete("/usuarios/8511")
  }

  return (
    <>
      <Botao> ABRACADABR ABRA U NA NA, ABRA CADA BRA</Botao>
    </>
  )
}

export default App  
