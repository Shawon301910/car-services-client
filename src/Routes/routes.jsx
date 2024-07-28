import { createBrowserRouter } from "react-router-dom";
import MainWeb from "../Main-web/MainWeb";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainWeb></MainWeb>,
    },
]);

export default router;