/*5️⃣ ***COMPONENTE HOME*** 5️⃣

Implementar el componente Home. Este deberá renderizar una lista de eventos (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <BandCard />.

IMPORTANTE
❗Este componente debe ser de clase.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './home.css';
import { Component } from 'react';
import React from 'react'
import { connect } from 'react-redux';
import  mainImage   from '../../img-cp2/main-image-cp2.jpg';
import * as actions from "./../../redux/actions/index"
import BandCard from '../BandCard/BandCard';

export class Home extends Component {
   componentDidMount() {
      this.props.getAllBands();
   } 
 
   render() {
      return (
      
         <div className='home'>
         <h1>Henry Palooza</h1>
         <img src={mainImage} alt="henry-palooza-logo"></img>
         <h3>Bandas</h3>
         <h4>Checkpoint M2</h4>

               <ul>
               {this.props.bands && this.props.bands.map((c)=> (
                  <BandCard key={c.id}
                  id={c.id}
                  name={c.name}
                  image={c.image}
                  functionDate={c.functionDate}>                   
                  </BandCard>
               ))}
            </ul>
      </div>
      
   )}
}

export const mapStateToProps = (state) => {
  return{
   bands: state.bands
  }
};

export const mapDispatchToProps = (dispatch) => {
   return{
      getAllBands: function(){
         dispatch(actions.getAllBands())
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
