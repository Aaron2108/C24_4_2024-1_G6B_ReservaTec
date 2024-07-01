import axios from "axios";
import { useState } from "react";

const baseUrl = 'http://127.0.0.1:8000/api/roles/';

const useFetchRol = () => {
    const [hasError, setHasError] = useState(false);
    const [infoApiRol, setInfoApiRol] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllRol = () => {
        setIsLoading(true);
        axios.get(baseUrl)
        .then(res => {
            setInfoApiRol(Array.isArray(res.data) ? res.data : []);
            setHasError(false);
        })
        .catch(err => {
            console.log(err);
            setHasError(true);
            setInfoApiRol([]);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const createRol = (credentials) => {
        setIsLoading(true);
        axios.post(baseUrl, credentials)
        .then(res => {
            setInfoApiRol(prevInfo => Array.isArray(prevInfo) ? [...prevInfo, res.data] : [res.data]);
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

    const updateRol = (id, credentials) => {
        setIsLoading(true);
        axios.put(`${baseUrl}${id}`, credentials)
        .then(res => {
            setInfoApiRol(prevInfo => prevInfo.map(item => item.pk_id_rol === id ? res.data : item));
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

    const deleteRol = (id) => {
        setIsLoading(true);
        axios.delete(`${baseUrl}${id}`)
        .then(res => {
            setInfoApiRol(prevInfo => prevInfo.filter(item => item.pk_id_rol !== id));
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

    return [getAllRol, createRol, updateRol, deleteRol, infoApiRol, isLoading];
};

export default useFetchRol;
