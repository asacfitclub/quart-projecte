import {React, useState} from 'react'
import './App.css';

function FichaRey({nombre, color, precio, url, setTotal}) {

const [visible, setVisible] = useState(true);

const comprar = (elemento) => {
    setTotal((e)=>e+precio);
    elemento.target.parentNode.style.display="none";
}

  return (

    <>
        <div style={{backgroundColor : color}} className='rey'>
            <p>{nombre}</p>
            <img src={url}></img>
            <p>Precio <br/> {precio}€ </p>
            <button onClick={comprar}>Comprar</button>
        </div>
    </>
  )
}

export default FichaRey