import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Shop from './pages/Shop'; 
import Footer from './pages/Footer'; 
import Banner from './pages/Banner'; 
import Header from './pages/Header'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Shop />
    <Banner/>
    <Footer/>
  </React.StrictMode>
);
