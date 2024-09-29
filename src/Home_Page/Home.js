
import Navbar from '../Home_Page/Home_page_comp/Navbar';
import { Outlet } from "react-router-dom";
import Footer from "../Admin/Componet/Footer";

function Home(){
  
  return(
      <>
        <Navbar />
          <Outlet/>
        <Footer/>
        </>
  );

}
export default Home