import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

export default App
