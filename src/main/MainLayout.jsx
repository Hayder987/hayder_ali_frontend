import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";





const MainLayout = () => {
    return (
        <div className="bg-[#212428] p-2 text-white/90">
          <NavBar></NavBar> 
          <div className="min-h-[calc(100vh-90px)]">
            <Outlet></Outlet> 
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;