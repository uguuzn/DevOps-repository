import { NavLink, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import UsersList from './pages/UsersList'

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <svg width="24" height="24" viewBox="0 0 130 130">
            <line x1="30" y1="100" x2="30" y2="30" stroke="#0e8fa8" strokeWidth="6" />
            <line x1="100" y1="100" x2="100" y2="30" stroke="#0e8fa8" strokeWidth="6" />
            <line x1="30" y1="30" x2="100" y2="100" stroke="#14181f" strokeWidth="6" />
            <circle cx="30" cy="30" r="10" fill="#fff" stroke="#0e8fa8" strokeWidth="5" />
            <circle cx="30" cy="100" r="10" fill="#0e8fa8" />
            <circle cx="100" cy="30" r="10" fill="#0e8fa8" />
            <circle cx="100" cy="100" r="10" fill="#fff" stroke="#0e8fa8" strokeWidth="5" />
          </svg>
          <span className="wordmark">
            NE<span className="accent">X</span>O
          </span>
        </div>
        <nav>
          <NavLink to="/" end>
            Entrar
          </NavLink>
          <NavLink to="/cadastro">Cadastrar</NavLink>
          <NavLink to="/usuarios">Usuários</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/usuarios" element={<UsersList />} />
        </Routes>
      </main>
    </div>
  )
}
