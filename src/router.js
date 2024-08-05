import {createBrowserRouter,} from "react-router-dom";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: '/packages',
        element: <Packages/>
    },
    {
        path: '/about-us',
        element: <AboutUs/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
]);