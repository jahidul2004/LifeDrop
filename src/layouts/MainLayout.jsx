import { Outlet } from "react-router-dom";
import NavBar from "../shared/navbar/NavBar";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
    return (
        <>
            {/* NavBar */}
            <NavBar></NavBar>
            {/* NavBar end */}

            {/* Outlet */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer end */}
        </>
    );
};

export default MainLayout;
