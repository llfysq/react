import React from 'react'
import "./Header.css"
import logo from "../../../../assets/img/img/home/logo.jpg"
export default function Header() {
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="" />
            <input className="header-search" type="text" placeholder="寻找商品"/>
           
        </div>
    )
}
