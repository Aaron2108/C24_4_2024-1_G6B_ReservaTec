import axios from "axios";
import { useState } from "react";

const baseUrl = 'http://127.0.0.1:8000/api/estados/';

const useFetchEstado = () => {
    const [hasError, setHasError] = useState(false);
    const [infoApiEstado, setInfoApiEstado] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllEstado = () => {
        setIsLoading(true);
        axios.get(baseUrl)
        .then(res => {
            setInfoApiEstado(Array.isArray(res.data) ? res.data : []);
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
            setInfoApiEstado([]);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    
    const createEstado = (credentials) => {
        setIsLoading(true);
        axios.post(baseUrl, credentials)
        .then(res => {
            setInfoApiEstado(prevInfo => Array.isArray(prevInfo) ? [...prevInfo, res.data] : [res.data]);
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    
    const updateEstado = (id, credentials) => {
        setIsLoading(true);
        axios.put(`${baseUrl}${id}`, credentials)
        .then(res => {
            setInfoApiEstado(prevInfo => prevInfo.map(item => item.pk_id_estado === id ? res.data : item));
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const deleteEstado = (id) => {
        setIsLoading(true);
        axios.delete(`${baseUrl}${id}`)
        .then(res => {
            setInfoApiEstado(prevInfo => prevInfo.filter(item => item.pk_id_estado !== id));
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return [getAllEstado, createEstado, updateEstado, deleteEstado, infoApiEstado, isLoading];
};

export default useFetchEstado;
