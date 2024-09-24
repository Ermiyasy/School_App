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
import Parents from './Admin/Page/Parents';
import Message from './Admin/Page/Message';
import Payment from './Admin/Page/Payment';
import Announcement from './Admin/Page/Announcement';
import Setting from './Admin/Page/Setting';
import Profile from './Admin/Page/Profile';
import Logout from './Admin/Page/Logout';


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
          <Route path="Admin_Home" element ={<Admin_Home />} />  {/* Default content for Admin */}
          <Route path="Teacher" element={<Teacher />} /> {/* This will render Teacher inside Admin_main's Outlet */}
          <Route path="Student" element={<Student />} />
          <Route path="Parents" element={<Parents />} />
          <Route path="Message" element={<Message />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Announcement" element={<Announcement />} />
          {/* The other side Minu */}
           <Route path="Profile" element={<Profile/>}/>
           <Route path="Setting" element={<Setting/>}/>
           <Route path="Announcement" element={<Announcement/>}/>
           <Route path="Logout" element={<Logout/>}/>
        </Route>

        {/* Other Routes */}
        <Route path="/HomeRoom" element={<FikerMain />} />
        <Route path="/Family" element={<RuthMain />} />
      </Routes>
    </div>
  );
}

export default App;
