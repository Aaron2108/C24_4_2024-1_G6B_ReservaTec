import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import InicioAdmin from "../components/InicioAdmin/InicioAdmin";

const InicioAdminPage = ({ users, setusers }) => {

  return (
    <div>
      <InicioAdmin users={users} setusers={setusers} />
    </div>
  );
};

export default InicioAdminPage;
