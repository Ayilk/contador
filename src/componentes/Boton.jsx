import React from "react";
import '../estilos/Boton.css'

export default function Boton({texto, click, handleClick}){
    return(
        <button 
          className={ click? "boton-click": "boton-reiniciar" }
          onClick={handleClick} >
            {texto}
        </button>
    )
}