import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";  // Ensure you have react-router-dom installed

import Admin_main from "./Admin/Hageez/Admin_main";
import FikerMain from "./HomeRoom(fiker)/FikerMain";
import RuthMain from "./familyandStudnet(Ruth)/RuthMain";
function App() {
  return (
    <div className="App">
      <h1>This is the App.js file</h1>
      {/* Define routes here */}
      <Routes>
      
        <Route path="" element={<FikerMain />} />
        <Route path="" element={<Admin_main />} />
        <Route path="" element={<RuthMain />} />
      </Routes>
    </div>
  );
}

export default App;
