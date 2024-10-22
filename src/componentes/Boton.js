import React from "react";


function Boton({ texto, esBotonClic,manejarClic}) {

    return(
        <botton
        className={esBotonClic ? 'boton-clic':'boton-reiniciar'}
        onclick={manejarClic}>
        {texto}

        </botton>
    );
}
export default Boton