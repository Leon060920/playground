import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignInSignUp.css';


function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")


   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })



   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
      }
   }

   

   const handleSignIn=()=>{
    if (email.current.value===localEmail&&password.current.value===localPassword ){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Constraseña Incorrecta")
    }
   }

    return(
        <div className="thing">
            {showHome?<Home/>:
            (show?
                <div className="container">
                        <h1>Hola {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password}
                           
                            onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                          handleSignIn()
                                        }
                                      }}
                            />
                        </div>
                        <button onClick={handleSignIn}>Ingresar</button>
                </div>
                :
                <div className="container">
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} 
                            
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    handleClick()
                                }
                              }}
                            />
                        </div>
                        <button onClick={handleClick}>Registrar</button>
                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;