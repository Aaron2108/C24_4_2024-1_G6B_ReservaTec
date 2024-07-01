import axios from "axios";
import { useState } from "react";

const baseUrl = 'http://127.0.0.1:8000/api/usuarios/';

const useFetchUsuario = () => {
    const [hasError, setHasError] = useState(false);
    const [infoApi, setInfoApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllUsuario = () => {
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
    };
    
    const createUsuario = (credentials) => {
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
    };
    
    const updateUsuario = (id, credentials) => {
        setIsLoading(true);
        axios.put(`${baseUrl}${id}`, credentials)
        .then(res => {
            setInfoApi(prevInfo => prevInfo.map(item => item.pk_id_usuario === id ? res.data : item));
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

    const deleteUsuario = (id) => {
        setIsLoading(true);
        axios.delete(`${baseUrl}${id}`)
        .then(() => {
            setInfoApi(prevInfo => prevInfo.filter(item => item.pk_id_usuario !== id));
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

    return [getAllUsuario, createUsuario, updateUsuario, deleteUsuario, isLoading, infoApi];
};

export default useFetchUsuario;
