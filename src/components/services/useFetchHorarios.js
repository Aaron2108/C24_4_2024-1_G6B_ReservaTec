import axios from "axios"
import { useState } from "react";

const baseUrl = 'http://127.0.0.1:8000/api/horarios/'

const useFetchHorario = () =>{
    const [hasError, setHasError] = useState(false);
    const [infoApiHorario, setInfoApi] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getAllHorario = () => {
        setIsLoading(true);
        axios.get(baseUrl)
        .then(res => {
            setInfoApi(Array.isArray(res.data) ? res.data : []);
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
            setInfoApi([]);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    
    const createHorario = (credentials) => {
        setIsLoading(true);
        axios.post(baseUrl, credentials)
        .then(res => {
            setInfoApi(prevInfo => Array.isArray(prevInfo) ? [...prevInfo, res.data] : [res.data]);
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
        
    }
    
    const updateHorario = (id,credentials) => {
        setIsLoading(true);
        axios.put(`${baseUrl}${id}`, credentials)
        .then(res => {
            setInfoApi(prevInfo => prevInfo.map(item => item.pk_id_campo === id ? res.data : item));
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    const deleteHorario = (id) =>{
        setIsLoading(true);
        axios.delete(`${baseUrl}${id}`)
        .then(res => {
            setInfoApi(prevInfo => prevInfo.filter(item => item.pk_id_campo !== id));
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return [getAllHorario , createHorario, updateHorario, deleteHorario,infoApiHorario, isLoading]
}

export default useFetchHorario;