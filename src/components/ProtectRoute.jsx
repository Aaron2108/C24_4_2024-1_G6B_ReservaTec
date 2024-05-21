import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({users,children, redirectTo="/login"}) => {
    if(users.length === 0){
        return <Navigate to={redirectTo} />;
    }else{
    return children ? children : <Outlet/>
    }
}
export default ProtectRoute