import React from 'react';
import { useForm } from 'react-hook-form';
import Header from "../NavBar/Header";
import './horario.css';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CrearHorario = ({ users, setUsers }) => {
  const { register, handleSubmit } = useForm();
  const submit = data => {
    console.log(data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            <h1>Complete el Horario</h1>
              <section className='section_crear_hora'>
                <MobileTimePicker
                  label="Inicio"
                  defaultValue={dayjs('2022-04-17T15:30')}
                  renderInput={(params) => <TextField {...params} />}
                />
                <MobileTimePicker
                  label="Fin"
                  defaultValue={dayjs('2022-04-17T15:30')}
                  renderInput={(params) => <TextField {...params} />}
                />
                <button className='buton_crearHorario' type="submit">Enviar</button>
              </section>
            </form>
          </article>
        </section>
      </div>
    </LocalizationProvider>
  );
};

export default CrearHorario;
