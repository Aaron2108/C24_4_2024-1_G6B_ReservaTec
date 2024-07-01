import Header from "../NavBar/Header";
import '../Login/login.css'
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/users/userSlice";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = ({setusers}) => {
    const clientID = "637437412249-1o07v7e7tqnbbs1sjhjachd9ltdlklfl.apps.googleusercontent.com"; 
    const navigate =useNavigate()
    const [alertLogin, setAlertLogin] = useState(false);


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
            
            window.localStorage.setItem('loginAdminUser', JSON.stringify(response.profileObj));
            navigate("/inicioAdmin")
        } else {
            console.log("Correo electrónico no válido.");
            setAlertLogin(true);
            setTimeout(() =>{
                setAlertLogin(false);
            },5000);
        }
    };
    const onClickError = () =>{
        setAlertLogin(false);
    }

    const onFailure = () => {
        console.log("Something went wrong");
    };

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loginAdminUser')
        if(loggedUserJSON){
            const userLocal = JSON.parse(loggedUserJSON);
            setusers(userLocal);
        }
    }, [])
    return (
        <div className="div_login">
            <header className="header_login">
            <img className="img_logo" src="/img/TECSUP.png" alt="" />
            </header>
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
            {
                alertLogin? <div class="error">
    <div class="error__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
    </div>
    <div class="error__title">Credenciales incorrectas</div>
    <div onClick={onClickError} class="error__close"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div>
</div> : null
            }
        </div>
    );
};

export default Login;
