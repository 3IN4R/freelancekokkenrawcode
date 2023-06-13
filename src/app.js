import React from "react";
import {Routes, Route} from 'react-router-dom';
import Contact from './pages/contact'
import Home from "./pages/home";
import Menu from './pages/menu';
import Description from "./pages/description";
import "./index.css"

function App() { 
    return (

           <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/Menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/description" element={<Description />} />
            <Route path="/contact" element={<Contact />} />
            
           </Routes> 
           
    );
}

export default App