import Header from "../NavBar/Header"
import '../gestionarAdmin/gestion.css';
const GestionAdmin = ({users, setusers}) => {
  return (
    <div className="div_inicio_Admin">
        <Header users={users} setusers={setusers}/>



      <section className="section_gestion_reservas">
        <img className="img_gestion" src="/img/reservaInicioAdmin.png" alt="" />
        <h2 className="h2_gestion">Gestionar Reservas</h2>
      </section>
      
      <section className="section2_gestion_reservas">
        <article>
            <img className="img_crear_reserva" src="/img/crear_reserva.png" alt="" />
            <h2>Crear Horario</h2>
        </article>
        <article>
            <img className="eliminar_reserva" src="/img/eliminar_reserva.png" alt="" />
            <h2>Eliminar Horario</h2>
        </article>
      </section>
    </div>
  )
}
export default GestionAdmin