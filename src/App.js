import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";  // Ensure you have react-router-dom installed

import FikerMain from "./HomeRoom(fiker)/FikerMain";
import RuthMain from "./familyandStudnet(Ruth)/RuthMain";

import Admin_main from "./Admin/Hageez/Admin_main";
import Admin_Home from './Admin/Page/Admin_Home';

import Home from './Home_Page/Home';
import LoginCard from './Home_Page/LoginCard';
import Feedback from './Home_Page/Feedback';
import About from './Home_Page/About';
import Contact from './Home_Page/Contact';
import Teacher from './Admin/Page/Teacher';
import Student from './Admin/Page/Student';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} >
          <Route index element={<LoginCard />} /> {/* Default route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/Admin_main" element={<Admin_main />}>
          <Route index element={<Admin_Home />} />  {/* Default content for Admin */}
          <Route path="/Admin_main/Teacher" element={<Teacher />} /> {/* This will render Teacher inside Admin_main's Outlet */}
          <Route path="/Admin_main/Student" element={<Student />} />
        </Route>

        {/* Other Routes */}
        <Route path="/HomeRoom" element={<FikerMain />} />
        <Route path="/Family" element={<RuthMain />} />
      </Routes>
    </div>
  );
}

export default App;
