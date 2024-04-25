import { Outlet } from "react-router-dom";
import Navbar from "./navPage/Navbar";
import Footer from "./footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;