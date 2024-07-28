import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainWeb = () => {
    return (
        <main className="font-roboto">
            <NavBar />
            <div className="max-w-screen-2xl w-4/5 m-auto">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default MainWeb;