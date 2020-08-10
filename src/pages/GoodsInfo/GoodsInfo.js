import React, { Component } from 'react'
import "./components/GoodsDetail/GoodsDetail.css"
import querystring from "querystring"
import GoodsDetail from "./components/GoodsDetail/GoodsDetail"
import { getGoodsInfo, getCartAdd } from "../../util/request"
import Cart from "./components/Cart/Cart"
import showToast from"../../util/alert"
export default class GoodsInfo extends Component {
    constructor() {
        super()
        this.state = {
            specsattr: [],//属性规格
            info: {},//商品详情
            isShow: true,
            cartList: {//加入购物车要传的值
                uid: "",
                goodsid: "",
                num: 1
            }
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        // console.log(id)
        getGoodsInfo({ id: id }).then(res => {
            const detail = res.data.list[0];
            // 取出规格属性进行转换
            const specsattr = JSON.parse(detail.specsattr)
            // console.log(res)
            this.setState({
                specsattr: specsattr,
                info: detail
            })
        })
    }
    // 点击遮罩层底部白色部分不消失
    show(e) {
        e.stopPropagation()
        this.setState({
            isShow: true
        })
    }
    // 点击遮罩层底部透明部分消失
    hade(e) {
        console.log(e)
        this.setState({
            isShow: false
        })
    }
    // 点击加入购物车按钮
    join() {
        this.setState({
            isShow: true
        })
    }
    // 点击遮罩层的加入购物车
    joinCart() {
        const uid=sessionStorage.getItem("uid")
        const goodsid=this.state.info
        this.setState({
            cartList: {//加入购物车要传的值
                uid: uid,
                goodsid: goodsid,
                num: 1
            }
        })
        getCartAdd(this.state.cartList).then(res => {
            console.log(res)
            if(res.data.code===200){
                showToast("加入成功")
                this.setState({
                    isShow: false
                })
            }else{
                showToast("加入失败")
            }
        })
    }
    render() {
        const { info, isShow } = this.state

        return (
            <div>
                <GoodsDetail info={info}></GoodsDetail>
                {
                    isShow === true ? <Cart {...this.state} hade={(e) => this.hade(e)} show={(e) => this.show(e)} joinCart={() => this.joinCart()}></Cart> : null
                }
                <footer className="Goodsinfo">
                    <button onClick={() => this.join()}>加入购物车</button>
                </footer>
            </div>
        )
    }
}
