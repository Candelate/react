import React from 'react';


function Item() {

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
//     const getAutos = () => {
//         return new Promise ((resolve,reject) => {
//             setTimeout(() => {
//             resolve (autos);   
//         })
//     }, 2000)
// }

//     getAutos()
//     . then((datos de autos) => console.log (datos));

    return(
        <div>
        <img class="autos" src="./curso-react/my-app/fotos/auto1/fordfiesta.webp" alt=""/>
        <h3>Ford Focus</h3>
    </div>

 )};

 

 export default Item




  