import { useState } from "react";

export function Formulario() {

  const [disable, setDisable] = useState(false)
  const desabilitarFormulario = () => {
    setDisable(true);
  }

  const habilitarFormulario = () => {
    setDisable(false);
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

      <button onClick={desabilitarFormulario}>Desabilitar formulario</button> <br />
      <button onClick={habilitarFormulario}>Habilitar formulario</button> 
    </>
  );
}
