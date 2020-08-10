// 分类
import React, { Component } from 'react'
import "./Fenlei.css"
import { getCateTree } from "../../util/request"


export default class Fenlei extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            n: 0
        }
    }
    componentDidMount() {
        // 获取分类树形结构
        getCateTree().then(res => {
            console.log(res)
            this.setState({
                list: res.data.list
            })
        })

        
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    // 跳转到二级分类页面
    toFenleiTwo(id,name) {
        // this.props.history.push("/fenleTwo/?"+id+"/"+name)
        // 冒号传参
        this.props.history.push("/fenleTwo/"+id+"/"+name)
    }



    render() {
        const { list, n } = this.state
        return (
            <div className="Fenlei">
                <div className="Fenlei-top">分类</div>

                <div className="Fenlei-con">
                    {/* 左边导航栏 */}
                    <div className="Fenlei-left">
                        <ul className="Fenlei-nav">
                            {
                                list.map((item, index) => {
                                    return <li key={item.id} onClick={() => this.changeN(index)} className={n === index ? 'select' : ''}>{item.catename}</li>
                                })
                            }
                        </ul>
                    </div>
                    {/* 右边显示栏 */}
                    <div className="Fenlei-rigth">
                        {
                            list.length > 0 ? list[n].children.map(item => {
                                return <div key={item.id} className="Fenlei-rigth-box" onClick={() => this.toFenleiTwo(item.id,item.catename)}>
                                    <img src={item.img} alt="" />
                                    <p>{item.catename}</p>
                                </div>
                            }) : null
                        }
                    </div>
                </div>

            </div>
        )
    }
}
