import GestionReserva from "../components/gestionReserva/GestionReserva"

const GestionReservaPage = ({users, setusers}) => {
  return (
    <div>
        <GestionReserva users={users} setusers={setusers}/>
    </div>
  )
}
export default GestionReservaPage