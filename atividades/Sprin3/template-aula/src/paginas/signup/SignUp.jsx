import React, { useState } from 'react'
import { Button } from '../../componentes/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS } from '../../constantes/endpoints'

export const SignUp = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const navigateLogin = () => {
    navigate('/login')
  }

  const cadastrar = () =>{
    axios.post(`${ENDPOINTS.CADASTRAR}`, {
      nome,
      email,
      senha
    })
    .then((response) => {
      alert('Usuário cadastrado com sucesso!')
      console.log({ nome, email, senha });
      navigateLogin()
    })
    .catch((error) => {
      alert('Erro ao cadastrar usuário.')
      console.error('Erro ao cadastrar usuário:', error.message);
    });
  }

  return (
    <main className="grid grid-cols-6 grid-rows-1 h-[calc(100vh-5rem)] bg-ft-background">
      <section className="col-span-3 h-full w-9/12 mx-auto flex flex-col gap-4 justify-center">
        <div>
          <h1 className="font-black mb-2 text-2xl">Crie sua conta</h1>
          <h2 className="font-light text-[1.2rem]">Crie uma conta para acessar o Forum.</h2>
        </div>

        <p className="text-xs font-light">
          Já possui uma conta? <b onClick={navigateLogin} className="text-ft-secondary font-bold underline">Acesse aqui</b>.
        </p>

        <form
          className="flex flex-col gap-y-4 w-full"
          onSubmit={(e) => {
            e.preventDefault()
            cadastrar()
          }}
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-ft-gray-white">Nome</label>
            <input
              type="text"
              placeholder="Insira seu nome"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ft-primary"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ft-gray-white">Email</label>
            <input
              type="email"
              placeholder="Insira seu e-mail"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ft-primary"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ft-gray-white">Senha</label>
            <input
              type="password"
              placeholder="Insira sua senha"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ft-primary"
            />
          </div>
          <Button type="submit" className="w-max mx-auto">
            Cadastrar
          </Button>
        </form>
      </section>
      <section className="col-span-3 h-full">
        <img src="/images/background-signup.png" alt="" className="h-full w-full object-cover rounded-l-3xl" />
      </section>
    </main>
  )
}
