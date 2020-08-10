import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import {goodsList,requestGoodsList} from "../../store/index"

import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"



import { getBanner,getIndexGoods,getGoodsInfo } from '../../util/request'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            list:[]
        }
    }
    componentDidMount() {
        getBanner().then(res => {
            var arr = res.data.list;
            arr.forEach(item => {
                item.img = this.$img + item.img
            })
            this.setState({
                banner: arr
            })
        })
        getIndexGoods().then(res=>{
            // console.log(res)
            var arr = res.data.list[0].content;
            arr.forEach(item => {
                item.img = this.$img + item.img
            })
            this.setState({
                list: arr
               
            })
        })
        // getGoodsInfo().then(res=>{
        //     console.log(res)  
    
        //  })
    }


    render() {
        const { banner,list } = this.state
        return (
            <div>
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List list={list}></List>
                
            </div>
        )
    }
}

// const mapStateToProps=(state)=>{
//     return{
//         goodsList:goodsList(state)
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return{
//         requestGoods:()=>dispatch(requestGoodsList())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home)