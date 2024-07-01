import GestionUsuario from "../components/gestionUsuario/GestionUsuario"

const GestionUsuarioPage = ({users, setusers}) => {
    
  return (
    <div>
        <GestionUsuario users={users} setusers={setusers}/>
    </div>
  )
}
export default GestionUsuarioPage