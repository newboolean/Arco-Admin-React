import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import NotFound from "../components/pages/NotFound.jsx";
import Login from "../components/pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
export default router
