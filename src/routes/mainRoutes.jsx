import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import App from "../App";
import Error from "../components/Error";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);

export default mainRoutes;
