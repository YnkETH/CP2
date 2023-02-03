/* 8️⃣ ***COMPONENTE BANDDETAIL*** 8️⃣

Implementar el componente BandDetail. En este ejercicio tendrás que renderizar las diferentes propiedades 
de la banda.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" de la banda cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos de la banda correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗Tienes que usar hooks.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/

import React from 'react';
import * as actions from "../../redux/actions/index";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BandDetail = (props) => {
      
const  bandId  = useParams().id

      const dispatch = useDispatch();
      const bands = useSelector(state => state.bandDetail)
     
      React.useEffect(() => {
        dispatch(actions.getBandDetail(bandId))   
         }, [dispatch])

         
   return <div>
       <h1>{bands.name}</h1>
      <img src={bands?.image} alt={bands.name}></img>
      <h5>Entradas disponibles: {bands?.tickets}</h5>
      <h5>Fecha del evento: {bands?.functionDate}</h5>
      <h5>Origen de la banda: {bands?.origin}</h5>
      <h5>Integrantes: {bands?.members.join(" ")} </h5>
      <h3>{bands?.description}</h3>
   </div>;
};

export default BandDetail;
