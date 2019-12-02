import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App.js";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import axios from "axios";
import "moment/locale/zh-cn";
import "./css/style.css";

moment.locale("zh-cn");
React.Component.prototype.axios = axios;

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
