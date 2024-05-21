import GestionAdmin from "../components/gestionarAdmin/GestionAdmin"

const GestionAdminPage = ({users, setusers}) => {
  return (
    <div>
        <GestionAdmin users={users} setusers={setusers}/>
    </div>
  )
}
export default GestionAdminPage