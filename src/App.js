import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";  // Ensure you have react-router-dom installed

import FikerMain from "./HomeRoom(fiker)/FikerMain";
import RuthMain from "./familyandStudnet(Ruth)/RuthMain";

import Admin_main from "./Admin/Hageez/Admin_main";
import Admin_Home from './Admin/Page/Admin_Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Admin_main />} >
           
        </Route>
        <Route path="" element={<FikerMain />} />
        <Route path="" element={<RuthMain />} />
      </Routes>
    </div>
  );
}

export default App;
