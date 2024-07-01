import Header from "../NavBar/Header";
import '../InicioAdmin/inicioAdmin.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InicioAdmin = ({users, setusers}) => {

  const navigate = useNavigate()

  const onGestionReservas = () =>{
    navigate("/gestionReserva")
  }

  const onGestionCampos = () => {
    navigate("/gestionCampos")
  }

  const onGestionHorarios = () => {
    navigate("/gestionHorarios")
  }

  const onGestionUsuarios = () => {
    navigate("/gestionUsuarios")
  }

  const onGestionCarreras = () => {
    navigate("/gestionCarreras")
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loginAdminUser')
    if(loggedUserJSON){
      const userLocal = JSON.parse(loggedUserJSON);
      setusers(userLocal);
    }
}, [])

  return (
    <div className="div_inicio_Admin">
      <Header users={users} setusers={setusers} />
      <section className="section2_inicio_admin">
        <p>!Bienvenido, {users && users.givenName}!</p>
      </section>

      <article className="article2_inicio_admin">
        <div onClick={onGestionReservas}  className="div_incio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR RESERVAS</h1>
        </div>

        <div onClick={onGestionCampos} className="div_incio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR CAMPOS</h1>
        </div>

        <div onClick={onGestionHorarios} className="div_incio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR HORARIOS</h1>
        </div>


        <div onClick={onGestionUsuarios}  className="div_incio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR USUARIOS</h1>
        </div>

        <div onClick={onGestionCarreras}  className="div_incio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR CARRERAS</h1>
        </div>

        </article>

    </div>
  );
}

export default InicioAdmin;
