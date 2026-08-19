import { FormEvent, useState } from 'react'
import { ApiError, cadastrarUsuario } from '../api'

export default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState(false)
  const [carregando, setCarregando] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErro(null)
    setSucesso(false)
    setCarregando(true)

    try {
      await cadastrarUsuario({ nome, email, senha })
      setSucesso(true)
      setNome('')
      setEmail('')
      setSenha('')
    } catch (err) {
      if (err instanceof ApiError) {
        setErro(err.message)
      } else {
        setErro('Não foi possível conectar ao servidor. O backend está rodando?')
      }
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="card">
      <h1>Cadastrar usuário</h1>
      <p className="subtitle">Cria um novo colaborador no sistema da NEXO.</p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Nome completo"
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="voce@nexo.com"
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="mínimo 6 caracteres"
          />
        </label>

        {erro && <div className="alert alert-error">{erro}</div>}
        {sucesso && <div className="alert alert-success">Usuário cadastrado com sucesso!</div>}

        <button type="submit" disabled={carregando}>
          {carregando ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}
