import axios from "axios"
import qs from "qs"
// 响应拦截
axios.interceptors.response.use(res=>{
    console.log(res);
    return res
})
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
// 获取分类信息
export const getCate=()=>{
    return axios({
        url:"/api/getcate",
        method:"get"
    })
}
// 获取轮播图
export const getBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
// 获取限时秒杀信息
export const getSeckill=()=>{
    return axios({
        url:"/api/getseckill",
        method:"get"
    })
}

// 获取商品信息
export const getIndexGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}
// 获取分类树形结构
export const getCateTree=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}
// 获取分类商品
export const getGoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params
    })
}
// 获取一个商品的信息
export const getGoodsInfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params
    })
}

// 购物车列表
export const getCartList=(params)=>{
    return axios({
        url:"/api/cartlist",
        method:"get",
        params
    })
}

// 购物添加
export const getCartAdd=(params)=>{
    return axios({
        url:"/api/cartadd",
        method:"post",
        data:qs.stringify(params)
    })
}
// 购物删除
export const getCartDelete=(params)=>{
    return axios({
        url:"/api/cartdelete",
        method:"post",
        data:qs.stringify(params)
    })
}
// 购物修改
export const getCartDit=(params)=>{
    return axios({
        url:"/api/cartedit",
        method:"post",
        data:qs.stringify(params)
    })
}