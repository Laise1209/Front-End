import { useState } from "react";
import { Formulario } from "./Formulario";

export function Gerenciamento() {

  const[desabilitarTodos, setDesabilitarTodos] = useState(false);
  const[botao, setBotao] = useState("Desabilitar todos os formularios");


  const desabilitarFormulario = () => {
    if(!desabilitarTodos){
      setDesabilitarTodos(true);
      setBotao("Habilitar todos os formularios")

    }else{
      setDesabilitarTodos(false);
      setBotao("Desabilitar todos os formularios")
    }
  }

  return (
    <div>
      <button onClick={desabilitarFormulario}>{botao}</button>
      <Formulario desabilitarTodos={desabilitarTodos}/>
      <Formulario desabilitarTodos={desabilitarTodos}/>
      <Formulario desabilitarTodos={desabilitarTodos}/>
    </div>
  );
}