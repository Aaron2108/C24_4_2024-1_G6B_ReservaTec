import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Header from "../NavBar/Header";
import './horario.css';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useFetchHorario from '../services/useFetchHorarios';
import Loader from '../LoaderC/Loader';

const CrearHorario = ({ users, setUsers }) => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [dataHorarios, setDataHorarios] = useState([])
  const [creacion, setCreacion] = useState(1)
  const [getAllHorario , createHorario, updateHorario, deleteHorario,infoApiHorario, isLoading] =useFetchHorario()

  const submit = data => {
    const formatData = {
      hora_inicio: dayjs(data.hora_inicio).format('HH:mm:ss'),
      hora_fin: dayjs(data.hora_fin).format('HH:mm:ss')
    }
    createHorario(formatData)
    setCreacion(horas => horas + 1)
  };


  useEffect(() => {
    getAllHorario()

  }, [creacion])
  

  const handleDelete = (id) => {
    deleteHorario(id)
    setTimeout(() => {
      setCreacion(suma => suma + 1);
  }, 500);
  
  };

  const inicio = () =>{
    navigate("/inicioAdmin")
  }

  return isLoading ? (<Loader/>) : (
      <div className="div_inicio_Admin">
        <Header users={users} setUsers={setUsers} />
        <section className="section_crear_horario">
          <article className="article_crear_horario">
            <h2 className="h2_crear">Campo 1</h2>
          </article>
        </section>

        <section>
          <article>
            <form onSubmit={handleSubmit(submit)}>
            <div className="container mt-4">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h1 className="text-center mb-4">Complete el Horario</h1>
                </div>
              </div>
            </div>
              <section className='section_crear_hora'>
                <Controller
                  name='hora_inicio'
                  control={control}
                  defaultValue={dayjs("2022-04-17T15:30")}
                  render={({field}) => (
                    <MobileTimePicker
                  label="Inicio"
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      fullWidth: false,
                    },
                  }}
              />
                  )}
                />
                <Controller
                  name='hora_fin'
                  control={control}
                  defaultValue={dayjs("2022-04-17T15:30")}
                  render={({field}) => (
                    <MobileTimePicker
                  label="Inicio"
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      fullWidth: false,
                    },
                  }}
              />
                  )}
                />
                <button className='buton_crearHorario' type="submit">Enviar</button>
              </section>
            </form>
          </article>
        </section>

        <article className="d-flex justify-content-center mt-4">
  <div className="container">
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-striped table-light">
        <thead>
          <tr className="bg-primary text-white">
            <th className="align-middle text-center">Hora de Inicio</th>
            <th className="align-middle text-center">Hora final</th>
            <th className="align-middle text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {infoApiHorario?.map((item, index) => (
            <tr key={index}>
              <td className="align-middle text-center">{item.hora_inicio}</td>
              <td className="align-middle text-center">{item.hora_fin}</td>
              <td className="align-middle text-center w-auto">
                <button className="btn btn-danger" onClick={() => handleDelete(item.pk_id_horario)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</article>
      </div>
  );
};

export default CrearHorario;
