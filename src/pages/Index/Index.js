import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import Floor from "../../components/Floor/Floor"
import { getBanner,getIndexGoods } from '../../util/request'

export default class Index extends Component {
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
            var arr = res.data.list[0].content;
            arr.forEach(item => {
                item.img = this.$img + item.img
            })
            this.setState({
                list: arr
            })
        })
    }
    render() {
        const { banner,list } = this.state
        return (
            <div>
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List list={list}></List>
                <Floor></Floor>
            </div>
        )
    }
}
