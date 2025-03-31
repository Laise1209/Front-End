import { Gerenciamento } from "./Gerenciamento";
import { Formulario } from "./Formulario";
import { useState } from "react";
import './App.css'

function App() {

  // const [contadora, setContadora] = useState(0);/*hook: useState */

  // const contar = () => {
  //   setContadora(contadora + 1);
  // }

  return (
    <div>
      {/* {contadora}
      {contadora > 30 && "Maior que 30"} <br />
      <button onClick={contar}>
        Contar
      </button> */}
      {/* <Gerenciamento /> */}
      <Formulario />
    </div>
  )
}

export default App
