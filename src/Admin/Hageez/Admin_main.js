import React from 'react';
import Header from '../Componet/Header';  // Import your Header component
import Footer from '../Componet/Footer';  // Import your Footer component
import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import Admin_Home from '../Page/Admin_Home';

function Admin_main() {
  return (
    <div>

      <Header />
        <Outlet /> 
  
      
    </div>
  );
}

export default Admin_main;
