import { FormEvent, useState } from 'react'
import { ApiError, login, UsuarioResponse } from '../api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioResponse | null>(null)
  const [carregando, setCarregando] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErro(null)
    setUsuarioLogado(null)
    setCarregando(true)

    try {
      const usuario = await login({ email, senha })
      setUsuarioLogado(usuario)
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
      <h1>Entrar</h1>
      <p className="subtitle">Acesse com um usuário já cadastrado no sistema.</p>

      <form onSubmit={handleSubmit} className="form">
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
            placeholder="••••••••"
          />
        </label>

        {erro && <div className="alert alert-error">{erro}</div>}
        {usuarioLogado && (
          <div className="alert alert-success">
            Bem-vindo(a), {usuarioLogado.nome}! Login realizado com sucesso.
          </div>
        )}

        <button type="submit" disabled={carregando}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
