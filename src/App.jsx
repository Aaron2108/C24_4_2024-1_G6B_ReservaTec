import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InicioAdmin from './components/InicioAdmin'
import Login from './components/Login'
import './css/login.css'
import { useSelector } from 'react-redux'


function App() {

  const logout = () => setusers(null)

  return (
    <BrowserRouter>

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/inicioAdmin' element={<InicioAdmin/>} />
    </Routes>

    </BrowserRouter>
  
  )
}

export default App
