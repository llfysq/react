// 底部导航
import React, { Component } from 'react'
import "./Floor.css"
import shou from "../../assets/img/tab_home_nor.png"
import me from "../../assets/img/tab_me_nor.png"
import menu from "../../assets/img/tab_menu_nor.png"
import shopping from "../../assets/img/tab_shopping_nor.png"

import shou1 from "../../assets/img/tab_home_hig.png"
import me1 from "../../assets/img/tab_me_hig.png"
import menu1 from "../../assets/img/tab_menu_hig.png"
import shopping1 from "../../assets/img/tab_shopping_hig.png"



export default class Floor extends Component {
    constructor(){
        super()
        this.state={

        }
  
    }
    shou(){
          console.log(this.props)
        // this.props.history.push('/index')
    }
    fen(){
          console.log(this.props)
        // this.props.history.push('/fenglei')
    }
    shopp(){
          console.log(this.props.history)
        // this.props.history.push('/shopping')
    }
    me(){
          console.log(this.props.history)
        // this.props.history.push('/me')
    }
    render() {
        return (
            <div>
            <ul className="Floor">
                <li className="Floor-li" onClick={()=>this.shou()}><img src={shou} alt=""/><p>首页</p></li>
                <li className="Floor-li" onClick={()=>this.fen()}><img src={me} alt=""/><p>分类</p></li>
                <li className="Floor-li" onClick={()=>this.shopp()}><img src={menu} alt=""/><p>购物车</p></li>
                <li className="Floor-li" onClick={()=>this.me()}><img src={shopping} alt=""/><p>我的</p></li>
            </ul>
        </div>
        )
    }
}


