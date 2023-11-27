import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Layout from "../pages/Layout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      }
    ]
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router
