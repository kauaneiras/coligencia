import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from "./pages/0Inicio";
import SobreMim from "./pages/1SobreMim";
import Habilidades from "./pages/2Habilidades";
import Projetos from "./pages/3Projetos";
import Experiencias from "./pages/4Experiencias";
import Formacao from "./pages/5Formacao";
import Contato from "./pages/6Contato";

export default function App() {
  const [color, setColor] = useState(localStorage.getItem('color') || 'ffffff');
  const [hoverColor, setHoverColor] = useState(null);

  useEffect(() => {localStorage.setItem('color', color);}, [color]);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
          <Route path='/sobre-mim' element={<SobreMim color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
          <Route path='/habilidades' element={<Habilidades color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
          <Route path='/projetos' element={<Projetos color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
          <Route path='/experiencias' element={<Experiencias color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
          <Route path='/formacao' element={<Formacao color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
          <Route path='/contato' element={<Contato color={color} setColor={setColor} hoverColor={hoverColor} setHoverColor={setHoverColor}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
