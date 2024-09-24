import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import App from "../App";
import Error from "../components/Error";
import Body from "../components/Body";
import RestaurantMenu from "../pages/RestaurantMenu";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default mainRoutes;
