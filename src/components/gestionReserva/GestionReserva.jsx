import { useEffect } from "react";
import Header from "../NavBar/Header";
import useFetchReserva from "../services/useFetchReserva";
import "./reserva.css";
import useFetchUsuario from "../services/useFetchUsuario";
import useFetchCampo from "../services/useFetchCampo";
import useFetchHorario from "../services/useFetchHorarios";
import useFetchEstado from "../services/useFetchEstado";

const GestionReserva = ({ users, setUsers }) => {
    const [getAllReserva, createReserva, updateReserva, deleteReserva, infoApiReserva, isLoading] = useFetchReserva();
    const [getAllUsuario, createUsuario, updateUsuario, deleteUsuario, isLoadingUsuarios, infoApi] = useFetchUsuario();
    const [getAllCampo, createCampo, updateCampo, deleteCampo, infoApiCampos, hasError] = useFetchCampo();
    const [getAllHorario, createHorario, updateHorario, deleteHorario, infoApiHorario] = useFetchHorario();

    const [getAllEstado, createEstado, updateEstado, deleteEstado, infoApiEstado]=useFetchEstado()
    useEffect(() => {
        getAllReserva();
        getAllUsuario();
        getAllCampo();
        getAllHorario();
        getAllEstado()
    }, []);

    const handleDelete = () => {
        console.log("No puedes eliminar una reserva");
    };

    const getUsuarioNombre = (usuarioId) => {
        const usuario = infoApi?.find((usuario) => usuario.pk_id_usuario === usuarioId);
        return usuario ? usuario.nombres : "Usuario no encontrado";
    };

    const getCampoNombre = (campoId) => {
        const campo = infoApiCampos?.find((campo) => campo.pk_id_campo === campoId);
        return campo ? campo.nombre : "Campo no encontrado";
    };

    const getHorario = (horarioId) => {
        const horario = infoApiHorario?.find((horario) => horario.pk_id_horario === horarioId);
        return horario ? `${horario.hora_inicio} - ${horario.hora_fin}` : "Horario no encontrado";
    };

    const getEstado = (estadoId) => {
      const estado = infoApiEstado?.find((estado) => estado.pk_id_estado === estadoId);
      return estado ? `${estado.nombre}` : "estado no encontrado";
  };

    return (
        <div className="div_inicio_Admin">
            <Header users={users} setUsers={setUsers} />
            <section className="section_crear_horario">
                <article className="article_crear_horario">
                    <h2 className="h2_crear">Gestion Reservas</h2>
                </article>
            </section>

            <div className="container mt-3">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped table-light">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="align-middle text-center">N°</th>
                                <th className="align-middle text-center">Fecha</th>
                                <th className="align-middle text-center">Comentario</th>
                                <th className="align-middle text-center">Usuario</th>
                                <th className="align-middle text-center">Campo</th>
                                <th className="align-middle text-center">Horario</th>
                                <th className="align-middle text-center">Estado</th>
                                {/* <th className="align-middle text-center">Acciones</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {infoApiReserva?.map((reservas, index) => (
                                <tr key={index}>
                                    <td className="align-middle text-center">{index + 1}</td>
                                    <td className="align-middle text-center">{reservas.fecha}</td>
                                    <td className="align-middle text-center">{reservas.comentario}</td>
                                    <td className="align-middle text-center">{getUsuarioNombre(reservas.fk_id_usuario)}</td>
                                    <td className="align-middle text-center">{getCampoNombre(reservas.fk_id_campo)}</td>
                                    <td className="align-middle text-center">{getHorario(reservas.fk_id_horario)}</td>
                                    <td className="align-middle text-center">{getEstado(reservas.fk_id_estado)}</td>
                                    {/* <td className="align-middle text-center w-auto">
                                        <button className="btn btn-danger" onClick={() => handleDelete(reservas.pk_id_reserva)}>Eliminar</button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GestionReserva;
