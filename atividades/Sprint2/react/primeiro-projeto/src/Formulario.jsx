import { useEffect, useState } from "react";

export function Formulario(props) {

  const [disable, setDisable] = useState(false)
  const[botao, setBotao] = useState("Desabilitar formulario");
  useEffect(()=>{
    setDisable(props.desabilitarTodos);
  },[props.desabilitarTodos]);  

  const desabilitarFormulario = () => {
    if(!disable){
      setDisable(true);
      setBotao("Habilitar formulario")
      
    }else{
      setDisable(false);
      setBotao("Desabilitar formulario")
    }
  }

  return (
    <>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" disabled={disable}/>
      </div>

      <div>
        <label htmlFor="nome">Profissão:</label>
        <input type="text" id="profissao"disabled={disable} />
      </div>

      <div>
        <label htmlFor="nome">Comentário:</label>
        <input type="text" id="comentario"disabled={disable} />
      </div>

      <button onClick={desabilitarFormulario}>{botao}</button> <br />
    </>
  );
}
