import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./Index.css"
// 引入路由组件
import Home from "../Home/Home"
import Shopping from "../Shopping/Shopping"
import Me from "../Me/Me"
import Fenlei from "../Fenlei/Fenlei"


// 引入图片
import home from "../../assets/img/tab_home_nor.png"
import me from "../../assets/img/tab_me_nor.png"
import fenlei from "../../assets/img/tab_menu_nor.png"
import shopping from "../../assets/img/tab_shopping_nor.png"

import home1 from "../../assets/img/tab_home_hig.png"
import me1 from "../../assets/img/tab_me_hig.png"
import fenlei1 from "../../assets/img/tab_menu_hig.png"
import shopping1 from "../../assets/img/tab_shopping_hig.png"

export default class Index extends Component {
    constructor() {
        super()

    }

    render() {
        // 获取到跳转页面的路由地址
        const { pathname } = this.props.location
        return (
            <div className="index">
                {/* 定义路由出口 */}
                <Switch>
                    {/* 定义路由 */}
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/shopping" component={Shopping}></Route>
                    <Route path="/index/me" component={Me}></Route>
                    <Route path="/index/fenlei" component={Fenlei}></Route>
                   
                </Switch>

                {/* 底部导航 */}
                <footer>
                    <NavLink to="/index/home" activeClassName="select">{pathname === "/index/home" ? <img src={home1} alt="" />: <img src={home} alt="" />}首页</NavLink>
                    <NavLink to="/index/fenlei" activeClassName="select">{pathname === "/index/fenlei" ? <img src={fenlei1} alt="" /> : <img src={fenlei} alt="" />}分类</NavLink>
                    <NavLink to="/index/shopping" activeClassName="select">{pathname === "/index/shopping" ? <img src={shopping1} alt="" /> : <img src={shopping} alt="" />}购物车</NavLink>
                    <NavLink to="/index/me" activeClassName="select">{pathname === "/index/me" ? <img src={me1} alt="" /> : <img src={me} alt="" />}我的</NavLink>

                </footer>

            </div>
        )
    }
}
