import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="text-3xl font-bold text-center">Hello world!</div>
        ),
    },
]);

export default router;
