/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2023-12-08 21:06:48
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2023-12-08 21:14:11
 * @FilePath: \Arco-Admin-React\src\setupProxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/jian", {
      target: "https://www.jianshu.com/asimov",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/jian": "" },
    })
  );
  app.use(
    createProxyMiddleware("/zhi", {
      target: "https://news-at.zhihu.com/api/4",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/zhi": "" },
    })
  );
};
