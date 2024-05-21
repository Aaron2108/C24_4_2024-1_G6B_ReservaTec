import Login from "../components/Login/Login"

const LoginPages = ({setusers, users}) => {
  return (
    <div>
        <Login setusers={setusers} users={users}/>
    </div>
  )
}
export default LoginPages