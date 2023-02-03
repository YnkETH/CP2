/* 7️⃣ ***COMPONENTE BANDCARD*** 7️⃣

Implementar el componente BandCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar una banda específica.

IMPORTANTE
❗Este componente debe ser de funcional.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import React from 'react';


const bandPush = (props) => {

   return (
      <div className='card'>
         <p>{props.name}  {props.origin}  {props.description}  {props.tickets}</p>    
   </div>
   )
};

export default bandPush;
