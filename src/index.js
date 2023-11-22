import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignInSignupWithLocalStorage from './SignInSignUp/SignInSignUp';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavScrollExample from './Components/navbar';
import Home from './SignInSignUp/Home';
import MiJSON from './Components/Fetch';
import Contador from './Components/Contador';
import Comparasion from './Components/Comparasion';
import Carrusel from './Components/Carrusel';

const router = createBrowserRouter([
    {
        path:"/",
        element: <SignInSignupWithLocalStorage />,
        errorElement: <h1>Esta Pagina no existe bro</h1>,
    },
    {
        path:"/navbar",
        element: <NavScrollExample />,
    },
    {
        path:"/home",
        element: <Home/>,
    },
    {
        path:"/fetch",
        element: <MiJSON/>
    },
    {
        path:"/contador",
        element: <Contador/>
    },
    {
        path:"/comparasion",
        element: <Comparasion/>
    },
    {
        path:"/carrusel",
        element: <Carrusel/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    
    <RouterProvider router={router}/>

</React.StrictMode>
    
);
