import GestionHorario from "../components/gestionarAdmin/GestionHorario"

const GestionHorarioPage = ({users, setusers}) => {
  return (
    <div>
        <GestionHorario users={users} setusers={setusers}/>
    </div>
  )
}
export default GestionHorarioPage