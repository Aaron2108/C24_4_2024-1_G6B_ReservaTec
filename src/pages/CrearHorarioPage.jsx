import CrearHorario from "../components/HorarioAdmin/CrearHorario"

const CrearHorarioPage = ({users,setusers}) => {
  return (
    <div>
        <CrearHorario  users={users} setusers={setusers}/>
    </div>
  )
}
export default CrearHorarioPage