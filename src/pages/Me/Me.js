// 我的
import React from 'react'
import "./Me.css"
import Floor from "../../components/Floor/Floor"

import tou from "../../assets/img/1.jpg"
import dai from "../../assets/img/icon_refund.png"
import keep from "../../assets/img/keep.png"
import shezhi from "../../assets/img/me-she.gif"
import info from "../../assets/img/me-info.jpg"

export default function Me() {
    return (
        <div className="Me">
            <div className="Me-ge">
                <img src={shezhi} alt=""/>
                <p>个人中心</p>
                <img src={info} alt=""/>
            </div>

            <div className="Me-yonghu">
                <div className="Me-yong">
                    <div className="Me-hu"><img src={tou} alt="" /></div>
                </div>
                <p className="Me-p">小不点儿</p>
                <div className="Me-shou"><img src={keep} alt="" />我的收藏（5）</div>

            </div>

           
            <div className="Me-con"> 
                <div className="Me-ding">
                    <p className="Me-dingw">我的订单</p>
                    <p className="Me-dingk">查看订单</p>
                    </div>
                <hr />
                <ul className="Me-ul">
                    <li>
                        <img src={dai} alt="" />
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={dai} alt="" />
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={dai} alt="" />
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={dai} alt="" />
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={dai} alt="" />
                        <p>待发货</p>
                    </li>
                </ul>
            </div>
            <div className="Me-shouhuo">
                <p>收货地址管理</p>
            </div>
            <Floor></Floor>
        </div>
    )
}
