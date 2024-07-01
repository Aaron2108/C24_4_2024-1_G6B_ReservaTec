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
import GestionUsuarioPage from './pages/GestionUsuarioPage'
import Loader from './components/LoaderC/Loader'
import GestionCarreraPage from './pages/GestionCarreraPage'
import GestionReservaPage from './pages/GestionReservaPage'


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

      {/**Gestion de campos deportivos **/}
      <Route path='/gestionCampos' element={<GestionHorarioPage users={users} setusers={setusers}/>}/>

      {/** Gestion de horarios **/}
      <Route path='/gestionHorarios' element={<CrearHorarioPage users={users} setusers={setusers}/>}/>

      {/* Gestion Usuarios */}
      <Route path='/gestionUsuarios' element={<GestionUsuarioPage users={users} setusers={setusers}/>}/>
      

      {/** Gestion Carreras **/}
      <Route path='/gestionCarreras' element={<GestionCarreraPage users={users} setusers={setusers}/>}/>
      
      {/** Gestion Reservas **/}
      <Route path='/gestionReserva' element={<GestionReservaPage users={users} setusers={setusers}/>}/>

      <Route path='/loader' element={<Loader users={users} setusers={setusers}/>}/>

      </Route>
                            {/*Rutas Protegidas*/}  

    </Routes>

    </BrowserRouter>
  
  )
}

export default App
