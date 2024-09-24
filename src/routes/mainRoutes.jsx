import { createBrowserRouter } from "react-router-dom";
// import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import App from "../App";
import Error from "../components/Error";
import Body from "../components/Body";
import RestaurantMenu from "../pages/RestaurantMenu";
import { lazy, Suspense } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const AboutUs = lazy(() => import("../pages/AboutUs"));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
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
