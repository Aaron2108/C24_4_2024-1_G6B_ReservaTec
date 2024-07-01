import { useForm } from "react-hook-form";
import './modalCamp.css';
import useFetchCampo from "../services/useFetchCampo";
const ModalForm = ({setModal, setCreacion}) => {
    const { register, handleSubmit } = useForm();
    const [getAllCampo, createCampo, updateCampo, deleteCampo, infoApi, isLoading, hasError] = useFetchCampo();

    const submit = data => {
		createCampo(data)
        setModal(false);
        setTimeout(() => {
            setCreacion(suma => suma + 1);
        }, 500);
    }

    const modalOff = () =>{
        setModal(false);
    }

  return (
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

            <article className="article_formCampo">
            <label htmlFor="aforo">
                    Aforo:
                </label>
                <input type="number" {...register("aforo")} />
            </article>

            <article className="article_formCampo">
            <label htmlFor="fk_id_estado">
                    Estado:
                </label>
                <input type="number" {...register("fk_id_estado")} />
            </article>

           </section>

            <section className="boton_form_campo">
            <button className="button_crear">Crear Campo</button>
            <button onClick={modalOff} className="button_cancelar">Cancelar</button>
            </section>
        </form>
    </section>
    </div>
  )
}
export default ModalForm