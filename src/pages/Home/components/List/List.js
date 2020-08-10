import React from 'react'
import "./List.css"
import {Link} from "react-router-dom"
export default function List(props) {
    const { list} = props

  

    return (
        <div>
            {
                list.map(item => {
                    return <div key={item.id} className="List">
                        <img src={item.img} alt="" />
                        <div>
                            <p className="List-name">{item.goodsname}</p>
                            <p className="List-price">￥{item.price}</p>
                            <Link to={"/goodsInfo?id="+item.id}>
                                 <button className="List-btn">立即抢购</button>
                            </Link>
                           
                        </div>
                    </div>
                })
            }
        </div>
    )
}
