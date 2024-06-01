import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles/global'

function App() {
  const { pathname } = useLocation()
  return (
    <>
      <GlobalStyle />
      <Header type={pathname === '/' ? 'home' : 'perfil'} />
      <Outlet />
    </>
  )
}

export default App
