import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import LoginPages from './pages/LoginPages'
import InicioAdminPage from './pages/InicioAdminPage'
import { useEffect, useState } from 'react'
import GestionAdminPage from './pages/GestionAdminPage'
import ProtectRoute from './components/ProtectRoute'
import GestionHorarioPage from './pages/GestionHorarioPage'
import CrearHorarioPage from './pages/CrearHorarioPage'


function App() {

  const [users, setusers] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loginAdminUser')
    if(loggedUserJSON){
      const userLocal = JSON.parse(loggedUserJSON);
      setusers(userLocal);
      
    }
}, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPages users={users} setusers={setusers}/>} />

                            {/*Rutas Protegidas*/}
      <Route element={<ProtectRoute users={users}/>}> 
      <Route path='/inicioAdmin' element={<InicioAdminPage users={users} setusers={setusers} redirectTo="/login"/>}/>
      <Route path='/gestionAdmin' element={<GestionAdminPage users={users} setusers={setusers}/>}/>
      <Route path='/gestionHorario' element={<GestionHorarioPage users={users} setusers={setusers}/>}/>
      <Route path='/crearHorario' element={<CrearHorarioPage users={users} setusers={setusers}/>}/>
      </Route>
                            {/*Rutas Protegidas*/}  

    </Routes>

    </BrowserRouter>
  
  )
}

export default App
