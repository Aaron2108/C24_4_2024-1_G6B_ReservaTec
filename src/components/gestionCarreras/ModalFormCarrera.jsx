import { useForm } from "react-hook-form"
import useFetchCarrera from "../services/useFetchCarreras"

const ModalFormCarrera = ({setModals, setCreacion}) => {
    const {handleSubmit, register} = useForm()
    const [getAllCarrera , createCarrera, updateCarrera, deleteCarrera, infoApi, isLoading] = useFetchCarrera()

    const submit = (data)=>{
        createCarrera(data);
        setModals(false);
        setTimeout(() => {
            setCreacion(suma => suma + 1);
        }, 500);
    }

    const modalOff = () =>{
        setModals(false)
        
    }

  return (
    <div>
        <div className="form_campo">
        <section className="form_modal_campo">
        <form onSubmit={handleSubmit(submit)}>
           <section className="section_formCampo">

           <article className="article_formCampo">
                <label htmlFor="nombre">
                    Nombre:
                </label>
                <input type="text" {...register("nombre")}/>
            </article>

           </section>

            <section className="boton_form_campo">
            <button className="button_crear">Crear Carrera</button>
            <button onClick={modalOff} className="button_cancelar">Cancelar</button>
            </section>
        </form>
    </section>
    </div>
    </div>
  )
}
export default ModalFormCarrera