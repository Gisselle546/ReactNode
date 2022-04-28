import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import Track from './pages/track';


function App() {
  return (
   <>
    <BrowserRouter>
   <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/track" element={ <Track/> } />
        </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
