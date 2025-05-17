import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import FindBlood from "../pages/FindBlood/FindBlood";
import Register from "../pages/register/Register";
import Emergency from "../pages/emergencyBlood/Emergency";
import Dashboard from "../pages/dashboard/DashBoard";
import DashLayout from "../layouts/DashLayout";
import Organization from "../pages/dashboard/SideMenu/Organization";
import Doner from "../pages/dashboard/SideMenu/Doner";
import Admin from "../pages/dashboard/SideMenu/Admin";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/find-blood",
                element: <FindBlood></FindBlood>,
            },
            {
                path: "/registration",
                element: <Register></Register>,
            },
            {
                path: "/emergency",
                element: <Emergency></Emergency>,
            },
            {
                path: "/dashboard",
                element: <DashLayout/>,
                children: [
                    {
                        path:"/dashboard",
                        element: <Dashboard/>
                    },
                    {
                        path: "/dashboard/organization",
                        element: <Organization />
                    },
                    {
                        path: "/dashboard/doner",
                        element: <Doner />
                    },
                    {
                        path: "/dashboard/admin",
                        element: <Admin/>
                    },


                ]

            },





        ],
    },
]);

export default router;
