import axios from "axios"
import { useState } from "react";

const baseUrl = 'http://127.0.0.1:8000/api/carreras/'

const useFetchCarrera = () =>{
    const [hasError, setHasError] = useState(false);
    const [infoApiCarrera, setInfoApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllCarrera = () => {
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
    
    const createCarrera = (credentials) => {
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
    
    const updateCarrera = (id,credentials) => {
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

    const deleteCarrera = (id) =>{
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

    return [getAllCarrera , createCarrera, updateCarrera, deleteCarrera, infoApiCarrera, isLoading]
}

export default useFetchCarrera;