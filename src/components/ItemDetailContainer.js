    import React, { Component } from 'react';
    

    function ItemDetailContainer() {
        const autos = [{
            Marca : 'Volkswagen',
            Año : 2019,
            Kilometros : 145.000,
            Foto : "./curso-react/my-app/fotos/auto1/fordfiesta.webp" 
        
        },{
            Marca : 'Ford',
            Año : 2018,
            Kilometros : 150.000,
            Foto :  null
        }];
        const getAutos = () => {
            return new Promise ((resolve,reject) => {
                setTimeout(() => {
                resolve (autos);   
           })
       }, 2000)

       ;   
     
   }  
    getAutos(autos)
    .then(() => console.log ("HOLA"))   
  
    return (
        <div></div>
    )
 }
 
   


   export default ItemDetailContainer