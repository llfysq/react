
// 登录页面
import React, { Component } from 'react'
import "./components/Login.css"
import {requestLogin} from "../../util/request"
import showToast from "../../util/alert"
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
            }
        }
    }
// 点击注册，跳转到注册页面
    reg(){
        console.log( this.props)
        this.props.history.push('/register')
    }

    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    // 点击登录按钮
    login(){
        requestLogin(this.state.user).then(res=>{
        console.log(res);
            if(res.data.code===200){
                sessionStorage.setItem("isLogin",1)
                this.props.history.push("/index")
                showToast(res.data.msg)
            }else{
                showToast(res.data.msg)
            }
        })
    }
    render() {
        const {user}=this.state
        return (
            <div className="login">
            <div className="login-nav">
                <p>登录</p>
                <p className="nav-zhu" onClick={()=>this.reg()}>注册</p>
            </div>
            <div className="login-con">
                <div>
                    账号：<input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,"phone")}/>
                </div>
                <div>
                    密码：<input type="text" value={user.password} onChange={(e)=>this.changeUser(e,"password")}/>
                </div>
                <p className="login-forget">忘记密码</p>
            </div>
            
            <div className="login-btn">
                <button onClick={()=>this.login()}>登录</button>
            </div>
        </div>
        )
    }
}

