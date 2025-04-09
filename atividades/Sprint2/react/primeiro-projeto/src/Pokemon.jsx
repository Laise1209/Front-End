import React, { useEffect, useState } from "react";

export function Pokemon() {

    const [informacoes, setInformacoes] = useState({
        nome: "",
        experiencia: 0,
        habilidades: [],
    });
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(resposta => resposta.json())
            .then(json => setInformacoes({
                nome: json.name,
                experiencia: json.base_experience,
                habilidades: json.ability,
            }))
            .catch(erro => console.log("QREBO"));
    }, []);

    return (
        <div>
            <h1>{informacoes.nome}</h1>
            <p>{informacoes.experiencia}</p>
            {informacoes.habilidades.map((elemento) => {
                <>
                    <div>{elemento.ability.name}</div>
                    <div>{elemento.ability.url}</div>
                </>
            })}
        </div>
    );
}