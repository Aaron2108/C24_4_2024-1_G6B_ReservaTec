import Header from "./Header";
import '../css/inicioAdmin.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const InicioAdmin = () => {
  // Obtener el estado del usuario usando useSelector
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div className="div_inicio_Admin">
      <Header />
      <section className="section_inicio_Admin">
        <article className="article_inicio_admin">
          <img className="img_inicioAdmin" src="/img/naruto.jpg" alt="" />
          <h1>{user && user.name}</h1>
          <h2 className="h2_inicio_admin">{user && user.email}</h2>
        </article>
      </section>
      <section className="section2_inicio_admin">
        <p>!Bienvenido, {user && user.givenName}!</p>
        <article className="article2_inicio_admin">
          <img className="img2_inicio_admin" src="/img/reservaInicioAdmin.png" alt="" />
          <h1>GESTIONAR RESERVAS</h1>
        </article>
      </section>
    </div>
  );
}

export default InicioAdmin;
