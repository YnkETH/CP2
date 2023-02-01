/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para algunos componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente BandDetail debe renderizarse en la ruta "/band/:id".
🟢 El componente CreateBand debe renderizarse en la ruta "/band/create".
*/
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import BandDetail from "./components/BandDetail/BandDetail.jsx";
import React from "react";
import CreateBand from "./components/CreateBand/CreateBand.jsx";


import { Routes, Route} from "react-router-dom";

const App = () => {
   return( <div>
      <Nav url="">      </Nav>     
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/band/:id' element={<BandDetail/>}/>
      <Route path='/band/create' element={<CreateBand/>}/>
      </Routes>

      </div>
      )
};
export default App;
