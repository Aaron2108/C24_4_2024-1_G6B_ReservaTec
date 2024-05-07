import Header from "./Header";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/users/userSlice";
import { Link } from 'react-router-dom';


const Login = () => {
    const clientID = "637437412249-1o07v7e7tqnbbs1sjhjachd9ltdlklfl.apps.googleusercontent.com"; 

    const [user, setUser] = useState({});   
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const start = () =>{
            gapi.auth.init({
                clientId: clientID,
            });
        };
        gapi.load("client:auth2", start);
    }, []);

    const onSuccess = (response) => {
        if (response.profileObj.email.endsWith("@tecsup.edu.pe")) {
            setUser(response.profileObj);
            dispatch(addUser(response.profileObj)); // Añadir el usuario al estado Redux
        } else {
            console.log("Correo electrónico no válido.");
        }
    };

    const onFailure = () => {
        console.log("Something went wrong");
    };

    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            window.location.href = "/inicioAdmin";
        }
    }, [user, dispatch]);

    return (
        <div className="div_login">
            <Header />
            <section className="section_login">
                <article className="article_login">
                    <h1>Iniciar sesión</h1>
                    <GoogleLogin
                        clientId={clientID}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                    />
                </article>
            </section>
        </div>
    );
};

export default Login;
