import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import mainRoutes from "./routes/mainRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={mainRoutes} />
);
