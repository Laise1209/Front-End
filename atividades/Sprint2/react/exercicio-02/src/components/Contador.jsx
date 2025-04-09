import React from "react";
import { useState } from "react";

export function Contador() {
  const [contadora, setContadora] = useState(0);
  
    const contar = () => {
      setContadora(contadora + 1);
    }
  
    const [mensagem, setMensagem] = useState("Você está longe de chegar ao 30");
    const [desabilitar, setDesabilitar] = useState(false);
  
    const mudarMsg = () => {
      if(contadora <= 10 && contadora < 20) {
        setMensagem("Você está longe de chegar ao 30")
      }if (contadora >= 10 && contadora < 20) {
        setMensagem("Está quase lá!")
      } else if (contadora >= 20 && contadora < 29) {
        setMensagem("Falta pouco, você consegue!")
      } else if (contadora >= 29) {
        setDesabilitar(true);
        setMensagem("Parabéns, você chegou ao 30!")
      }
    }

  return (
    <div>
      <h1>Contador: {contadora}</h1>
      <p>Mensagem: {mensagem}</p>
      <button onClick={() => { contar(); mudarMsg(); }} disabled={desabilitar}>
        Incrementar
      </button>
    </div>
  );
}