// 分类
import React, { Component } from 'react'
import "./Fenlei.css"
import { getCateTree } from "../../util/request"
import Floor from "../../components/Floor/Floor"

export default class Fenlei extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            n:0
        }
    }
    componentDidMount() {
        getCateTree().then(res => {
            this.setState({
                list: res.data.list
            })
        })
    }
    changeN(index){
        this.setState({
            n:index
        })
    }


    render() {
        const {list,n}=this.state
        return (
            <div className="Fenlei">
            <div className="Fenlei-top">分类</div>
  
            <div className="Fenlei-con">
                {/* 左边导航栏 */}
                <div className="Fenlei-left">
                    <ul className="Fenlei-nav">
                        {
                            list.map((item,index)=>{
                            return <li key={item.id} onClick={()=>this.changeN(index)} className={n===index?'select':''}>{item.catename}</li>
                            })
                        }  
                    </ul>
                </div>
                {/* 右边显示栏 */}
                <div className="Fenlei-rigth">
                {
                    list.length>0?list[n].children.map(item=>{
                    return <div key={item.id} className="Fenlei-rigth-box">
                        <img src={item.img} alt=""/>
                        <p>{item.catename}</p>
                        </div>
                    }):null
                }
                </div>
            </div>
                <Floor></Floor>
          </div>
        )
    }
}
