import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/reset.css"
import "./assets/js/rem"
import { HashRouter} from "react-router-dom"

ReactDOM.render(
  // 设置路由模式
  <HashRouter>
     <App />
  </HashRouter>
 ,
  document.getElementById('root')
);

