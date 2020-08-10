import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入公共样式
import "./assets/css/reset.css"
// 引入rem
import "./assets/js/rem"
// 引入antd-mobile框架的样式
import 'antd-mobile/dist/antd-mobile.css';
// 哈希路由模式
import { HashRouter} from "react-router-dom"
// 设置图片的路径前缀
Component.prototype.$img="http://localhost:3000"
ReactDOM.render(
  // 设置路由模式
  
  <HashRouter>
     <App />
  </HashRouter>
 ,
  document.getElementById('root')
);

