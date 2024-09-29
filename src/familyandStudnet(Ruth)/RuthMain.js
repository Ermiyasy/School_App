<<<<<<< Updated upstream

function RithMain() {
  return (
    <div className="main">
       Ruthmain.js Feel free to use the folder
=======
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
>>>>>>> Stashed changes
    </div>
  );
}

<<<<<<< Updated upstream
export default RithMain;
=======
export default Parent_main;
>>>>>>> Stashed changes
