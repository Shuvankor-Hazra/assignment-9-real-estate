import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/propertyDetails/:id",
                element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
                loader: () => fetch('/realEstates.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/updateProfile",
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: "/contact",
                element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
])

export default router;