import { useEffect } from "react";
import Header from "../NavBar/Header";
import { useNavigate } from "react-router-dom";
import useFetchUsuario from "../services/useFetchUsuario";
import useFetchCarrera from "../services/useFetchCarreras";
import Loader from "../LoaderC/Loader";
import useFetchRol from "../services/useFetchRol";
import useFetchEstado from "../services/useFetchEstado";
import "./gestionUsuario.css"

const GestionUsuario = ({ users, setusers }) => {
  const [getAllUsuario, createUsuario, updateUsuario, deleteUsuario, isLoading, infoApi] = useFetchUsuario();
  const [getAllCarrera, createCarrera, updateCarrera, deleteCarrera, infoApiCarrera] = useFetchCarrera();

  const [getAllRol, createRol, updateRol, deleteRol, infoApiRol] =useFetchRol()
  const [getAllEstado, createEstado, updateEstado, deleteEstado, infoApiEstado]=useFetchEstado()
  useEffect(() => {
    getAllUsuario();
    getAllCarrera();
    getAllRol()
    getAllEstado()
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loginAdminUser');
    if (loggedUserJSON) {
      const userLocal = JSON.parse(loggedUserJSON);
      setusers(userLocal);
    }
  }, []);

  const navigate = useNavigate();

  const inicio = () => {
    navigate("/inicioAdmin");
  };

  const handleDelete = (id) => {
    deleteUsuario(id)
    setTimeout(() => {
      setCreacion(suma => suma + 1);
  }, 500);

  };

  const getCarreraNombre = (carreraId) => {
    const carrera = infoApiCarrera.find((carrera) => carrera.pk_id_carrera === carreraId);
    return carrera ? carrera.nombre : "Carrera no encontrada";
  };

  const getRol = (rolId) => {
    const carrera = infoApiRol.find((carrera) => carrera.pk_id_rol === rolId);
    return carrera ? carrera.nombre : "Rol no encontrada";
  };

  const getEstado = (estadoId) => {
    const carrera = infoApiEstado.find((carrera) => carrera.pk_id_estado === estadoId);
    return carrera ? carrera.nombre : "Estado no encontrada";
  };


  return isLoading ? (<Loader/>) : (
    <div className="div_inicio_admin">
      <Header users={users} setusers={setusers} />
      <section onClick={inicio} className="section_gestion_usuario">
        <img className="img_gestion_usuario" src="/img/crear_reserva.png" alt="" />
        <h2 className="h2_gestion">Gestionar Usuarios</h2>
      </section>

      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-light">
            <thead>
              <tr className="bg-primary text-white">
                <th className="align-middle text-center">N°</th>
                <th className="align-middle text-center">Email</th>
                <th className="align-middle text-center">Nombres</th>
                <th className="align-middle text-center">Codigo Tecsup</th>
                <th className="align-middle text-center">Carrera</th>
                <th className="align-middle text-center">Rol</th>
                <th className="align-middle text-center">Estado</th>
                <th className="align-middle text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {infoApi?.map((usuarios, index) => (
                <tr key={usuarios.pk_id_usuario}>
                  <td className="align-middle text-center">{index + 1}</td>
                  <td className="align-middle text-center">{usuarios.email}</td>
                  <td className="align-middle text-center">{usuarios.nombres}</td>
                  <td className="align-middle text-center">{usuarios.codigo_tecsup}</td>
                  <td className="align-middle text-center">{getCarreraNombre(usuarios.fk_id_carrera)}</td>
                  <td className="align-middle text-center">{getRol(usuarios.fk_id_rol)}</td>
                  <td className="align-middle text-center">{getEstado(usuarios.fk_id_estado)}</td>
                  <td className="align-middle text-center w-auto">
                    <button className="btn btn-danger" onClick={() => handleDelete(usuarios.pk_id_usuario)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestionUsuario;
