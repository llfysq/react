import React from 'react'
import "./Nav.css"
import miao from "../../../../assets/img/img/home/1.jpg"
export default function Nav() {
    return (
        <div>
           <ul className="Nav-ul">
               <li className='Nav-li'><img className='Nav-img' src={miao} alt=""/><p>限时抢购</p></li>
               <li className='Nav-li'><img className='Nav-img' src={miao} alt=""/><p>积分商城</p></li>
               <li className='Nav-li'><img className='Nav-img' src={miao} alt=""/><p>联系我们</p></li>
               <li className='Nav-li'><img className='Nav-img' src={miao} alt=""/><p>商品分类</p></li>
           </ul>
        </div>
    )
}
