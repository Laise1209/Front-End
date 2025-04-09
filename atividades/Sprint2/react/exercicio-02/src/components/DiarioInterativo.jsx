import React, { useEffect, useState } from "react";

export function DiarioInterativo() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const textoSalvo = localStorage.getItem("diario");
    if (textoSalvo) {
      setTexto(textoSalvo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diario", texto);
  }, [texto]);

  return (
    <div>
      <h1>Diário Interativo</h1>
      <textarea
        placeholder="Escreva suas anotações aqui..."
        rows={10}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}
