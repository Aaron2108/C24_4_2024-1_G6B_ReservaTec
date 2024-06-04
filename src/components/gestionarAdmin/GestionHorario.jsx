import { useNavigate } from "react-router-dom"
import Header from "../NavBar/Header"

const GestionHorario = ({users, setusers}) => {

  const navigate = useNavigate()

  const crearHorario = () =>{
    navigate("/crearHorario")
  }

  return (
    <div className="div_inicio_Admin">
        <Header users={users} setusers={setusers}/>
        <section className="section_gestion_reservas"> 
            <img className="img_gestion" src="/img/crear_reserva.png" alt="" />
            <h2 className="h2_gestion">Gestionar Horario</h2>
            </section>

    <section onClick={crearHorario} className="section2_gestion_reservas">
        <article className="article_gestion_reservas">
            <img className="img_crear_reserva" src="/img/campo1.png" alt="" />
            <section className="section_campos">
                <h2>Campo 1</h2>
            </section>
        </article>

        <article className="article_gestion_reservas">
            <img className="eliminar_reserva" src="/img/campo2.png" alt="" />
            <section className="section_campos">
                <h2>Campo 2</h2>
            </section>
        </article>
      </section>

    </div>
  )
}
export default GestionHorario