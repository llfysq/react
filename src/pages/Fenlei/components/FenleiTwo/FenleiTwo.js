import React, { Component } from 'react'
import { getGoods } from "../../../../util/request"
import { Link } from "react-router-dom"
import GoBack from "../../../../components/GoBack/GoBack"
import "./FenleiTwo.css"
import querystring from "querystring"
export default class FenleiTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fenlist: [],
            id: "",
            catename:""
        }

    }

    componentDidMount() {
        // 获取分类商品
        // 冒号传参
        const id = this.props.match.params.id
        const name = this.props.match.params.name
    console.log(id)
        console.log(name)
        this.setState({
            catename: name
        })
        getGoods({ fid: id }).then(res => {
            this.setState({
                fenlist: res.data.list
            })
        })
    }
    render() {
        const { fenlist, catename } = this.state
        return (
            <div>
                <div className="FenleiTwo-nav">
                    {/* 封装的返回按钮 */}
                    <GoBack></GoBack>
                    <p>{catename}</p>

                </div>
                {
                    fenlist.map(item => {
                        return <div key={item.id} className="List">
                            <img src={item.img} alt="" />
                            <div>
                                <p className="List-name">{item.goodsname}</p>
                                <p className="List-price">￥{item.price}</p>
                                <Link to={"/goodsInfo?id=" + item.id}>
                                    <button className="List-btn">立即抢购</button>
                                </Link>

                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
