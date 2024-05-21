import Header from "../NavBar/Header";
import '../InicioAdmin/inicioAdmin.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InicioAdmin = ({users, setusers}) => {
  // Obtener el estado del usuario usando useSelector
  // const user = useSelector(state => state.user);

  // useEffect(() => {
  //   if (users) {
  //     console.log(users);
  //   }
  // }, [users]);
  const navigate = useNavigate()
  const onGestionReserva = () => {
    navigate("/gestionAdmin")
  }

  return (
    <div className="div_inicio_Admin">
      <Header users={users} setusers={setusers} />
      <section className="section2_inicio_admin">
        <p>!Bienvenido, {users && users.givenName}!</p>
        <article className="article2_inicio_admin">
        <div onClick={onGestionReserva} className="div_incio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR RESERVAS</h1>
        </div>
        </article>
      </section>
    </div>
  );
}

export default InicioAdmin;
