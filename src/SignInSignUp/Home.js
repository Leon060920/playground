import React from "react";
import './SignInSignUp.css';
import NavScrollExample from "../Components/navbar";
import Footer from "../Components/Footer";

import './Home.css';

function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="back">
            <NavScrollExample/>
            
            <div className="back">
            <h1>Bienvenido a la pagina de inicio</h1>
            <img src="https://media.tenor.com/iLK-fRF4uEEAAAAd/batman-thumbs-up.gif" alt="pam"/>
            <p>Bienvenido: {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">Salir</button>
            <button onClick={deleteAccount} className="delete">Borrar</button>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;