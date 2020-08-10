import React from 'react'
import "./Cart.css"

export default function Cart(props) {
    const { info,specsattr,hade,show,joinCart} = props
  
    return (
        <div className="cart" onClick={(e)=>hade(e)}>
            <div className="cart-bon" onClick={(e)=>show(e)}>
                <div className="cart-ti">
                    <img src={info.img} alt="" />
                    <p>{info.goodsname}</p>
                </div>
                <p className="cart-gui">{info.specsname}</p>
                <div className="cart-shu">
                  
                    {
                        specsattr.map(item=>{
                            return <span>{item}</span>
                        })
                    }
                </div>
                <button className="cart-btn" onClick={()=>joinCart()}>加入购物车</button>
            </div>

        </div>
    )
}
