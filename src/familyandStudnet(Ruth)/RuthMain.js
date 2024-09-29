
import React from 'react';
import Header from './Componet/Header';  // Import your Header component
import Footer from './Componet/Footer';  // Import your Footer component
import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom

function Parent_main() {
  return (
    <div>
       <Header />
        <Outlet /> 
      <Footer/>

    </div>
  );
}


export default Parent_main;

