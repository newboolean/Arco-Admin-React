/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2023-11-26 22:38:01
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2023-12-07 21:32:31
 * @FilePath: \Arco-Admin-React\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.js";
import Layout from "../pages/layout/index.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/login/index.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/Login' />,
    children: [
      {
        path: '/Home',
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
