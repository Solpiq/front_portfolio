import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./routes/Home"
import ExpLaboral from "./routes/Experiencias"
import Cubos from './components/Scena3d'



function App() {
  return (
    <>
      <Routes>
        <Route path= '/'element={<Home/>}/>
        <Route path= '/experiencias'element={<ExpLaboral/>}/>
        <Route path= '/miScene'element={<Cubos/>}/>
        

      </Routes>
    </>
  );
}

export default App;
