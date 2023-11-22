import React, {useState} from 'react'
import './Contador.css'




const Contador = () => {

const  [contador,setContador] = useState(0);




   const increment = () => {
        setContador(contador + 1)
    }

    const decrement = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }

    }


    const multi = () => {
        setContador(contador * 5)
    }
    const reset = () => {
        setContador(0)
    }


return(
    <div className="contador-container">
      <p className="contador-text">Contador: {contador}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={multi}>Multiplicar</button>
      <button onClick={reset}>Reset</button>
    </div>
    
    )
    
};

export default Contador;
