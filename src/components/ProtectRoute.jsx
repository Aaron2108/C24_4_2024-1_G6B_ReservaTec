import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, redirectTo = "/login" }) => {
    const loggedInUser = JSON.parse(window.localStorage.getItem('loginAdminUser'));

    if (!loggedInUser) {
        return <Navigate to={redirectTo} />;
    } else {
        return children ? children : <Outlet />;
    }
};

export default ProtectRoute;
