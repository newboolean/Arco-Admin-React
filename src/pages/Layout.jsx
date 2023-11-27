/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2023-11-27 20:01:57
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2023-11-27 20:05:41
 * @FilePath: \Arco-Admin-React\src\pages\Layout.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link, Outlet } from "react-router-dom"
const Layout = () => (
    <div>
        <div className="left">
            <Link to='/'>首页</Link>
            <Link to='/about'>关于</Link>
        </div>
        <div className="right">
            <Outlet />
        </div>
    </div>
)
export default Layout