import { Outlet } from "react-router-dom";
import NavBar from "../shared/navbar/NavBar";
import Footer from "../shared/footer/Footer";
import QuickRequest from "../components/quickRequest/QuickRequest";


const MainLayout = () => {
    return (
        <div>
            {/* NavBar */}
            <NavBar></NavBar>
            {/* NavBar end */}

            {/* Outlet */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer end */}

            {/* Emergency blood */}
            <QuickRequest></QuickRequest>
            {/* Emergency blood end */}
        </div>
    );
};

export default MainLayout;
