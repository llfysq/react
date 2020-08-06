import axios from "axios"
import qs from "qs"

// 会员注册
export const requestRegister=(params)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(params)
    })
}
// 会员登录
export const requestLogin=(params)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(params)
    })
}