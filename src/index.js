import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes,  BrowserRouter} from "react-router-dom";
import './global.css';
import Adoption from './pages/Adoption/adoption';
import Home from './pages/Home';
import Details from './pages/Details/details';
import Form from './pages/Form/form';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/adoption" element={<Adoption />}/>
      <Route path="/details/:message" element={<Details />}/>
      <Route path="/form" element={<Form />}/>
    </Routes>
  </BrowserRouter>
);


