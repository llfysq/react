// 购物车
import React, { Component } from 'react'
import "./Shopping.css"
import Content from "./components/Content/Content"

import nor from "../../assets/img/editor_nor.png"
import hig from "../../assets/img/editor_hig.png"

import {getCartList} from "../../util/request"
export default class Shopping extends Component {
    componentDidMount(){
        getCartList().then(res=>{
            
        })
    }
    render() {
        return (
            <div>
            {/* 头部 */}
            <div className="Shopping-nav">购物车</div>
            {/* 添加进来的商品 */}
            <Content></Content>
            <div className="Shopping-boom">
                {/* 全选 */}
                <div className="Shopping-quan">
                    <input type="radio"/>
                    <p>全选</p>
                </div>
                {/* 编辑 */}
                <div className="Shopping-bian">
                    <div>
                    <img src={nor} alt=""/>
                    <p>编辑</p>
                    </div>
                    <div className="Shopping-he">
                        <p>合计:</p>
                        <p>(不含运费)</p>
                    </div>
                </div>
                {/* 结算 */}
                <div className="Shopping-btn"><button>去结算</button></div>
            </div>
        </div>
        )
    }
}

