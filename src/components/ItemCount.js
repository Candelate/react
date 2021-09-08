import React, { useState } from 'react';


function ItemCount({ stock, initial,  onAdd }) {
    
    const [cuenta, setCuenta] = useState(0)

    const sumar = () => {
        if (cuenta < stock){
        setCuenta(cuenta +1)   
        }else {
            console.log ('no hago nada')
        }
    }
    const restar = () => {
        if (cuenta >0){
        setCuenta(cuenta -1)   
        }else {
            console.log ('no hago nada')
        }
    }
    
    return(
        <div>
            <p>Clikeaste {cuenta} a veces</p>
            <button onClick={sumar}> Agregar Auto</button>
            <button onClick={restar}> Restar Auto</button>
            
        </div>
    )
   }

export default ItemCount