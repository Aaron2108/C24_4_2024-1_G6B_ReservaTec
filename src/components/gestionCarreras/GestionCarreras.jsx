import { useEffect, useState } from "react"
import Header from "../NavBar/Header"
import useFetchCarrera from "../services/useFetchCarreras"
import "./gestionCarrera.css"
import Loader from "../LoaderC/Loader"
import ModalFormCarrera from "./ModalFormCarrera"

const GestionCarreras = ({users, setUsers}) => {

    const[getAllCarrera , createCarrera, updateCarrera, deleteCarrera, infoApiCarrera, isLoading] = useFetchCarrera()
    const [modals, setModals] = useState(false)
    const [creacion, setCreacion] = useState(1)

    useEffect(() => {
        getAllCarrera()
    }, [creacion])

    const onModal = () =>{
        setModals(true)
    }
    
    const HandleDeleteCarrera = (id) => {
        deleteCarrera(id)
        setTimeout(() => {
            setCreacion(suma => suma + 1);
        }, 500);
    }

  return isLoading ? (
    <Loader/> ):(
    <div className="div_inicio_Admin">
        <Header users={users} setUsers={setUsers} />
        <section className="section_crear_horario">
          <article className="article_crear_horario">
            <h2 className="h2_crear">Carreras</h2>
          </article>
        </section>
        <section className="crear_carrera">
        <button onClick={onModal} className="cssbuttons-io-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                <span>Crear</span>
        </button>   
        </section>

    <div className="container mt-3">
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-striped table-light">
        <thead>
          <tr className="bg-primary text-white">
            <th className="align-middle text-center">N°</th>
            <th className="align-middle text-center">Carreras</th>
          </tr>
        </thead>
        <tbody>
            {
                infoApiCarrera?.map((carrera, index) =>(
            <tr key={index}>

                <td className="align-middle text-center">{index + 1}</td>
                <td className="align-middle text-center">{carrera.nombre}</td>
                <td className="align-middle text-center w-auto"> 
                <button onClick={() => HandleDeleteCarrera(carrera.pk_id_carrera)} className="btn btn-danger">Eliminar</button>
                </td>
            </tr>
                ))
            }

        </tbody>
    </table>
    </div>
    </div>
    {modals ? <ModalFormCarrera setCreacion={setCreacion} setModals={setModals}/> : null}
    </div>
    )}
export default GestionCarreras