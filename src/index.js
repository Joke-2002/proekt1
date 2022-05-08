import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';
import Homenavbar from "./Homenavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf_dok from "./Pdf_dok";
import Admin from './Admin'
// import Modal from './Modal'
// import Cards from './rezerv';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Homenavbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/admin' element={<Admin/>} />
        {/* <Route path="/admin" element={<Modal/>} / */}
        {/* <Route path="/cards" element={<Cards />} /> */}
        <Route path="/pdf_dok" element={<Pdf_dok />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
