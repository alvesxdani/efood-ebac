import { Provider } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { store } from './store'
import { GlobalStyle } from './styles/global'

function App() {
  const { pathname } = useLocation()
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header type={pathname === '/' ? 'home' : 'perfil'} />
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App
