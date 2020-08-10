// 商品详情
import React, { Component } from 'react'
import "./GoodsDetail.css"
import GoBack from "../../../../components/GoBack/GoBack"
import cang from "../../../../assets/img/img/cart_on.png"
export default class GoodsDetail extends Component {
    constructor(props) {
        super(props)      
    }
  
  
    render() {
        const { info } = this.props
        return (
            <div className="goodsDetail">
                {/* 头部导航 */}
                <div className="goodsDetail-nav">
                    <GoBack></GoBack>
                    <p>商品详情</p>
                </div>
                <div className="goodsDetail-con">
                    <img className="goodsDetail-img" src={this.$img + info.img} alt="" />
                    <div className="goodsDetail-info">
                        <p className="goodsDetail-name">{info.goodsname}</p>
                        <div className="goodsDetail-cang">
                            <img src={cang} alt="" />
                            <p>收藏</p>
                        </div>
                    </div>
                    <div className="goodsDetail-jia">
                        <p>￥{info.price}</p>
                        <span>{info.ishot===1?"热卖":""}</span>
                        <span>{info.isnew===1?"新品":""}</span>
                    </div>
                    <del className="goodsDetail-yuan">￥{info.market_price}</del>
                </div>
                {/* react中解析HTML标签的方法 dangerouslySetInnerHTML={{__html:info.description}}*/}
                <div className="goodsDetail-xiang" dangerouslySetInnerHTML={{ __html: info.description }}></div>
            </div>
        )
    }
}
