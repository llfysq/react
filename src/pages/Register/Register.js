
// 会员注册页面
import React, { Component } from 'react'
import "./components/Register.css"
import {requestRegister} from "../../util/request"
import GoBack from "../../components/GoBack/GoBack"
import showToast from "../../util/alert"

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            users:{
                phone:"",
                nickname:"",
                password:""
            }
        }
    }
    changeUser(e,key){
        this.setState({
            users:{
                ...this.state.users,
                [key]:e.target.value
            }
        })
    }
    // 点击注册
    register(){
    requestRegister(this.state.users).then(res=>{
        console.log(res)
        if(res.data.code===200){
            showToast(res.data.msg)
            this.props.history.push("/login")
        }else{
            showToast("注册失败")
        }
    })
}
    render() {
        const {users}=this.state
        return (
            <div className="reg">
                <div className="reg-nav">
                    {/* 封装的返回按钮 */}
                    <GoBack></GoBack>
                    {/* <p className="nav-zhu">返回</p> */}
                    <p>注册</p>

                </div>
                <div className="reg-con">
                    <div>
                        手机号：<input type="text" value={users.phone} onChange={(e)=>this.changeUser(e,"phone")}/>
                    </div>
                    <div>
                        昵称：<input type="text" value={users.nickname} onChange={(e)=>this.changeUser(e,"nickname")}/>
                    </div>
                    <div>
                        密码：<input type="text" value={users.password} onChange={(e)=>this.changeUser(e,"password")}/>
                    </div>
                   
                </div>

                <div className="reg-btn">
                    <button onClick={()=>this.register()}>注册</button>
                </div>
            </div>
        )
    }
}

