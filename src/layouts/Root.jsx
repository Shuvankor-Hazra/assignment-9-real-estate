import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto font-inter px-3 md:px-0">
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;