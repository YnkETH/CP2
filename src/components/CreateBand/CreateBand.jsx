/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/


import React, { useState } from 'react'
import * as actions from "../../redux/actions/index";
import { useDispatch } from 'react-redux';
import Banda from "../BandAgregate/bandAgregate"

export function validate (inputs) {
      const errors = {};
    
      if(inputs.name.length>30 )
       errors.name = "Nombre u Origen demasiado largo"
      
      if(inputs.origin.length>30 )
      errors.origin = "Nombre u Origen demasiado largo"
      
      if(inputs.tickets<0 )
      errors.tickets = "Los tickets deben ser un numero positivo"
      

      return errors;
    }

const CreateBand = () => {
      const dispatch = useDispatch();
      const [inputs, setInputs] = React.useState({
            name: '',
            origin: '',
            description: '',
            tickets: 0,
          });

      const [inputs2, setInputs2] = React.useState([]);    

      const [errors, setErrors] = React.useState({
            name: '',
            origin: '',
            description: '',
            tickets: 0,
      });

      const handleChange = (e) => {
      setInputs({
            ...inputs,
            [e.target.name]: e.target.value
            });
      
      setErrors(
            validate({
            ...inputs,
            [e.target.name] : e.target.value
            })
      )       
      }

      //console.log(inputs)
      
      

      const createBand = (e) => {
            e.preventDefault();
            //llamamos la acción  
            setInputs2(
                  [...inputs2,inputs]                                                             
            )
            if (!(inputs.name.length > 30 || inputs.origin.length > 30 || inputs.tickets < 0)){          
                  dispatch(actions.createBands(inputs))
                  setInputs({
                        name: '',
                        origin: '',
                        description: '',
                        tickets: 0,
                  })
            }     
      } 
   return (
      <div>
            <form onSubmit={createBand}>
            <label>Name: </label>
            <input 
                  type="text"
                  name= "name"
                  value={inputs.name}
                  onChange={handleChange}/>
                  {errors.name? <p>{errors.name}</p>:""}
            
            <label>Origin: </label>
            <input 
                  type="text"
                  name= "origin"
                  value={inputs.origin}
                  onChange={handleChange}/>
                   {errors.origin? <p>{errors.origin}</p>:""}

            <label>Description: </label>
            <textarea
                  name= "description"
                  value={inputs.description}
                  onChange={handleChange}/>

            <label>Tickets: </label>
            <input 
                  type="number"
                  name= "tickets"
                  value={inputs.tickets}
                  onChange={handleChange}/>
                   {errors.tickets? <p>{errors.tickets}</p>:""}

            <button type='submit' >Create Band</button>
                        
      </form>

             <Banda addBand={inputs2}>                  
            </Banda>
      </div>
   )
};

export default CreateBand;
