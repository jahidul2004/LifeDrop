import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import FindBlood from "../pages/FindBlood/FindBlood";
import Register from "../pages/register/Register";

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
        ],
    },
]);

export default router;
