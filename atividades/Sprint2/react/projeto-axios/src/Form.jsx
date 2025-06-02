import { useState } from "react"

export function Form() {
    const [data, setData] = useState({
        nome: "",
        email: "",
        senha: ""   
    })   

    function habilitarFocus(){
        inputRef.current.focus();
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="nome">nome</label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="border border-black w-52 px-2 py-1"
                    defaultValue={data.nome}
                    onChange={(e) => {
                        setData({ ...data, nome: e.target.value })
                    }}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="border border-black w-52 px-2 py-1"
                    ref={inputRef}
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value })
                    }}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="senha">senha</label>
                <input
                    type="text"
                    name="senha"
                    id="senha"
                    className="border border-black w-52 px-2 py-1"
                    onChange={(e) => {
                        setData({ ...data, senha: e.target.value })
                    }}
                />
            </div>

            <div className="flex flex-col gap-2">
                <span>Nome: {data.nome}</span>
                <span>Senha: {data.senha}</span>
                <span>Email: {data.email}</span>
            </div>
            <button onClick={habilitarFocus} className="bg-blue-500 text-white px-4 py-2 rounded">Habilitar foco</button>
        </div>
    )
}