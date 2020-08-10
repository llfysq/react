import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Index from "./pages/Index/Index"
import GoodsInfo from "./pages/GoodsInfo/GoodsInfo"
import FenleiTwo from "./pages/Fenlei/components/FenleiTwo/FenleiTwo"
export class App extends Component {
  render() {
    return (
      <div>
        {/* 定义路由出口 */}
        <Switch>
          {/* 定义路由 */}
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/index" component={Index}></Route>
            <Route path="/goodsInfo" component={GoodsInfo}></Route>
            <Route path="/fenleTwo/:id/:name" component={FenleiTwo}></Route>

            <Redirect to="/login"></Redirect>
        </Switch>
      </div>
    )
  }
}

export default App
