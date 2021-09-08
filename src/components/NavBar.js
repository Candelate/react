import React, { Component } from 'react';
import ItemCount from'./ItemCount'

const NavBar =() => {
    return(
    <div>
        <ul className="barraMenu">
            <li>Mi auto</li>    
            <li>Autos a la venta</li>
            <li>Mis datos</li>
        </ul>
        <ItemCount stock = '10' initial= '1' />
     </div>
 ) 
    
}


    





export default NavBar

