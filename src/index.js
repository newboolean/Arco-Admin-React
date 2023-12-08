/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2023-11-26 21:13:09
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2023-12-08 21:21:33
 * @FilePath: \Arco-Admin-React\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "@arco-design/web-react/dist/css/arco.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
fetch("/jian/subscriptions/recommended_collections")
  .then((response) => response.json())
  .then((res) => console.log(res));
fetch("/zhi/news/latest")
  .then((response) => response.json())
  .then((res) => console.log(res));
