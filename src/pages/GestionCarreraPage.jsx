import GestionCarreras from "../components/gestionCarreras/GestionCarreras"

const GestionCarreraPage = ({users, setusers}) => {
  return (
    <GestionCarreras users={users} setusers={setusers} />
  )
}
export default GestionCarreraPage